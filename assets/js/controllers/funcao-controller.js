app.controller('FuncoesController', function ($scope) {
  // var vm = this;

  $scope.carregarFuncoes = function () {
    $scope.funcoesDisponiveis = JSON.parse(localStorage.getItem('funcoesDisponiveis')) || [];
    $scope.funcoesDisponiveis = $scope.funcoesDisponiveis.filter(p => p.id != undefined);
    localStorage.setItem('funcoesDisponiveis', JSON.stringify($scope.funcoesDisponiveis));


    $scope.pessoasDisponiveis = JSON.parse(localStorage.getItem('pessoasDisponiveis')) || [];
    $scope.pessoasDisponiveis = $scope.pessoasDisponiveis.filter(p => p.id != undefined);
  };

  $scope.carregarFuncoes();

  $scope.funcao = {};
  $scope.pessoasFuncao = [];

  $scope.salvarPessoas = function () {
    $scope.pessoasFuncao = $scope.pessoasDisponiveis.filter(function (pessoa) {
      return pessoa.selected;
    });
  };

  $scope.salvarFuncao = function () {
    var funcaoExistente = $scope.funcoesDisponiveis.find(p => p.id == $scope.funcao.id);

    if (funcaoExistente) {
      funcaoExistente.nome = $scope.funcao.nome;
      funcaoExistente.idadeMinima = $scope.funcao.idadeMinima;
      funcaoExistente.pessoas = $scope.pessoasFuncao;
    } else {
      $scope.funcoesDisponiveis.push({
        id: $scope.funcoesDisponiveis.length + 1,
        nome: $scope.funcao.nome,
        idadeMinima: $scope.funcao.idadeMinima,
        pessoas: $scope.pessoasFuncao
      });
    }

    $scope.atualizarPessoas();

    localStorage.setItem('funcoesDisponiveis', JSON.stringify($scope.funcoesDisponiveis));

    $scope.funcao = {};
    $scope.pessoasFuncao = [];
    $scope.carregarFuncoes();
  };

  $scope.atualizarPessoas = function () {
    $scope.pessoasDisponiveis = $scope.pessoasDisponiveis.filter(p => p.id != undefined);
    $scope.pessoasDisponiveis.forEach(pessoa => {
      if (!pessoa.funcoes) {
        pessoa.funcoes = [];
      }

      if ($scope.pessoasFuncao.find(p => p.id == pessoa.id)
        && !pessoa.funcoes.find(f => f.id == $scope.funcao.id)) {
        pessoa.funcoes.push($scope.funcao);
      } else {
        pessoa.funcoes = pessoa.funcoes.filter(f => f.id != $scope.funcao.id);
      }
    });
    localStorage.setItem('pessoasDisponiveis', JSON.stringify($scope.pessoasDisponiveis));
  };

  $scope.excluirFuncao = function (funcaoId) {
    $scope.funcoesDisponiveis = $scope.funcoesDisponiveis.filter(p => p.id != funcaoId);
    localStorage.setItem('funcoesDisponiveis', JSON.stringify($scope.funcoesDisponiveis));
  };

  $scope.editarFuncao = function (funcaoId) {
    var editFuncao = $scope.funcoesDisponiveis.find(p => p.id == funcaoId);
    if (editFuncao) {
      $scope.funcao.id = editFuncao.id;
      $scope.funcao.nome = editFuncao.nome;
      $scope.funcao.idadeMinima = editFuncao.idadeMinima;

      if (editFuncao.pessoas) {
        $scope.pessoasFuncao = editFuncao.pessoas;
      } else {
        $scope.pessoasFuncao = [];
      }

      $scope.pessoasDisponiveis.forEach(pessoa => {
        if ($scope.pessoasFuncao.find(p => p.id == pessoa.id)) {
          pessoa.selected = true;
        } else {
          pessoa.selected = false;
        }
      });
    }
  }
});

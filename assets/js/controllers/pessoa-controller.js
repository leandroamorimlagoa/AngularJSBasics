app.controller('PessoasController', function ($scope) {
    $scope.carregarPessoas = function () {
        $scope.pessoasDisponiveis = JSON.parse(localStorage.getItem('pessoasDisponiveis')) || [];
        $scope.pessoasDisponiveis = $scope.pessoasDisponiveis.filter(p => p.id != undefined);
        localStorage.setItem('pessoasDisponiveis', JSON.stringify($scope.pessoasDisponiveis));

        $scope.funcoesDisponiveis = JSON.parse(localStorage.getItem('funcoesDisponiveis')) || [];
        $scope.funcoesDisponiveis = $scope.funcoesDisponiveis.filter(p => p.id != undefined);
    };

    $scope.carregarPessoas();

    $scope.funcoesPessoa = [];

    $scope.pessoa = {};

    $scope.salvarFuncoes = function () {
        $scope.funcoesPessoa = $scope.funcoesDisponiveis.filter(function (funcao) {
            return funcao.selected;
        });
    };

    $scope.salvarPessoa = function () {
        var pessoaExistente = $scope.pessoasDisponiveis.find(p => p.id == $scope.pessoa.id);

        if (pessoaExistente) {
            pessoaExistente.nome = $scope.pessoa.nome;
            pessoaExistente.idade = $scope.pessoa.idade;
            pessoaExistente.funcoes = $scope.funcoesPessoa;
        } else {
            $scope.pessoasDisponiveis.push({
                id: $scope.pessoasDisponiveis.length + 1,
                nome: $scope.pessoa.nome,
                idade: $scope.pessoa.idade,
                funcoes: $scope.funcoesPessoa
            });
        }

        $scope.atualizarFuncoes();

        localStorage.setItem('pessoasDisponiveis', JSON.stringify($scope.pessoasDisponiveis));

        $scope.pessoa = {};
        $scope.funcoesPessoa = [];
        $scope.carregarPessoas();
    };

    $scope.atualizarFuncoes = function () {
        $scope.funcoesDisponiveis = $scope.funcoesDisponiveis.filter(p => p.id != undefined);
        $scope.funcoesDisponiveis.forEach(funcao => {
          if (!funcao.pessoas) {
            funcao.pessoas = [];
          }
    
          if ($scope.funcoesPessoa.find(p => p.id == funcao.id)
            && !funcao.pessoas.find(f => f.id == $scope.pessoa.id)) {
                funcao.pessoas.push($scope.pessoa);
          } else {
            funcao.pessoas = funcao.pessoas.filter(f => f.id != $scope.pessoa.id);
          }
        });
        localStorage.setItem('funcoesDisponiveis', JSON.stringify($scope.funcoesDisponiveis));
      };

    $scope.excluirPessoa = function (pessoaId) {
        $scope.pessoasDisponiveis = $scope.pessoasDisponiveis.filter(p => p.id != pessoaId);
        localStorage.setItem('pessoasDisponiveis', JSON.stringify($scope.pessoasDisponiveis));
    };

    $scope.editarPessoa = function (pessoaId) {
        var editPessoa = $scope.pessoasDisponiveis.find(p => p.id == pessoaId);
        if (editPessoa) {
            $scope.pessoa.id = editPessoa.id;
            $scope.pessoa.nome = editPessoa.nome;
            $scope.pessoa.idade = editPessoa.idade;

            if (editPessoa.funcoes) {
                $scope.funcoesPessoa = editPessoa.funcoes;
            } else {
                $scope.funcoesPessoa = [];
            }

            $scope.funcoesDisponiveis.forEach(funcao => {
                if ($scope.funcoesPessoa.find(p => p.id == funcao.id)) {
                    funcao.selected = true;
                } else {
                    funcao.selected = false;
                }
            });
        }
    }
});

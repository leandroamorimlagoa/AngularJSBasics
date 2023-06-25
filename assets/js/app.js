var app = angular.module('myApp', ['ngRoute']);

app.controller('HomeController', function($scope) {
  $scope.mensagem = "Bem-vindo ao projeto de exemplo! Este é um projeto simples para demonstração. Se você tiver alguma sugestão de melhoria, por favor, envie um e-mail para meuemail@example.com.";
});

app.controller('PessoasController', function($scope) {
  // Lógica do cadastro de pessoas
});

app.controller('FuncoesController', function($scope) {
  // Lógica do cadastro de funções
});

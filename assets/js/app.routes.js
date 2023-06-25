app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'pages/home.html',
      controller: 'HomeController',
      controllerAs: 'homeCtrl'
    })
    .when('/pessoas', {
      templateUrl: 'pages/pessoas.html',
      controller: 'PessoasController',
      controllerAs: 'pessoasCtrl'
    })
    .when('/funcoes', {
      templateUrl: 'pages/funcoes.html',
      controller: 'FuncoesController',
      controllerAs: 'funcoesCtrl'
    })
    .otherwise({
      redirectTo: '/home'
    });

  $locationProvider.hashPrefix('!');
});

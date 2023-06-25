$(function () {
  var scriptFiles = [];

  // Função para obter a lista de arquivos *.js da pasta
  function getScriptFiles() {
    return $.ajax({
      url: '/assets/js/controllers/',
      success: function (data) {
        $(data).find('a[href$=".js"]').each(function () {
          scriptFiles.push('/assets/js/controllers/' + $(this).attr('href'));
        });
      }
    });
  }

  console.log('Carregando arquivos *.js da pasta assets/js/controllers');
  
  getScriptFiles().then(function () {
    var loadPromises = [];

    for (var i = 0; i < scriptFiles.length; i++) {
      loadPromises.push($.getScript(scriptFiles[i]));
    }

    return Promise.all(loadPromises);
  }).then(function () {
    console.log('Arquivos *.js da pasta assets/js/controllers carregados com sucesso');
    
    // Aguardar um pequeno intervalo para garantir que as controllers tenham sido carregadas corretamente
    setTimeout(function() {
      angular.bootstrap(document, ['myApp']);
    }, 500);
  });
});

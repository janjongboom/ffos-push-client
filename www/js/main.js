require.config({
  shim: {
    'angular': {
      exports: 'angular'
    }
  },
  paths: {
    angular: 'components/angular/angular',
    app: 'js/app'
  },
  baseUrl: '/'
});

(function() {
  require([
    // dependencies
    'angular',

    // application
    'app',
    'js/mobile-nav.js',
    
    // services
    
    // controllers
    'js/controllers/index.js'
  ], function(angular) {
    angular.bootstrap(document, ['app']);
  });

})();

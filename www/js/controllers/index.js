function IndexCtrl($scope, $routeParams) {
  $scope.hasMozApps = !!navigator.mozApps;
  
  if (navigator.mozApps) {
    var checkIfInstalled = navigator.mozApps.getSelf();
    checkIfInstalled.onsuccess = function () {
      $scope.isInstalled = !!checkIfInstalled.result;
      $scope.$apply();
    };
  }
  
  $scope.install = function() {
    var manifestURL = location.href.substring(0, location.href.lastIndexOf("/")) + "/manifest.webapp";
    var installApp = navigator.mozApps.install(manifestURL);
    installApp.onsuccess = function(data) {
      $scope.isInstalled = true;
      $scope.$apply();
    };
    installApp.onerror = function() {
      alert("Install failed\n\n:" + installApp.error.name);
    };
  };
}

IndexCtrl.$inject = ['$scope', '$routeParams'];

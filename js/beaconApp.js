var beaconApp = angular.module("beaconApp", ['google-maps']);

beaconApp.config(function ($routeProvider) {
  console.log($routeProvider);

  $routeProvider
    .when("/", {
      controller: "SkimmersCtrl",
      templateUrl: "js/views/skimmersView.html"
    });

  $routeProvider.otherwise({ "redirecTo": "/" })
})
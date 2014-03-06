beaconApp.controller("SkimmersCtrl", function ($scope, skimmersService) {

  $scope.skimmers = skimmersService.skimmers
  skimmersService.getSkimmers()

  $scope.map = {
    center: {
      latitude: 0,
      longitude: 0
    },

    zoom: 2
  }
})
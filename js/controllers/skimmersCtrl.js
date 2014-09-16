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

  $scope.bands = [
    { band: '137kHz', selected: false },
    { band: '472kHz', selected: false },
    { band: '160m', selected: false },
    { band: '80m', selected: false },
    { band: '60m', selected: false },
    { band: '40m', selected: false },
    { band: '30m', selected: false },
    { band: '20m', selected: false },
    { band: '17m', selected: false },
    { band: '15m', selected: false },
    { band: '10m', selected: false },
    { band: '6m', selected: false },
    { band: '4m', selected: false },
    { band: '2m', selected: false },
    { band: '70cm', selected: false },
    { band: '23cm', selected: false },
    { band: '13cm', selected: false },
    { band: '9cm', selected: false }
  ]

  $scope.continents = [
    { code: 'AF', cont: "Africa", selected: false },
    { code: 'AS', cont: "Asia", selected: false },
    { code: 'EU', cont: "Europe", selected: false },
    { code: 'NA', cont: "North America", selected: false },
    { code: 'OC', cont: "Oceania", selected: false },
    { code: 'SA', cont: "South America", selected: false }
  ]
})

beaconApp.filter('withBands', function () {
  return function (items, bands) {
    var filtered = []
    var selectedBands = _.pluck(_.where(bands, { selected: true }), 'band')

    angular.forEach(items, function(item) {
      angular.forEach(item.band_m, function(band) {
        if (_.contains(selectedBands, band)) {
          filtered.push(item)
        }
      })
    })

    return (filtered.length == 0 ? items : filtered)
  }
})

beaconApp.filter('withConts', function () {
  return function (items, conts) {
    var filtered = []
    var selectedConts = _.pluck(_.where(conts, { selected: true }), 'code')

    angular.forEach(items, function(item) {
      if (_.contains(selectedConts, item.cont)) {
        filtered.push(item)
      }
    })

    return (filtered.length == 0 ? items : filtered)
  }
})
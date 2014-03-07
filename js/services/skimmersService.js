beaconApp.factory("skimmersService", function($http) {
  var _skimmers = []

  var convertToLatLong = function(gridLocator) {
    var rad = gridloc2rad(gridLocator)
    if(rad){
      rad = { "latitude": rad2dg(rad[0]), "longitude": rad2dg(rad[1]) }
    }

    return rad
  }

  var _getSkimmers = function() {
    // $http.get("http://www.reversebeacon.net/skimmers/detail_json.php")
    $http.get("/js/data/skimmers.json")
         .then(function(results) {
            //success
            _(results.data).each(function(value, key) {

            //some grid locators are equal callsign
              if (value.grid != value.call) {
                value.latLong = convertToLatLong(value.grid)
              }
            }, this)

            angular.copy(results.data, _skimmers)
          }, function(results) {
            //error
            console.log("Error:" + results.data + "-------------" + results.status)
          })
  }

  return {
    skimmers: _skimmers,
    getSkimmers: _getSkimmers
  }
})
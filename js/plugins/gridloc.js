function gridloc2rad ( loc ){
  // if (!_(loc.match(/[A-Z]{2}\d{2}[A-Z]{2}/)).isNull()) {
  if (loc.match(/[A-Z]{2}\d{2}[A-Z]{2}/) != null) {
    var xpto='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var loc0 = xpto.search(loc.charAt(0).toUpperCase());
    var loc1 = xpto.search(loc.charAt(1).toUpperCase());
    var loc2 = eval(loc.charAt(2));
    var loc3 = eval(loc.charAt(3));

    if ( loc.length == 6 && loc.charAt(4) != ' ' )  {
            var loc4 = xpto.search(loc.charAt(4).toUpperCase());
            var loc5 = xpto.search(loc.charAt(5).toUpperCase());
    } else  {
            var loc4 = xpto.search('M');
            var loc5 = xpto.search('M');
    }
    var l1 = -180.0 + (loc0 * 20.0) + (loc2 * 2.0) + (loc4 / 12.0) + (1.0/24.0);
    var l2 = -90.0  + (loc1 * 10.0) + loc3 + (loc5 / 24.0) + (1.0/48.0);
    //l1 = - l1;
    var a = [];
    a[1] =  l1 * Math.PI / 180.0;
    a[0] =  l2 * Math.PI / 180.0;
    return a;
  }
}

/** Convert numeric degrees to radians */
function dg2rad (degrees) {
  return degrees * Math.PI / 180;
}

/** Convert radians to numeric (signed) degrees */
function rad2dg (rad) {
  return rad * 180 / Math.PI;
}
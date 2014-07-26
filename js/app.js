  var myApp = angular.module("myApp", ["firebase"]);
 
  function MyController($scope, $firebase) {
    var standingClicks = new Firebase("https://sharktank.firebaseio.com/standingClicks");
    var guardClicks = new Firebase("https://sharktank.firebaseio.com/guardClicks");
    var scarfHoldClicks = new Firebase("https://sharktank.firebaseio.com/scarfHoldClicks");
    var traditionalSideCtrlClicks = new Firebase("https://sharktank.firebaseio.com/traditionalSideCtrlClicks");
    var mountClicks = new Firebase("https://sharktank.firebaseio.com/mountClicks");
    var backCtrlClicks = new Firebase("https://sharktank.firebaseio.com/backCtrlClicks");
    var northSouthClicks = new Firebase("https://sharktank.firebaseio.com/northSouthClicks");
    var beltTieClicks = new Firebase("https://sharktank.firebaseio.com/beltTieClicks");
    var bjjLineageClicks = new Firebase("https://sharktank.firebaseio.com/bjjLineageClicks");
    var techniqueStatsClicks = new Firebase("https://sharktank.firebaseio.com/techniqueStatsClicks");

    // Automatically syncs everywhere in realtime
    $scope.standing = $firebase(standingClicks);
    $scope.guard = $firebase(guardClicks);
    $scope.scarfHold = $firebase(scarfHoldClicks);
    $scope.traditionalSideCtrl = $firebase(scarfHoldClicks);
    $scope.mount = $firebase(mountClicks);
    $scope.backCtrl = $firebase(backCtrlClicks);
    $scope.northSouth = $firebase(northSouthClicks);
    $scope.beltTie = $firebase(beltTieClicks);
    $scope.bjjLineage = $firebase(bjjLineageClicks);
    $scope.techniqueStats = $firebase(techniqueStatsClicks);
  }

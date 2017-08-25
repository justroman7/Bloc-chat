(function() {
  function HomeCtrl(Room, $scope) {
    console.log(Room);
    $scope.Room = Room;
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$scope', HomeCtrl]);
})();

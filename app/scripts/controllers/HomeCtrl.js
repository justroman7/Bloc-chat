(function() {
  function HomeCtrl(Room, $scope) {
    console.log(Room);
    $scope.Rooms = Room.all;
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$scope', HomeCtrl]);
})();

(function() {
  function HomeCtrl(Room, $scope, $uibModal) {
    console.log(Room);
    $scope.Rooms = Room.all;
    this.addRoom = function() {
      $uibModal.open({
        templateUrl: '/templates/modal.html',
        size: 'sm',
        controller: 'ModalCtrl as modal'
      });
    }
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$scope', '$uibModal', HomeCtrl]);
})();

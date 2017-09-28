
(function() {
  function HomeCtrl(Room, Message, $scope, $uibModal) {
    this.rooms = Room.all;

    $scope.Rooms = Room.all;
    this.addRoom = function() {
      $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl as modal'
      });
    };

    this.setRoom = function(room) {
      this.currentRoom = room;
      this.currentMessages = Message.getByRoomId(this.currentRoom.$id);
    };
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', '$scope', '$uibModal', HomeCtrl]);
})();

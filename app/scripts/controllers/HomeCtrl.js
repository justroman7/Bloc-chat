
(function() {
  function HomeCtrl(Room, Message, $scope, $uibModal, $cookies) {
    this.rooms = Room.all;
    this.currentUser = $cookies.get('blocChatCurrentUser');
    $scope.Rooms = Room.all;
    this.addRoom = function() {
      $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl as modal',
        keyboard: false,
        backdrop: 'static'
      });
    };

    this.setRoom = function(room) {
      this.currentRoom = room;
      this.currentMessages = Message.getByRoomId(this.currentRoom.$id);
    };

    this.sendMessage = function() {
      this.newMessage.roomId = this.currentRoom.$id;
      this.newMessage.username = this.currentUser;
      Message.send(this.newMessage);
    };
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', '$scope', '$uibModal', '$cookies', HomeCtrl]);
})();

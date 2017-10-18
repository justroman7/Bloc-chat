(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');

    if(!currentUser || currentUser === '') {
      $uibModal.open ({
        templateUrl: '/templates/username.html',
        controller: 'ModalCtrl as modal',
        keyboard: true,
        backdrop: 'static'
      });
    }
  }

  angular
  .module('blocChat')
  .run(['$cookies', '$uibModal', BlocChatCookies]);
})();

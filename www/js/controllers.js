angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
//kendi controller
.controller('duyurularCtrl',function($scope,bilgiService) {
  $scope.mesajim="bu bizim ilk taşınan msjımız.ozge halil duman";
  $scope.duyurular = bilgiService.duyurulariServerdanGetir($scope);
/*
  $scope.duyurular = [
    { baslik: 'DUYURU A',icerik:'11111 111111' ,id: 1 },
    { baslik: 'DUYURU B',icerik:'222222 111111' , id: 2 },
    { baslik: 'DUYURU C',icerik:'333333 111111', id: 3 },
    { baslik: 'DUYURU D',icerik:'444444 111111', id: 4 },
    { baslik: 'DUYURU E',icerik:'55555 111111', id: 5 },
    { baslik: 'DUYURU F',icerik:'6666 111111', id: 6 }
  ];
  */
})
.controller('duyuruCtrl', function($scope,$stateParams) {
  $scope.secilenduyuru=$stateParams.dyid;
})
//orjşnal controller
.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});

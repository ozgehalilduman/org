angular.module('starter.services', [])
  .factory('bilgiService',function($http){
        return{
          duyurulariGetir:function(scope){
              var $promise=$http.get('data/duyurular.json');
              $promise.then(function(msg){
                  scope.duyurular=msg.data;
               });//promise kısmının
             },//duyuruGetir:function(scope){.

          duyurulariServerdanGetir:function(scope){
              var $promise=$http.post('http://e-okulrehberlik.com/telefon/ogrenci_liste_getir.php');
              $promise.then(function(msg){
                  scope.duyurular=msg.data;
               });//promise kısmının
              }//duyuruGetir:function(scope){.
          }//return
     });

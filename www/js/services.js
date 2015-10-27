'use strict';
angular.module('starter.services', [])
  .factory('duyurularService',function($http){
        return{
            duyurulariGetir:function(scope){
                var $promise=$http.get('data/duyurulariGetir.json');
                $promise.then(function(msg){
                  console.info(msg.data);
                    scope.duyurular=msg.data;
                 });
                }//duyuruGetir:function(scope){.
            }//return
     });

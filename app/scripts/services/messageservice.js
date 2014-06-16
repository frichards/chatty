'use strict';

angular.module('chattyApp')
  .service('MessageService', function MessageService($http, $q) {
 
  	this.getMessages =  function(){
			var d = $q.defer();
			$http({
				method:'GET',
				url: 'http://localhost:11100/'
			}).success(function(data){
				d.resolve(data);

			}).error(function (err){
				d.reject(err);
			});

		return d.promise;
		};

	 this.postMessages= function(text){
			var d = $q.defer();
			$http({
				method:'POST',
				url: 'http://localhost:11100',
				data: {message: text}
			}).success(function(data){
				d.resolve(data);

			}).error(function (err){
				d.reject(err);
			});

		return d.promise;
		};

  });


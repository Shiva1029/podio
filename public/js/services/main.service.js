(function () {
    'use strict';
    angular.module('userStories').factory('main', function ($http, $q) {
        var httpDeferGet = function (url) {
            var deferred = $q.defer();
            $http.get(url)
                .then(function successCallback(response) {
                    deferred.resolve(response.data);
                }, function errorCallback(response) {
                    deferred.reject(response.status);
                });
            return deferred.promise;
        };

        var httpDeferPost = function (url, obj) {
            var deferred = $q.defer();
            $http.post(url, obj)
                .then(function successCallback(response) {
                    deferred.resolve(response.data);
                }, function errorCallback(response) {
                    deferred.reject(response.status);
                });
            return deferred.promise;
        };

        var searchUser = function (sso) {
            return httpDeferGet('data/search.json');
        };


        return {
            searchUser: searchUser
        };
    });
})();
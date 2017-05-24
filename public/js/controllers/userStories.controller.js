(function () {
    'use strict';
    angular.module('userStories')
        .controller('userStoriesController', ['$rootScope', '$scope', function ($rootScope, $scope) {
            var that = $scope;

            that.userStories = $rootScope.userStories;
        }]);
})();
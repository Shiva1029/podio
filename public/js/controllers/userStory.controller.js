(function () {
    'use strict';
    angular.module('userStories')
        .controller('userStoryController', ['$rootScope', '$scope', '$stateParams', function ($rootScope, $scope, $stateParams) {
            var that = $scope;
            that.userStories = $rootScope.userStories;
            that.story = $rootScope.userStoryHashMap[$stateParams.storyId];
        }]);
})();
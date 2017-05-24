(function () {
    'use strict';
    angular.module('userStories')
        .controller('taskController', ['$rootScope', '$scope', '$stateParams', function ($rootScope, $scope, $stateParams) {
            var that = $scope;
            that.userStories = $rootScope.userStories;
            that.story = $rootScope.userStoryHashMap[$stateParams.storyId];
            that.task = $rootScope.taskHashMap[$stateParams.taskId];
        }]);
})();
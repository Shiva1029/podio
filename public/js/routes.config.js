(function () {
    'use strict';

    angular
        .module('userStories')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    /*route provider*/
    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/userStories");

        /*states*/
        $stateProvider
            .state("userStories", {
                url: "/userStories",
                templateUrl: "partials/userStories.html",
                controller: "userStoriesController"
            })
            .state("userStory", {
                url: "/userStory/:storyId",
                templateUrl: "partials/userStory.html",
                controller: "userStoryController"
            })
            .state("task", {
                url: "/userStory/:storyId/task/:taskId",
                templateUrl: "partials/task.html",
                controller: "taskController"
            })

    }
})();

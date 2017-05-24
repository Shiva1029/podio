(function () {
    'use strict';
    angular.module('userStories')
        .controller('mainController', ['$rootScope', '$scope', 'main', function ($rootScope, $scope, main) {
            var that = $scope;
            var scope = $rootScope;
            scope.userStories = [];
            that.searchTerm = '';

            that.pageLoad = function () {
                that.errMsg = '';
                that.load = true;
                main.searchUser().then(function (data) {
                    scope.userStories = data;
                })
                    .catch(function (err) {
                        that.errMsg = 'Sorry! Something went wrong. ' + err;
                    }).finally(function () {
                    that.load = false;
                    that.buildHashMap();
                });
            };

            that.buildHashMap = function () {
                scope.userStoryHashMap = {};
                scope.taskHashMap = {};
                for (var i = 0; i < that.userStories.length; i++) {
                    scope.userStoryHashMap[that.userStories[i].id] = that.userStories[i];
                    for (var j = 0; j < that.userStories[i].spaces.length; j++) {
                        scope.taskHashMap[that.userStories[i].spaces[j].id] = that.userStories[i].spaces[j];
                    }
                }
            };

            /*-------Begin Page Load--------*/
            that.pageLoad();

        }
        ]);
})();
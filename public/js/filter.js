(function () {
    'use strict';
    angular.module('userStories')
        .filter("as", function ($parse) {
        return function (value, context, path) {
            return $parse(path).assign(context, value);
        };
    });
})();
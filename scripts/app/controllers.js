(function (window) {
    
    'use strict';
    
    var app = angular.module('app');

    app.controller('ArticlesController',

                ['$scope', 'articles',
        function ($scope,   articles) {

            $scope.articles = articles;

        }]);

    app.controller('ContactController',

                ['$scope', '$state',
        function ($scope,   $state) {

            $scope.navigate = function () {
                $state.go('articles');
            };

        }]);

}(window));
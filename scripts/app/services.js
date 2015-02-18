(function (window) {
    
    'use strict';

    angular.module('app').factory('ArticlesService',

                ['$q',
        function ($q) {

            var deferred = $q.defer();

            deferred.resolve([
                {
                    title: 'Introduction to IndexedDB: The ' +
                           'In-Browser Database',
                    pageName: 'indexeddb'
                },
                {
                    title: 'HTML5 History: Clean URLs for ' +
                           'Deep-linking Ajax Applications',
                    pageName: 'html5-history'
                },
                {
                    title: 'Build an HTML5 Offline Application ' +
                           'with Application Cache, Web Storage ' +
                           'and ASP.NET MVC',
                    pageName: 'offline-apps'
                },
                {
                    title: 'Introduction to HTML5',
                    pageName: 'html5'
                }
            ]);

            return deferred.promise;
        }]);

}(window));
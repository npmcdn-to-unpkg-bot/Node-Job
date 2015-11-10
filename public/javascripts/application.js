var JobApp = angular.module('JobApp', [
    'ngRoute',
    'JobControllers',
    'JobServices'
]);
JobApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: '/base/job-list.hbs',
                controller: 'JobListCtrl'
            })
    }]);

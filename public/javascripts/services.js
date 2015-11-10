var JobServices = angular.module('JobServices', ['ngResource']);

JobServices.factory('Job', ['$resource',
    function($resource){
        return $resource('jobs/:jobId.json', {}, {
            query: {method:'GET', params:{jobId:'jobs'}, isArray:true}
        });
    }]);
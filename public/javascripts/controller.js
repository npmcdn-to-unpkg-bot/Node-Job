var JobControllers = angular.module('JobControllers', []);

JobControllers.controller('JobListCtrl', ['$scope', 'Job',
    function($scope, Job) {
        $scope.jobs = Job.query();
        $scope.locations = ['Ottawa', 'Montreal', 'Toronto'];
        $scope.times = [
            {name:'All items', value: Date},
            {name:'Newer than 3 days', date:moment().subtract(3, 'day')},
            {name:'Newer than 7 days', date:moment().subtract(7, 'day')},
            {name:'Newer than 15 days', date:moment().subtract(15, 'day')}
        ];
        $scope.dateRangeFilter = function (property, startDate, endDate) {
            return function (item) {
                if (item[property] === null) return false;

                var itemDate = moment(item[property]);
                var s = moment(startDate, "11/01/2015");
                var e = moment(endDate, "11/08/2015");

                if (itemDate >= s && itemDate <= e) return true;
                return false;
            }
        }

    }
]);
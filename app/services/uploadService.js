angular.module('MyApp')
  .factory('UploadService',function($http){
    return {
      uploadImage : function(image) {
        var fd = new FormData();
        fd.append('files', image);

        return $http({
            method: 'POST',
            url: '/upload/images',
            data: fd,
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        });
      }
    }
  })

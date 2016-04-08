angular.module('MyApp')
  .controller('ProfileCtrl', function($scope, $auth, toastr, UploadService,Account) {
    $scope.getProfile = function() {
      Account.getProfile()
        .then(function(response) {
          $scope.user = response.data;
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
    };
    $scope.updateProfile = function() {
      Account.updateProfile($scope.user)
        .then(function() {
          toastr.success('Profile has been updated');
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
    };
    $scope.uploadImage = function(image){
      if(typeof(image) === 'object') {
          UploadService.uploadImage(image)
          .then(function(response) {
              toastr.success('Uploaded Image successfully')
              console.log(response.data.data);
              $scope.user.picture = response.data.data;
              return response;
          })
          .catch(function(error){
            toastr.error(error.data.message, error.status);
          })
      }else{
        toastr.error('please choose image');
      }
    }
    $scope.link = function(provider) {
      $auth.link(provider)
        .then(function() {
          toastr.success('You have successfully linked a ' + provider + ' account');
          $scope.getProfile();
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
    };
    $scope.unlink = function(provider) {
      $auth.unlink(provider)
        .then(function() {
          toastr.info('You have unlinked a ' + provider + ' account');
          $scope.getProfile();
        })
        .catch(function(response) {
          toastr.error(response.data ? response.data.message : 'Could not unlink ' + provider + ' account', response.status);
        });
    };

    $scope.getProfile();
  });

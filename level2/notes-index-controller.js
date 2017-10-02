// 2.4 Outside Controller & $scope
// Now that you are familiar with $scope, let's practice using it with an outside controller.

// 1.) Attach notes to $scope instead of the controller ( this).
// 2.) Remove the controllerAs controller alias from routes.js.
// 3.) Update the notes/index.html template to work with $scope.

angular.module('NoteWrangler')
.controller('NotesIndexController', ['$http','$scope', function($http, $scope) {//1.)
  $http({method: 'GET', url: '/notes'}).success(function(data) {
    $scope.notes = data;//1.)
  });
}]);
// 2.4 Outside Controller & $scope
// Now that you are familiar with $scope, let's practice using it with an outside controller.

// 1.) Attach notes to $scope instead of the controller ( this).
// 2.) Remove the controllerAs controller alias from routes.js.
// 3.) Update the notes/index.html template to work with $scope.

angular.module('NoteWrangler', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      redirectTo: '/users'
    })
    .when('/notes', {
      templateUrl: 'templates/pages/notes/index.html',
      controller: 'NotesIndexController',
    //   controllerAs: 'notesCtrl' //2.)
    })
    .when('/users', {
      templateUrl: 'templates/pages/users/index.html'
    })
    .when('/notes/new', {
      templateUrl: 'templates/pages/notes/edit.html',
      controller: 'NotesCreateController'
    })
    .when('/notes/:id', {
      templateUrl: 'templates/pages/notes/show.html',
      controller: 'NotesShowController'
    })
    .otherwise({
      redirectTo: '/notes'
    });
}]);
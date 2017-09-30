// 1.12 Displaying a Single Note
// Use the routeParams service to fetch a single note based on the id given in the URL from the server URL /notes/:id.

// An example of a possible URL for this might be: http://example.com/#/notes/42.

// 1.) Inject the routeParams service into the NotesShowController so that we get access to the id in the URL.
// 2.) Inject the $http service into the NotesShowController so we can use it to fetch a note.
// 3.) Use the $http() function to fetch a note from the /notes/:id URL.
// Upon success, save the resulting data to a note variable on the controller.

angular.module('NoteWrangler')
.controller('NotesShowController', ['$routeParams', 'http', function($http, $routeParams) { //1.) //2.)
 var controller = this; //3.)

  $http({method: 'GET', url: '/notes/' + $routeParams.id}).success(function(data){
    controller.note = data;
  });
}]);
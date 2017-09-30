// 1.2 The Beginning of All Routes
// Let's get started creating routes for this super-duper NoteWrangler app! The night is late and the coffee is gettin' cold.
// Let's set up our app so we can start wranglin' some notes!

// 1.) Inside the app.js file, declare an AngularJS module for our NoteWrangler app.
// For now it will have no dependencies.
// 2.) What is the name of the module you need to include to use routes? Update the app.js module declaration to include it.
// 3.) Define the module’s config() function and inject $routeProvider.
// 4.) Create a simple route for when /notes is in the URL, link to the index.html template in the templates/pages/notes/ directory.
// 5.) Now, add a new div tag to our index.html with an attribute directive that will include the rendered template for the current route.

   angular.module("NoteWrangler", ['ngRoute'])   //1.) //2.)
   .config(['$routeProvider', function($routeProvider) { //3.)
    $routeProvider.when('/notes', {
    templateUrl: 'templates/pages/notes/index.html'//4.)
  });
}]);

// 1.4 A New Route and a Root Route
// Practice using when() by creating a route for new notes and a route for the root of the application.

// 1.) Create a new route which maps /notes/new to the notes edit.html template.
// 2.) Create a route for / that redirects to the /users index page.
// 3.) Create a default route that will redirect the user to /notes when an undefined route is used.

angular.module('NoteWrangler', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider

    .when('/notes', {
      templateUrl: 'templates/pages/notes/index.html'
    })
    .when('/users', {
      templateUrl: 'templates/pages/users/index.html'
    })
    .when('/notes/new', { //1.)
      templateUrl: 'templates/pages/notes/edit.html'
    })
    .when('/', { //2.)
      redirectTo: '/users'
    })
    .otherwise({ redirectTo: '/notes'}); //3.)


}]);

// 1.9 Inside Route Controller
// We want to display notes from the server within our template.
// Let's get started by creating a controller in our routes file.

// 1.) Create a controller function inside this /notes route.
// 2.) Give the newly created controller an alias of notesCtrl so that we can access it from within the notes index template.
// 3.) We'll need to make a call to the server to retrieve the list of notes data, 
// so we'll need to use the $http service in the controller we just created. Inject the $http service into the controller.
// 4.) Use the $http() function to make an HTTP request to the /notes URL. Upon success, save the resulting data to a notes variable on the controller.
 
angular.module('NoteWrangler', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      redirectTo: '/users'
    })
    .when('/notes', {
      templateUrl: 'templates/pages/notes/index.html',
      controller: function() {  //1.)
        var controller = this;
        $http({method: 'GET', url: '/notes'}).success(function(data) { //3.)  //.4)
          controller.notes = data;
        });  
      },
      controllerAs: 'notesCtrl' //2.)
    })
    .when('/users', {
      templateUrl: 'templates/pages/users/index.html'
    })
    .when('/notes/new', {
      templateUrl: 'templates/pages/notes/edit.html'
    })
    .otherwise({
      redirectTo: '/notes'
    });
}]);

$http.get('/notes').success(function(data) {
      var notes = data;
  });
  
// 1.10 Outside Controller
// In order for a new note to be created by a user on the new notes page,
// we need to add a controller and use the $http service to create a new note.
// This time around, we'll use an external controller for the new notes page.

// 1.) Attach the NotesCreateController to the new notes route.
// 2.) Give the controller an alias we can reference in the template.
// 3.) Use the ngModel directive to save the data from each form input and textarea in a model called note.
// Remember the data key on the model matches the form input name. 
// Look at the description textarea in the notes/new.html template for an example.
// 4.) Use the ngClick directive to call the saveNote() function of the controller when the save button is clicked.
// Remember to pass the note model to the function.

angular.module('NoteWrangler', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      redirectTo: '/users'
    })
    .when('/notes', {
      templateUrl: 'templates/pages/notes/index.html',
      controller: function($http){
        var controller = this;
        $http({method: 'GET', url: '/notes'}).success(function(data){
          controller.notes = data;
        });
      },
      controllerAs: 'notesCtrl'
    })
    .when('/users', {
      templateUrl: 'templates/pages/users/index.html'
    })
    .when('/notes/new', {
      templateUrl: 'templates/pages/notes/edit.html',
      controller: 'NotesCreateController', //1.)
      controllerAs: 'newNotesCtrl' //2.)
    })
    .otherwise({
      redirectTo: '/notes'
    });
}]);

// 1.12 Displaying a Single Note
// Use the routeParams service to fetch a single note based on the id given in the URL from the server URL /notes/:id.

// An example of a possible URL for this might be: http://example.com/#/notes/42.

// 1.) Inject the routeParams service into the NotesShowController so that we get access to the id in the URL.
// 2.) Inject the $http service into the NotesShowController so we can use it to fetch a note.
// 3.) Use the $http() function to fetch a note from the /notes/:id URL.
// Upon success, save the resulting data to a note variable on the controller.


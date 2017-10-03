// 3.2 A Factory Recipe I
// Let's try making our own factory.
// Create a factory and name it whatever you want.
// But don't forget to stick to the AngularJS naming convention for factories!

angular.module('NoteWrangler')
.factory("factNote", function factNoteFactory() {
  
});

// 3.3 A Factory Recipe II 
// Now that you know about factories, let's clean up the controller a bit by moving that $http() call into its own factory.

// 1.) Return an object from the NoteFactory() function that has a method named all.
// 2.) Move the $http() call from the controller into the all() function in our Note factory and return the resulting promise.
// Don't forget to inject the $http service!
// 3.) Inject the Note factory into the controller and use the new all() method instead of calling $http() directly.

angular.module('NoteWrangler')
.factory('Note', ['$http', function NoteFactory() { //2.)
  return { //1.)
    all: function() {
      return $http({method: 'GET', url: '/notes'}); //2.)
    }
  };
}]);

// 3.11 $resource Refactor 250 PTS
// Let's convert our custom Note factory to use AngularJS resource.
// Remove all(), find(), and create() methods from our Note service and replace them with the $resource equivalent.

// 1.) Include angular-resource.js in index.html so that we can use it in our app.
// It is located in the same directory as our angular.js file.
// 2.) Include ngResource in the NoteWrangler module.
// 3.) Replace the existing object that is returned from the Note factory with an AngularJS resource that uses '/notes' as the data source.

angular.module('NoteWrangler')
.factory('Note', ['$http', function NoteFactory($http) {
  
//   return {
//     all: function() {
//       return $http({method: 'GET', url: "/notes"});
//     },
//     find: function(id) {
//       return $http({method:'GET', url: '/notes/' + id});
//     },
//     create: function(noteObj) {
//       return $http({method: 'POST', url: '/notes/', data: noteObj});
//     }
//   };
    return $resource('/notes'); //3.)
}]);

// 3.13 A Custom Method for Our Note $resource
// Wouldn't it be great to have a custom method on our Note resource to mark it as tweeted?

// 1.) Add a tweetIt method to the Note resource. Remember, this updates an existing note, so use the correct HTTP method.

angular.module('NoteWrangler')
.factory('Note',['$resource', function NoteFactory($resource) {
  return $resource('/notes', {}, {
    tweetIt: { //1.)
      method: 'PUT'
    }
  });
}]);

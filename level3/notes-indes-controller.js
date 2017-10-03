// 3.3 A Factory Recipe II 
// Now that you know about factories, let's clean up the controller a bit by moving that $http() call into its own factory.

// 1.) Return an object from the NoteFactory() function that has a method named all.
// 2.) Move the $http() call from the controller into the all() function in our Note factory and return the resulting promise.
// Don't forget to inject the $http service!
// 3.) Inject the Note factory into the controller and use the new all() method instead of calling $http() directly.

angular.module('NoteWrangler')
.controller('NotesIndexController', ['$scope','Note', function($scope, Note) { //3.)
  Note.all().success(function(data){ //3.)
    $scope.notes = data;
  });
}]);

// 3.5 A Tweetable Service 
// There is an outside Tweet Validator API that we want to use in our NoteWrangler application.
// We have already created a tweetable.js file and included it in our index.html file.
// Now, it's factory building time!

// 1.) Let's create a Tweetable service to use the Tweet Validator API across our application.
// To begin, let's name our service ''Tweetable'', inject $http and have our factory function return an anonymous function.
// 2.) nside the factory, make a POST request with the $http() function to this endpoint:
// http://gentle-spire-1153.herokuapp.com/tweet
// The service function should accept a single argument, potentialTweet, that will be sent to the external API.
// Use the Tweet Validator API documentation to determine how to construct the data of our POST request.
// Return your $http() call so we can use it later.
// Note: You cannot use $http.post() because the shortcut methods aren't available in these challenges.
// 3.) Inject our brand spankin' new Tweetable service into NotesIndexController and
// then define a new tweetThatNote() function on $scope that we can use to query the remote API from our app.
// 4.) Within our tweetThatNote() function, invoke the Tweetable service and console.log() the returned status.
// To use our new Tweetable service, our tweetThatNote() function should accept an argument, the description from a note, that we then pass into Tweetable().
// 5.) Using the button tag within our notes/index.html template, invoke the new method we defined on $scope from NotesIndexController and pass in the note's description attribute.

angular.module('NoteWrangler')
.controller('NotesIndexController', ['$scope', 'Note','Tweetable', function($scope, Note, Tweetable) { //3.)
  Note.all().success(function(data) {
    $scope.notes = data;
  });
  $scope.tweetThatNote = function(noteToTweet){ //3.) //4.)
    Tweetable(noteToTweet).success(function(status) {
      console.log(status);
    });
  };
}]);

// 3.12 Using a $resource-ful Note Service
// Now that our Note factory is using ngResource, we'll need to update how it's used in NotesIndexController.
// Replace the existing call to Note.all() with the correct call to the Note AngularJS resource.

angular.module('NoteWrangler')
.controller('NotesIndexController', ['$scope', 'Note', 'Tweetable', function($scope, Note, Tweetable) {
  $scope.notes = Note.query();//1.)

  
  $scope.tweetThatNote = function(noteToTweet) {
    Tweetable(noteToTweet).success(function(status) {
      console.log(status);
    });
  };
}]);
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
.factory('Tweetable', ['$http', function TweetableFactory($http) { //1.)
  return function(potentialTweet) { //2.)
    return $http({
           method: "POST",
           url: "http://gentle-spire-1153.herokuapp.com/tweet",
           data: {
             description: potentialTweet
           }
    });
  };
}]);

// 3.6 The Configurable Bits 250 PTS
// By default, the Tweet Validator API checks for a maxLength of 144 characters — this, too, is configurable.
// Some other social posting sites have different character length requirements.

// 1.) Create a characterLength variable outside of the return statement and set it to an integer representing an alternate number of max characters.
// 2.) Pass characterLength in for maxLength along with the description in our Tweetable() POST request.

angular.module('NoteWrangler')
.factory('Tweetable', ['$http', function TweetableFactory($http) {
  var characterLength = 8; //1.)
  return function(potentialTweet) {
    return $http({
      method: 'POST',
      url: 'http://gentle-spire-1153.herokuapp.com/tweet',
      data: {
        description: potentialTweet,
        maxLength : characterLength //2.)
      }
    });
  };
}]);

// 3.8 Configurable Bits Need a Provider
// We want to be able to configure the characterLength before Tweetable runs.
// Refactor the Tweetable factory into a provider and expose a setLength() function that will allow us to set a characterLength in our app config.

// 1.) Change the factory definition into a provider definition.
// 2.) Wrap the existing function returned by our TweetableProvider() function in a call to the $get() function required by providers.
// Don't forget to move the $http service injection!
// 3.) Create a setLength() function attached to the provider that sets the characterLength variable.

angular.module('NoteWrangler')
.provider('Tweetable', [function TweetableProvider() { //1.) //2.)
  var characterLength = 144;
  this.setLength = function(maxLength) { //3.)
  characterLength = maxLength;
};
  this.$get = function($http) { //2.)
  return function(potentialTweet) {
    return $http({
      method: 'POST',
      url: 'http://gentle-spire-1153.herokuapp.com/tweet',
      data: {
        description: potentialTweet,
        maxLength: characterLength
      }
    });
  };
 };  
}]);

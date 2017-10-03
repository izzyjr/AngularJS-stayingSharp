// 3.9 Configuring the Tweet Length
// Now that our provider is ready to go, let's call the setLength() method of TweetableProvider to configure the acceptable maximum tweet length.
// Instead of 144 characters, we need to allow for a characterLength of 40.

// 1.) Let's call config() on our NoteWrangler module and provide it an anonymous function.
// 2.) Inject TweetableProvider into the config() function.
// 3.) Call the setLength() function of TweetableProvider from within the config() function and pass it a value of 40.

angular.module('NoteWrangler', ['ngRoute'])
  .config(function(TweetableProvider) {//1.) //2.)
    TweetableProvider.setLength(40);//3.)
  })
  ;
// 3.11 $resource Refactor 250 PTS
// Let's convert our custom Note factory to use AngularJS resource.
// Remove all(), find(), and create() methods from our Note service and replace them with the $resource equivalent.

// 1.) Include angular-resource.js in index.html so that we can use it in our app.
// It is located in the same directory as our angular.js file.
// 2.) Include ngResource in the NoteWrangler module.
// 3.) Replace the existing object that is returned from the Note factory with an AngularJS resource that uses '/notes' as the data source.  

angular.module('NoteWrangler', ['ngRoute', 'ngResource']) //2.)
.config(function(TweetableProvider) {
  TweetableProvider.setLength(144);
});
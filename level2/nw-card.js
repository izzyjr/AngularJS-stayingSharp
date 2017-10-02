// 2.8 A Flexible Card Directive
// In order to make the nw-card directive reusable, it needs to accept a few attributes.

// 1.) Give the nw-card directive an isolate scope, and enable it to accept a header and description attribute with two-way bindings.
// 2.) Now make nw-card.html work for both Notes and Users by accessing the header and description directly from the scope.

angular.module('NoteWrangler')
.directive('nwCard', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/directives/nw-card.html',
    scope: { //1.)
      header: "=",
      description: "="
    }
    
  };
});

2.12 Style the Tweeted Note
Some notes have been altered to have a tweeted property set to a timestamp of when that note was tweeted.

1.) Create a link function in the directive and include the parameters we will need to grab element.
2.) Add a class of tweeted to the nw-card element for any card that has a tweeted property on its scope.

angular.module('NoteWrangler')
.directive('nwCard', function() {
  return {
    restrict: 'E',
    templateUrl: './templates/directives/nw-card.html',
    scope: {
      header: '=',
      description: '=',
      tweeted: '='
    },
    link: function(scope, element) { //1.)
      if(scope.tweeted) {
        element.addClass('tweeted'); //2.)
      }
    }
  };
});



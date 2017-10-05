// 4.3 The Parent Is Required
// The nwNavItem directive needs to be able to communicate with the parent nwNav directive in order to tell when a nav item should be active.
// Let's go ahead and set that up.

// 1.) Within the nwNavItem directive, use the require option to gain access to the controller from the parent nwNav directive.
// 2.) Give the nwNavItem directive a link function.
// Make sure to fill in all the arguments so that we have access to the controller required from the previous task.

angular.module('NoteWrangler')
.directive('nwNavItem', function() {
  return {
    restrict: 'E',
    templateUrl: './templates/directives/nw-nav-item.html',
    require: "^nwNav", //1.)
    link: function(scope, element, attrs, nmNavItem){
    
  }
  };
});

// 4.4 Using Parent Functionality
// We've created the isActive() and activate() functions on the scope of the nwNavItem directive.
// Within these functions, we'll need to access the controller of the nwNav directive to set and get which nav item is active.

// 1.) First, we need a name for the nav item to work.
// Create a new isolate scope on the nwNavItem directive and allow it to accept an attribute (@) value called name.
// 2.) Within the isActive() function, call the getActiveNav() function from the required controller to get the current active nav value.
// Compare the return value from the controller with the scope.name value and return the result from the isActive function.
// 3.) We need a way to set the active nav value when a nav item is clicked. In our activate() function, call the setActiveNav() function on the require'd controller and pass the scope.name as an argument.

angular.module('NoteWrangler')
.directive('nwNavItem', function() {
  return {
    restrict: 'E',
    templateUrl: './templates/directives/nw-nav-item.html',
    require: '^nwNav',
    link: function(scope, element, attrs, nwNavCtrl) {
      scope.isActive = function() { 
        return nwNavCtrl.getActiveNav() === scope.name; //1.)
      };

      scope.activate = function() {
        return nwNavCtrl.setActiveNav(scope.name); //3.)
      };
    },
    scope: { //1.)
      name: '@'
    }
  };
});
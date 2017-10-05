// 4.2 Glorious Directives for Our Navigation
// NoteWrangler navigation has now been broken into two parts: the children — nw-nav-item — and the parent — nw-nav.
// Help the children and parent communicate by using what we have learned about $scope and link.
// They'll need to function as a nav should when clicked.

// 1.) Create a default activeNav variable on nwNav's $scope and make it default to 'Notes'.
// 2.) Create a function called getActiveNav in the controller of the nw-nav directive that returns the value of $scope.activeNav variable.
// 3.) Create a function called setActiveNav on the controller of the nw-nav directive that sets the value of $scope.activeNav variable.
// 4.) Return this from our controller.

angular.module('NoteWrangler')
.directive('nwNav', function() {
  return {
    restrict: 'E',
    controller: function($scope) {
      $scope.activeNav = 'Notes'; //1.)
      this.getActiveNav = function() { //2.)
        return $scope.activeNav;
      };
      this.setActiveNav = function(value) {
        $scope.activeNav = value;
      }; //3.)
      return this; //4.)
    }
  };
});


// 2.3 Inline Controller & $scope
// We have already separated out the duplicate note code into nw‑card.html.
// Clean up the template using $scope syntax instead of controllerAs.

// 1.) Inject the $scope service into the controller.
// 2.) Delete the unnecessary alias for our controller.
// 3.) Set the header property on the controller's $scope instead of this.
// Note: We do not want to modify the string.
// 4.) Set description property on the controller's $scope instead of this.
// Note: We do not want to modify the string.
// 5.) Display the header and description on the nw-card.html page.


angular.module('NoteWrangler').directive('nwCard', [function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/directives/nw-card.html',
    controller: function($scope) { //1.)
      $scope.header = 'Note Title';//3.)
      $scope.description = 'A lovely note description.';//4.)
    },
    // controllerAs: 'card' //2.)
  };
}]);
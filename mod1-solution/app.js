
(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.messageLunch = "";
  $scope.lunch_options = "";
  
  $scope.checkLunch = function () {
    //console.log ( 'clicou = ' + $scope.lunch_options.split(',').length);
    //console.log ( 'text = ' + $scope.lunch_options);
    if ($scope.lunch_options == "" || 
         $scope.lunch_options == "undefined" 
         ) {
      $scope.messageLunch = "Please enter data first" ;
    }
    else
    {
      if($scope.lunch_options.split(',').length<=3)
      {
        $scope.messageLunch = "Enjoy!!";
      }
      else{
        $scope.messageLunch = "Too much!";
      }
      

    }
    
  };


}

})();
var app = angular.module('superApp', []);

app.directive('superhero', function(){
  return {
    restrict: 'E',
    //create isolate scope
    //The scope isolates it from the other directives,
    //so that those properties don't get overwritten, the abilities don't get overwritten.
    scope: {},

    controller: function($scope) {
      //In this controller, we are going to build an API for other directives to talk this one.
      $scope.abilities = [];

      this.addStrength = function() {
        $scope.abilities.push('strength');
      };

      this.addSpeed = function() {
        $scope.abilities.push('speed');
      };

      this.addFlight = function() {
        $scope.abilities.push('flight');
      };
    },

    link: function(scope, element) {
      element.addClass('button');
      element.bind('mouseover', function(){
        console.log(scope.abilities);
      })
    }
  }
});

//<superhero strength></superhero>
app.directive('strength', function() {
  return {
    require: 'superhero',
    link: function(scope, element, attrs, superheroCtrl) {
      superheroCtrl.addStrength();
    }
  }
});

//<superhero speed></superhero>
app.directive('speed', function() {
  return {
    require: 'superhero',
    link: function(scope, element, attrs, superheroCtrl) {
      superheroCtrl.addSpeed();
    }
  }
});

//<superhero flight></superhero>
app.directive('flight', function() {
  return {
    require: 'superhero',
    link: function(scope, element, attrs, superheroCtrl) {
      superheroCtrl.addFlight();
    }
  }
});

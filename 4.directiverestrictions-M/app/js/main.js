var app = angular.module('superhero', []);

app.directive('superman', function(){
  return {
    restrict: 'M',
    link: function() {
      alert('I\'m working!');
    }
  }
})


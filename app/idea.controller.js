angular
    .module('UbiHeard')
    .controller('IdeaController',['$routeParams',IdeaController]);

function IdeaController(){
   
      var vm = this;

    vm.suggestions = JSON.parse(window.localStorage.getItem('suggestions'));
    console.log(suggestions[2]);

}
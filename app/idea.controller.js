angular
    .module('UbiHeard')
    .controller('IdeaController',['$routeParams',IdeaController]);

function IdeaController($routeParams){
   
    var vm = this;
    vm.suggestions = JSON.parse(window.localStorage.getItem('suggestions'));
    vm.id = parseInt($routeParams.ID);
    vm.selected = _.find(vm.suggestions,['id',vm.id]);
    vm.comments = vm.selected.comments;

   // console.log(selected);

}
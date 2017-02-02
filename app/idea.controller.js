angular
    .module('UbiHeard')
    .controller('IdeaController',IdeaController);

function IdeaController(){
   
    console.log(_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }));
}
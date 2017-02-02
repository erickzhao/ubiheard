angular
    .module('UbiHeard')
    .controller('AddController',AddController);

function AddController(){
    vm = this;
    vm.onTitleChange = function() {
      var suggestions = JSON.parse(window.localStorage.getItem('suggestions'));
      var filtered = _.filter(suggestions,function(s){
        return _.includes(s.title, vm.title);
      });
      if(filtered) {
        console.log(filtered);
      }
    }
    //vm.someName = 'test'
}

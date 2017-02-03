angular
    .module('UbiHeard')
    .controller('AddController',AddController);

function AddController($location){
    //initialization
    CKEDITOR.replace( 'editor1' );
    vm = this;
    vm.adding = false;
    vm.categories =  JSON.parse(window.localStorage.getItem('categories'));
    vm.description = 'Describes your suggestions here !';
    vm.selectedCategory = vm.categories[0];
    var suggestions = JSON.parse(window.localStorage.getItem('suggestions'));
    // event fired when we type in some text into title
    vm.onTitleChange = function() {
      if(vm.title === '') {
        vm.filtered = [];
        return;
      }
      vm.filtered = _.filter(suggestions,function(s){
        return _.includes(s.title, vm.title);
      });
    }
    vm.add = function() {

      var newSuggestion  = {
    		"id": Math.max.apply(Math,suggestions.map(function(o){return o.id;})) +  1,
    		"from": {
    			"picture": "https://randomuser.me/api/portraits/men/3.jpg",
    			"name": "me"
    		},
    		"category" : 'Gameplay',
    		"title": vm.title,
    		"description": CKEDITOR.instances.editor1.getData(),
    		"comments": [],
    		"createdAt": new Date().toLocaleString(),
    		"votes": 0
    	};
      console.log(newSuggestion);
      suggestions.push(newSuggestion);
      //save to localStorage
      window.localStorage.setItem('suggestions',JSON.stringify(suggestions));
      $location.path("ideas/"+newSuggestion.id);
    }

}

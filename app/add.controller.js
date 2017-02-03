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
    vm.suggestions = JSON.parse(window.localStorage.getItem('suggestions'));
    // event fired when we type in some text into title
    vm.onTitleChange = function() {
      if(vm.title === '') {
        vm.filtered = [];
        return;
      }
      vm.filtered = _.filter(vm.suggestions,function(s){
        return _.includes(s.title, vm.title);
      });
    }
    function getRandomFace() {
      	return "https://randomuser.me/api/portraits/men/"+ Math.floor(Math.random() * 99)+".jpg";
    }
    vm.add = function() {

      var newSuggestion  = {
    		"id": Math.max.apply(Math,vm.suggestions.map(function(o){return o.id;})) +  1,
    		"from": {
    			"picture": getRandomFace(),
    			"name": "me"
    		},
    		"category" : vm.selectedCategory,
    		"title": vm.title,
    		"description": CKEDITOR.instances.editor1.getData(),
    		"comments": [],
    		"createdAt": new Date(),
    		"votes": 0
    	};
      console.log(newSuggestion);
      suggestions.push(newSuggestion);
      //save to localStorage
      window.localStorage.setItem('suggestions',JSON.stringify(suggestions));
      $location.path("ideas/"+newSuggestion.id);
    }

    vm.addVote = function(id) {
        var sg = _.find(vm.suggestions, ['id', id]);
        if (!sg.voted) {
            sg.votes++;
            sg.voted = true;
        } else {
          sg.votes--;
          sg.voted = false;
        }
        window.localStorage.setItem('suggestions',JSON.stringify(vm.suggestions));
    }

}

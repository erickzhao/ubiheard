angular
    .module('UbiHeard')
    .controller('IdeaController', ['$routeParams', IdeaController]);

function IdeaController($routeParams) {

    var vm = this;
    vm.suggestions = JSON.parse(window.localStorage.getItem('suggestions'));
    vm.id = parseInt($routeParams.ID);
    vm.selected = _.find(vm.suggestions, ['id', vm.id]);
    vm.content = "";
    vm.addComment = addComment;


    function addComment() {
        vm.selected.comments.push({
            "from": {
                "picture": getRandomFace(),
                "name": "Me"
            },
            "createdAt": new Date(Date.now() + -5 * 24 * 3600 * 1000),
            "message": vm.content
        });
        window.localStorage.setItem('suggestions', JSON.stringify(vm.suggestions));
        vm.content= "";
    }

    function getRandomFace() {
	return "https://randomuser.me/api/portraits/men/"+ Math.floor(Math.random() * 99)+".jpg";
}

}
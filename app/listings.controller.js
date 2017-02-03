angular
    .module('UbiHeard')
    .controller('ListingController',ListingController);

function ListingController() {
    var vm = this;

    vm.suggestions = JSON.parse(window.localStorage.getItem('suggestions'));

    vm.addVote = addVote;


    function addVote(id) {

        if (!vm.suggestions[id-1].voted) {
            vm.suggestions[id-1].votes++;
            vm.suggestions[id-1].voted = true;
        } else {
            vm.suggestions[id-1].votes--;
            vm.suggestions[id-1].voted = false;
        }
    }


}
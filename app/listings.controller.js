angular
    .module('UbiHeard')
    .controller('ListingController',ListingController);

function ListingController() {
    var vm = this;

    vm.suggestions = JSON.parse(window.localStorage.getItem('suggestions'));

    vm.addVote = addVote;


    function addVote(id) {
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

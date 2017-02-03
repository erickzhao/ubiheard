angular
    .module('UbiHeard')
    .controller('ListingController',ListingController);

function ListingController() {
    var vm = this;

    vm.suggestions = JSON.parse(window.localStorage.getItem('suggestions'));
    vm.orderingProperty = '-votes';
    vm.categories =  JSON.parse(window.localStorage.getItem('categories'));
    vm.categories.unshift('All');
    vm.selectedCategory = vm.categories[0];

    vm.addVote = addVote;
    vm.sortBy = sortBy;

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

    function sortBy(property) {
        vm.orderingProperty = property;
        console.log(vm.orderingProperty);
    }


}

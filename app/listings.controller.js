angular
    .module('UbiHeard')
    .controller('ListingController',ListingController);

function ListingController() {
    var vm = this;

    vm.suggestions = JSON.parse(window.localStorage.getItem('suggestions'));

    console.log(suggestions[0]);
}
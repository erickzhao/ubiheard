angular
	.module('UbiHeard',['ngRoute']);
var categories = ['Gameplay', 'Story' , 'Art' , 'User Interface' , 'Other'];
if(!window.localStorage.getItem('categories')) {
	window.localStorage.setItem('categories',JSON.stringify(categories));
}
	var suggestions = [{
		"id": 1,
		"from": {
			"picture": "fake url",
			"name": "Jhon do"
		},
		"category" : 'Gameplay',
		"title": "Great Suggestion",
		"description": "sugesstion text",
		"comments": [{
			"from": {
				"picture": "fake url",
				"name": "Jhon do"
			},
			"createdAt": "date",
			"message": "comment message"
		}],
		"createdAt": "date",
		"votes": 999
	}, {
		"id": 2,
		"category" : 'Gameplay',
		"from": {
			"picture": "fake url",
			"name": "Jhon do"
		},
		"title": "Good Suggestion",
		"description": "sugesstion text",
		"comments": [{
			"from": {
				"picture": "fake url",
				"name": "Jhon do"
			},
			"createdAt": "date",
			"message": "comment message"
		}],
		"createdAt": "date",
		"votes": 500
	}, {
		"id": 3,
		"category" : 'Gameplay',
		"from": {
			"picture": "fake url",
			"name": "Jhon do"
		},
		"title": "Shit Suggestion",
		"description": "sugesstion text",
		"comments": [{
			"from": {
				"picture": "fake url",
				"name": "Jhon do"
			},
			"createdAt": "date",
			"message": "comment message"
		}],
		"createdAt": "date",
		"votes": 0
	}
];
if(!window.localStorage.getItem('suggestions')) {
	window.localStorage.setItem('suggestions',JSON.stringify(suggestions));
}

angular
	.module('UbiHeard',['ngRoute']);

	var suggestions = [{
		"id": 1,
		"from": {
			"picture": "fake url",
			"name": "Jhon do"
		},
		"title": "suggestion title",
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
		"id": 2,
		"from": {
			"picture": "fake url",
			"name": "Jhon do"
		},
		"title": "suggestion title",
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
		"from": {
			"picture": "fake url",
			"name": "Jhon do"
		},
		"title": "suggestion title",
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
	}
];
Window.localStorage.setItem('suggestions',suggestions);

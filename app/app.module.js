angular
	.module('UbiHeard',['ngRoute','ngSanitize']);
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
		"title": "Could we get the option to turn off nitro cells and bombers in terrorist hunt for reduced xp/renown?",
		"description": "If any of you are like me, you warm up and get better with weapons through speed runs in terrorist hunt. I find that running through the maps going for quick headshots increases my gun skill immensely and allows me to optimize my load outs. This great element of the game is severely held back by the presence of bombers and nitro cells (and arguably the pools of barbed wire). I understand their place, and they are good for the PVE element of siege, but I think with the ability to change/toggle elements like nitro cells, bombers, barbed wire, headshot-only mode, etc. at the cost of reduced renown/XP earned would easily make terrorist hunt both viable for PVE mains and PVP mains in their own respective ways.",
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
		"category" : 'Art',
		"from": {
			"picture": "fake url",
			"name": "Jhon do"
		},
		"title": "Can we get wood grain skins ubi",
		"description": "Also stainless steel skins pls",
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
		"title": "Make Lord Chanka Scream After Firing His Glorious Soviet Peacemaker.",
		"description": "Our Lord has A voice but its not strong enough, Especially with his mobile Soviet Peacemaker. The peacemaker can make you do unspeakable things not only on your pants but also your voice.",
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

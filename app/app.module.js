angular
	.module('UbiHeard',['ngRoute','ngSanitize']);
var categories = ['Gameplay', 'Story' , 'Art' , 'User Interface' , 'Other'];
if(!window.localStorage.getItem('categories')) {
	window.localStorage.setItem('categories',JSON.stringify(categories));
}
function getRandomFace() {
	return "https://randomuser.me/api/portraits/men/"+ Math.floor(Math.random() * 99)+".jpg";
}
	var suggestions = [{
		"id": 1,
		"from": {
			"picture": getRandomFace(),
			"name": "Benyamin Mehr"
		},
		"category" : 'Gameplay',
		"title": "Could we get the option to turn off nitro cells and bombers in terrorist hunt for reduced xp/renown?",
		"description": "If any of you are like me, you warm up and get better with weapons through speed runs in terrorist hunt. I find that running through the maps going for quick headshots increases my gun skill immensely and allows me to optimize my load outs. This great element of the game is severely held back by the presence of bombers and nitro cells (and arguably the pools of barbed wire). I understand their place, and they are good for the PVE element of siege, but I think with the ability to change/toggle elements like nitro cells, bombers, barbed wire, headshot-only mode, etc. at the cost of reduced renown/XP earned would easily make terrorist hunt both viable for PVE mains and PVP mains in their own respective ways.",
		"comments": [{
			"from": {
				"picture": getRandomFace(),
				"name": "Benyamin Mehr"
			},
			"createdAt": new Date(Date.now() + -50*24*3600*1000),
			"message": "comment message"
		}],
		"createdAt": new Date(Date.now() + -50*24*3600*1000),
		"votes": 999
	}, {
		"id": 2,
		"category" : 'Art',
		"from": {
			"picture": getRandomFace(),
			"name": "Jean-Francois Renaud"
		},
		"title": "Can we get wood grain skins ubi",
		"description": "Also stainless steel skins pls",
		"comments": [{
			"from": {
				"picture": getRandomFace(),
				"name": "Jean-Francois Renaud"
			},
			"createdAt": new Date(Date.now() + -15*24*3600*1000),
			"message": "comment message"
		}],
		"createdAt": new Date(Date.now() + -15*24*3600*1000),
		"votes": 500
	}, {
		"id": 3,
		"category" : 'Gameplay',
		"from": {
			"picture": getRandomFace(),
			"name": "Cyril TOVENA"
		},
		"title": "Make Lord Chanka Scream After Firing His Glorious Soviet Peacemaker.",
		"description": "Our Lord has A voice but its not strong enough, Especially with his mobile Soviet Peacemaker. The peacemaker can make you do unspeakable things not only on your pants but also your voice.",
		"comments": [{
			"from": {
				"picture": getRandomFace(),
				"name": "Charles-Simon Viau"
			},
			"createdAt": new Date(Date.now() + -10*24*3600*1000),
			"message": "comment message"
		}],
		"createdAt": new Date(Date.now() + -10*24*3600*1000),
		"votes": 0
	},
	{
	 "id": 4,
	 "category" : 'Gameplay',
	 "from": {
		 "picture": getRandomFace(),
		 "name": "Victor Zachev"
	 },
	 "title": "Can we please have this as an Elite skin or headgear/outfit combo for Echo?",
	 "description": "",
	 "comments": [{
		 "from": {
			 "picture": getRandomFace(),
			 "name": "Cyril TOVENA"
		 },
		 "createdAt": new Date(Date.now() + -5*24*3600*1000),
		 "message": "comment message"
	 }],
	 "createdAt": new Date(Date.now() + -5*24*3600*1000),
	 "votes": 0
 },
 {
	"id": 5,
	"category" : 'Gameplay',
	"from": {
		"picture": getRandomFace(),
		"name": "Christophe Grandjean"
	},
	"title": "Are we ready to take kill cam out of ranked? At least on console",
	"description": "No one is running hacks on console I think we can all agree. And you don't need a kill cam to realize buddy is using a glitch. Your team will find out easy enough. UBISOFT PLEASE!. No skill behind getting killed from a really good sneaky spot and knowing everything because I watched the kill cam.....Edit: suggestion from someone in comments: Even though it'd add time to the matches, what about a montage of the kill cams at the end of each round? That way you can remove kill cams at the moment they happen so it doesn't give information and you can still learn what they did at matches end.",
	"comments": [{
		"from": {
			"picture": getRandomFace(),
			"name": "Ghina El-Chemali"
		},
		"createdAt": new Date(Date.now() + -5*24*3600*1000),
		"message": "comment message"
	}],
	"createdAt": new Date(Date.now() + -5*24*3600*1000),
	"votes": 0
},
{
 "id": 6,
 "category" : 'Gameplay',
 "from": {
	 "picture": getRandomFace(),
	 "name": "Victor Zachev"
 },
 "title": "Rainbow Six Feature Idea",
 "description": "I don't know if I'm the only one that thinks this. But wouldn't it be cool if the game kept track of your win streaks? I am the type of player that loves to see those kind of stats. Also they could give you renown bonuses or maybe even special items for obtaining certain level streaks. I think it would be a nice addition. Thoughts?",
 "comments": [{
	 "from": {
		 "picture": getRandomFace(),
		 "name": "Ghina El-Chemali"
	 },
	 "createdAt": new Date(Date.now() + -5*24*3600*1000),
	 "message": "comment message"
 }],
 "createdAt": new Date(Date.now() + -5*24*3600*1000),
 "votes": 0
},
{
 "id": 7,
 "category" : 'Other',
 "from": {
	 "picture": getRandomFace(),
	 "name": "Thomas Belmont"
 },
 "title": "Would anyone else be interested in a R6:Vegas/Vegas2 remaster?",
 "description": "I loved those games. My friends and I would play Terrorist Hunt for hours on end and never get tired of it. R6:Siege just doesn't seem to replicate that endless fun for us (not knocking it). If Ubisoft could just update the graphics and controls to modern-day standards, I would absolutely buy a R6:Vegas/Vegas2 remaster. They would probably have to remap the third-person cover system to a different button (it used to be the ADS trigger, I believe) or possibly even remove it (I wouldn't really mind), but other than that, an updated version of the same game(s) would be great.",
 "comments": [{
	 "from": {
		 "picture": getRandomFace(),
		 "name": "Ghina El-Chemali"
	 },
	 "createdAt": new Date(Date.now() + -5*24*3600*1000),
	 "message": "comment message"
 }],
 "createdAt": new Date(Date.now() + -5*24*3600*1000),
 "votes": 0
}

];
if(!window.localStorage.getItem('suggestions')) {
	window.localStorage.setItem('suggestions',JSON.stringify(suggestions));
}

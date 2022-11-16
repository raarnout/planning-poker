# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

Install the project via Yarn.  
`yarn install` and `yarn start`

## Firebase data object
```
{
	gameId: 'gameId#1',
	votingSystem: [0,1,2,3,5,..]
	users: [
		{
			id: 'id#1', 
			userName:'Ronald',
			role: 'HOST'
		},
		{
			id: 'id#2', 
			userName:'Matthijs',
			role: 'SPECTATOR'
		},
		{
			id: 'id#3', 
			userName:'Matthijs',
			role: 'ATTENDEE'
		}
	],
	activeRound: {
		showCards: false,
		users: [
			{ id: 'id#1', value: null },
			{ id: 'id#3', value: 3 },
		]
	}
}
```

## Local Storage
```
{
	id: 'id#1',
	userName: 'Ronald'
}
```


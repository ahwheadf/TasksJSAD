'use strict';

function getPosition() {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition((position) => {
			resolve({lat: position.coords.latitude, long: position.coords.longitude});
		},
		error => reject(new Error(`${error}`))
		)
	})
}

getPosition()
	.then(response => console.log(response))
	.catch(error => console.log(error));
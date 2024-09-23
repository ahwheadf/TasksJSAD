function getData(url, errorMessage) {
	return fetch(url)
		.then(response => {
			if (!response.ok) {
				throw new Error(`${errorMessage} ${response.status}`);
			}
			return response.json();
		})
	
}

getData('https://pokeapi.co/api/v2/pokemon/ditto', 'Can not get ditto')
	.then( upperData => getData(`${upperData.abilities[0].ability.url}`, 'Can not get URL'))
	.then( lowerData => console.log(lowerData.effect_entries[1].effect))
	.catch(error => {
		const element = document.querySelector('.categories');
		element.innerHTML = error.message; 
	})
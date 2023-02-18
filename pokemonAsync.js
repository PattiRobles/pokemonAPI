//when calling https://pokeapi.co/api/v2/pokemon it only returns 20 pokemon, needs 'next' being called

async function fetchPokemonName() {

	for(let i = 0; i < 20; i++) {
		let response = await fetch('https://pokeapi.co/api/v2/pokemon/');
		let pokemonName = await response.json();
		console.log(`Pokemon no.${i+1} - name: ${pokemonName.results[i].name}`)
	
	}
}	
	

async function fetchPokemonInfo() {
	
	for (let i = 1; i <= 100; i++) {
		let response = await fetch (`https://pokeapi.co/api/v2/pokemon/${i}`)
		let pokemonInfo = await response.json()
		console.log(`Pokemon no.${i+1} - name: ${pokemonInfo.name}, weight: ${pokemonInfo.weight}, height: ${pokemonInfo.height} and type ${pokemonInfo.types[0].type.name}`)
	}
}

fetchPokemonName();
fetchPokemonInfo();


for (let i = 1; i <= 30; i++) {
const fetchPokeInfo = fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
	.then(response => response.json())
	.then(pokeInfo => console.log(`The pokemon's name is ${pokeInfo.name} and its signature move is ${pokeInfo.moves[0].move.name}`))
}
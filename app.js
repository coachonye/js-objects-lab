
const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
    difficulty: "Hard"
  };
  
  console.dir(pokemon,{ maxArrayLength: null })
  console.log(game)

 const starterPokemon = pokemon.find(poke => poke.starter === true);
 game.party.push(starterPokemon);
 console.log(game.party);

 const additionalPokemon = pokemon.filter(poke => poke.type !== "water").slice(0, 3);
 game.party.push(additionalPokemon);
 console.log(game.party);

game.gyms.forEach(gym => {
    if(gym.difficulty <3) {
        gym.completed = true;
    }
});
console.log(game.gyms);


console.log(game.party);

// Define a function that evolves the starter Pokémon
function evolveStarter(pokemon) {
  switch(pokemon.name) {
    case "Bulbasaur":
      return { name: "Ivysaur", type: "Grass" };
    case "Charmander":
      return { name: "Charmeleon", type: "Fire" };
    case "Squirtle":
      return { name: "Wartortle", type: "Water" };
    case "Pikachu":
      return { name: "Raichu", type: "Electric" };
    default:
      return pokemon; // If no evolution, return the original Pokémon
  }
}

const evolvedPokemon = evolveStarter(game.party[0]);

game.party.splice(0, 1, evolvedPokemon);

console.log(game.party);

game.party.forEach(pokemon => {
    console.log(pokemon.name);
});

for(let i = 0; i < game.party.length; i++) {
    console.log(game.party[i].name);
}

game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj);
  const pokeballItem = this.items.find(item => item.name === "pokeball");

  if (pokeballItem) {
    pokeballItem.quantity -= 1;
  }
console.log('catchPokemon', this .items);
}

game.gyms.forEach(gym => {
if (gym.difficulty < 6){
  gym.completed = true;
}
})
console.log(game.gyms);

game.gymStatus = function() {
  const gymTally = {
    completed: 0,
    incompleted: 0
  };
  this.gyms.forEach(gym => {
  if (gym.completed) {

   gymTally.completed += 1;
  } else {
    gymTally.incomplete += 1;
  }
});

console.log(gymTally);
};
 
game.gymStatus();

game.partyCount = function() {
  return this.party.length;
};

const numberOfPokemon = game.partyCount();
console.log('Number of Pokemon in the party:', numberOfPokemon);

game.gyms.forEach(gym => {
  if (gym.difficulty <8) {
    gym.completed = true;
  }
});

console.log(game.gyms);

console.log(game);

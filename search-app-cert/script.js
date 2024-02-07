const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-button');
const pokName = document.getElementById('pokemon-name');
const pokId = document.getElementById('pokemon-id');
const spriteContainer = document.getElementById('sprite-container');
const weightEl = document.getElementById('weight');
const heightEl = document.getElementById('height');
const typesDiv = document.getElementById('types');
const hpEl = document.getElementById('hp');
const attackEl = document.getElementById('attack');
const specialAttackEl = document.getElementById('special-attack');
const defenseEl = document.getElementById('defense'); 
const specialDefenseEl = document.getElementById('special-defense');
const speedEl = document.getElementById('speed');
const searchForm = document.getElementById('search-form');

const findPokemon = async() => {
 
    try {
        const nameOrid = searchInput.value.toLowerCase();
        const result = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${nameOrid}`);
        const data = await result.json();
       
        const {name, id, height, sprites, stats, types, weight } = data;
    
        spriteContainer.innerHTML = '';

        pokName.textContent = name;
        pokId.textContent = `#${id}`;
        weightEl.textContent = `Weight: ${weight}`;
        heightEl.textContent = `Height: ${height}`;
        spriteContainer.innerHTML  =`<img id="sprite" src="${sprites.front_default}">`;


        hpEl.textContent = stats[0].base_stat;
        attackEl.textContent = stats[1].base_stat;
        defenseEl.textContent = stats[2].base_stat;
        specialAttackEl.textContent = stats[3].base_stat;
        specialDefenseEl.textContent = stats[4].base_stat;
        speedEl.textContent = stats[5].base_stat;

        typesDiv.innerHTML = types.map((obj) => {
            return `<span class="type ${obj.type.name}">${obj.type.name}</span>`
            }).join('');

    } catch (err) {
        alert('Pokémon not found');
    console.log(`Pokémon not found: ${err}`);
    }
}


searchForm.addEventListener('submit', e => {
    e.preventDefault();
    findPokemon()
})

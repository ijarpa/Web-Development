const list = document.querySelector("#list");
const pokemonContainer = document.querySelector("#app");
const url = 'https://pokeapi.co/api/v2/pokemon?limit=500';

fetch(url)
.then(response => response.json())
.then(data => {
    const pokemons = data.results;
    let options = "";
    pokemons.forEach(pokemon => {
        options += `<option value="${pokemon.url}">${pokemon.name}</option>`;
    });
    list.innerHTML = options;
})
.catch(err => console.log(err));

list.addEventListener("change", e => {
    const pokemonUrl = e.target.value;
    fetch(pokemonUrl)
    .then(response => response.json())
    .then(data => {
        pokemonContainer.innerHTML = `
            <p>Name: ${data.name}</p>
            <p>Index in Pokedex: ${data.order}</p>
            <p>Ability: ${data.abilities[0].ability.name} / ${data.abilities[1].ability.name}</p>
            <img src='${data.sprites.front_default}'/>
        `;
    })
    .catch(err => console.log(err));
});


var currentYear = new Date().getFullYear();
document.querySelector('#year').textContent = currentYear;

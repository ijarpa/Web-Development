const API_URL = "https://swapi.dev/api/starships";

const HTMLresponse = document.querySelector("#app");

fetch(API_URL)
    .then((response) => response.json())
    .then((starships) => {
        const tpl = starships.map((starship) => `<li>${starship.name}</li>`);
        HTMLresponse.innerHTML = `<ul>${tpl.join('')}</ul>`;
    });


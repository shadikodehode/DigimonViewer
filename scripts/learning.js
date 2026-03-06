const apiUrl = "https://pokeapi.co/api/v2"

let pokemonArr = [];

const pokemonContainer = document.querySelector("#pokemon-container");

// Fetch all pokemon
const fetchAllPokemon = async () => {
    const response = await fetch(`${apiUrl}/pokemon`)
    return await response.json();
}

// Fetch specific pokemon
const fetchPokemonByUrl = async (url) => {
    const response = await fetch(url)
    return await response.json();
}

const addPokemon = async (responseObj) => {
    for (const pokemonObj of responseObj.results) {
        const pokemon = await fetchPokemonByUrl(pokemonObj.url);
        pokemonArr.push({ ...pokemon, shiny: false, direction: "front" });
    }
};

const fetchAllPokemonButton = () => {
    const buttonEl = document.createElement('button');
    buttonEl.textContent = "Fetch all pokemon";

    buttonEl.addEventListener('click', async () => {
        pokemonArr = [];
        const responseObj = await fetchAllPokemon();
        await addPokemon(responseObj);
        renderPage();
    })

    return buttonEl
}

const displayPokemon = (pokemonObj) => {
    const imgElement = document.createElement('img');

    if (pokemonObj.shiny) {
        imgElement.src = pokemonObj.direction == "front"
            ? pokemonObj.sprites.front_shiny
            : pokemonObj.sprites.back_shiny
    } else {
        imgElement.src = pokemonObj.direction == "front"
            ? pokemonObj.sprites.front_default
            : pokemonObj.sprites.back_default
    }

    imgElement.width = 200;
    imgElement.height = 200;

    return imgElement
}

const toggleDirectionButton = (pokemon) => {
    const buttonEl = document.createElement('button');
    buttonEl.textContent = "Toggle Direction";

    buttonEl.addEventListener('click', () => {
        pokemon.direction = pokemon.direction == "front" ? "back" : "front";
        renderPage();
    })

    return buttonEl
}

const toggleShinyButton = (pokemon) => {
    const buttonEl = document.createElement('button');
    buttonEl.textContent = "Toggle Shiny";

    buttonEl.addEventListener('click', () => {
        pokemon.shiny = !pokemon.shiny
        renderPage();
    })

    return buttonEl;
}

const renderPage = () => {
    pokemonContainer.replaceChildren();
    pokemonContainer.append(fetchAllPokemonButton());
    pokemonArr.forEach(pokemon => {
        const pokemonDiv = document.createElement('div');
        pokemonDiv.append(
            displayPokemon(pokemon),
            toggleDirectionButton(pokemon),
            toggleShinyButton(pokemon)
        )
        pokemonContainer.append(pokemonDiv)
    })
}

renderPage();
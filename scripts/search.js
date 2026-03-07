import { digimonArr, digimonNameArr } from "../data/digimonAPI.js";
import { createCard } from "../scripts/card.js";

let debounce;

const searchbarElement = document.querySelector('.searchbar');
const cardContainer = document.querySelector('.card-container');

export const searchDigimon = (event) => {
  clearTimeout(debounce);
  debounce = setTimeout(() => {

  }, 300)
  const digimonSearchName = event.target.value.trim();
  const filteredDigimon = digimonNameArr.filter(digimon => digimon.name.toLowerCase().includes(digimonSearchName.toLowerCase()))

  cardContainer.innerHTML = '';

  filteredDigimon.forEach(digimon => {
    createCard(digimon.name, digimon.image)
  })
}

searchbarElement.addEventListener('input', searchDigimon)
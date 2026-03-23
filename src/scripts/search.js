import { digimonArr, allDigimonArr } from "../data/digimonAPI.js";
import { renderCard } from "./renderCard.js";

let debounce;

const searchbarElement = document.querySelector('.searchbar');
const digimonSearchList = document.querySelector('#digimon-names')

export const searchDigimon = (event) => {
  clearTimeout(debounce);
  debounce = setTimeout(() => {
    
    const digimonSearchName = event.target.value.trim();
     if(digimonSearchName.length === 0) {
      digimonSearchList.innerHTML = '';
      renderCard(digimonArr)
      return;
    }

    const filteredDigimon = allDigimonArr
      .filter(digimon => digimon.name
      .toLowerCase()
      .startsWith(digimonSearchName
      .toLowerCase())
      ||
      digimon.name
      .toLowerCase()
      .includes(`(${digimonSearchName.toLowerCase()})`)
    )

    digimonSearchList.innerHTML = '';

    renderCard(filteredDigimon)

    filteredDigimon.slice(0, 10).forEach(digimon => {

      const searchAutocomplete = document.createElement('option');
      searchAutocomplete.value = digimon.name;
      digimonSearchList.appendChild(searchAutocomplete);
  })

  }, 300)
}

searchbarElement.addEventListener('input', searchDigimon)

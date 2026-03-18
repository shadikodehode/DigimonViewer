import { modal } from "./modal.js";
import { createTags } from "./utils.js";

const cardContainer = document.querySelector('.card-container')

const createCard = (digimonId, digimonName, digimonImage) => {
  const cardElement = document.createElement('div');
  cardElement.className = "card";

  cardElement.addEventListener('click', () => {
    if(cardElement.dataset.loading) return
    cardElement.dataset.loading = true
    cardElement.classList.add('card-loading')
    modal(digimonId)
  })
  
  cardContainer.appendChild(cardElement);

const cardAppearance = document.createElement('div');
  cardAppearance.className = "card-appearance";

  cardElement.appendChild(cardAppearance);

const cardName = document.createElement('div')
  cardName.className = "card-name";

  cardAppearance.appendChild(cardName)

const cardTrash = document.createElement('div')

const cleanName = createTags(digimonName, cardTrash)
  cardName.textContent = cleanName

const cardImage = document.createElement('img')
  cardImage.src = digimonImage;
  cardImage.className = "card-image";

  cardAppearance.appendChild(cardImage)
}

export const renderCard = (array, clear = true) => {
 if(clear) cardContainer.innerHTML = ''; 
 array.forEach(digimon => {
  createCard(digimon.id, digimon.name, digimon.image)
 });
}
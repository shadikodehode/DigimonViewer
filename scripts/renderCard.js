const cardContainer = document.querySelector('.card-container')

const createCard = (digimonName, digimonImage) => {
 const cardElement = document.createElement('div');
  cardElement.className = "card";

  cardContainer.appendChild(cardElement);

const cardAppearance = document.createElement('div');
  cardAppearance.className = "card-appearance";

  cardElement.appendChild(cardAppearance);

const cardName = document.createElement('div')
  cardName.textContent = digimonName;
  cardName.className = "card-name";

  cardAppearance.appendChild(cardName)

const cardImage = document.createElement('img')
  cardImage.src = digimonImage;
  cardImage.className = "card-image";

  cardAppearance.appendChild(cardImage)
}

export const renderCard = (array, clear = true) => {
 if(clear) cardContainer.innerHTML = ''; 
 array.forEach(digimon => {
  createCard(digimon.name, digimon.image)
 });
}
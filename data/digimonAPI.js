
const digimonApi = 'https://digi-api.com/api/v1';

let digimonCollection = [];

const cardContainer = document.querySelector('.card-container')


export const createCard = (digimonName, digimonLevel, digimonImage) => {
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

const cardLevel = document.createElement('div')
  cardLevel.textContent = digimonLevel;
  cardLevel.className = "card-level-rookie";

  cardAppearance.appendChild(cardLevel)

const cardImage = document.createElement('img')
  cardImage.src = digimonImage;
  cardImage.className = "card-image";

  cardAppearance.appendChild(cardImage)
}

// const fetchDigimon = async () => {
//   const response = await fetch(`${digimonApi}/digimon`)
//   return await response.json();
// }


// const fetchDigimonByUrl = async (href) => {
//   const response = await fetch(href);

//   return await response.json();
// }

// const fetchDigimonData = async (data) => {
//   for (const digimonList of data.content) {
//     const digimon = await fetchDigimonByUrl(digimonList.href);
//     digimonCollection.push({ ...digimon});
//   }
// }

// //turn this into a card later
// const addButton = () => {
//   const buttonEl = document.createElement('button');
//   buttonEl.textContent = "Fetch Digimon api test";

//   buttonEl.addEventListener('click', async () => {
//     digimonCollection = [];
//     const data = await fetchDigimon();
//     await fetchDigimonData(data);
//     console.log(data)
//     renderCard();
//   })
//   return buttonEl
// }

// const displayDigimon = (digimonList) => {
//   const imageEl = document.createElement('img');
//     imageEl.src = digimonList.images[0].href;

//   imageEl.height = 150;
  
//   return imageEl
// }

// const renderCard = () => {
//   cardContainer.replaceChildren();
//   cardContainer.append(addButton());
//   digimonCollection.forEach(digimon => {
//       const cardDiv = document.createElement('div');
//       cardDiv.append(
//       displayDigimon(digimon)
//       )
//       cardContainer.append(cardDiv)
//     })
// }

// renderCard();

//load more on scroll function//
// fetchData();

// document.addEventListener('scroll', (event) => {
//   if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000){
//     fetchData();
//   }
// });


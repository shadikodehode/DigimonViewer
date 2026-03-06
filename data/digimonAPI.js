
const digimonApi = 'https://digi-api.com/api/v1';

let digimonCollection = [];

const cardContainer = document.querySelector('.card-container')

const createCard = () => {
  const cardElement = document.createElement('div');
    cardElement.className = "card";
  
    cardContainer.appendChild(cardElement);

  const cardAppearance = document.createElement('div');
    cardAppearance.className = "card-appearance";

    cardElement.appendChild(cardAppearance);
}
createCard();

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

const cards = [{
  id: '1f1',
  image: 'cards/Baboongamon.png',
  name: 'Baboongamon',
  level: 'ultimate'
}, {
  id: '1f2',
  image: 'cards/Agumon.png',
  name: 'Agumon',
  level: 'rookie'
}, {
  id: '1f3',
  image: 'cards/Dracomon (X-Antibody).png',
  name: 'Dracomon',
  level: 'champion'
}, {
  id: '2f1',
  image: 'cards/Shoeshoemon.png',
  name: 'Shoeshoemon',
  level: 'training1'
}, {
  id: '2f2',
  image: 'cards/Sistermon Ciel.png',
  name: 'Sistermon',
  level: 'training2'
}, {
  id: '2f3',
  image: 'cards/Starmon.png',
  name: 'Starmon',
  level: 'mega'
}];
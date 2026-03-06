import { createCard } from "../scripts/card.js";

const digimonApi = 'https://digi-api.com/api/v1';

let digimonArr = [];

const fetchDigimon = async () => {
  const response = await fetch(`${digimonApi}/digimon?pageSize=20`)
  return await response.json();
}

const fetchDigimonData = async (data) => {
  for (const digimonList of data.content) {
   digimonArr.push({
    id: digimonList.id,
    name: digimonList.name,
    image: digimonList.image
   });
   console.log(digimonList)
   console.log(data)
  }
  console.log(digimonArr)
}

export const getDigimon = async () => {
  const data = await fetchDigimon();
  await fetchDigimonData(data);
  digimonArr.forEach(digimon => {
      createCard(digimon.name, digimon.image)
  })
}

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


import { createCard } from "../data/digimonAPI.js";

const digimonArr = [{
  id: '1f1',
  image: '../cards/Baboongamon.png',
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

digimonArr.forEach(digimon => {
    createCard(digimon.name, digimon.level, digimon.image)
})

createCard(digimonName, digimonLevel, digimonImage);
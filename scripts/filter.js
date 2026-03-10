import { digimonArr, fetchDigimonFilter } from "../data/digimonAPI.js";
import { renderCard } from "./renderCard.js";

const levelSelector = document.querySelector('.button-content-level');
const levelData = await fetchDigimonFilter('level?page=0')
const levelData2 = await fetchDigimonFilter('level?page=1')
const allLevels = [...levelData.content.fields, ...levelData2.content.fields]
const levelOrder = ['Baby I', 'Baby II', 'Child', 'Adult', 'Perfect', 'Ultimate', 'Armor', 'Hybrid', 'Unknown']

const attributeSelector = document.querySelector('.button-content-attribute')
const attributeData = await fetchDigimonFilter('attribute?page=0')
const attributeData2 = await fetchDigimonFilter('attribute?page=1')
const allAttributes = [...attributeData.content.fields, ...attributeData2.content.fields]

const levelButtonSelector = document.querySelector('.button-level')
const attributeButtonSelector = document.querySelector('.button-attribute')

const resetButtonSelector = document.querySelector('.button-reset')
const searchbarElement = document.querySelector('.searchbar');


export const dropdownFilter = async () => {
  //sorts the names by custom defined order from levelOrder
  allLevels.sort((a, b) => 
    levelOrder.indexOf(a.name) - levelOrder.indexOf(b.name)).forEach(level => {
      const filterLevel = document.createElement('div');
      filterLevel.addEventListener('click', async () => {
        const data = await fetchDigimonFilter(`digimon?level=${level.name}&pageSize=1488`)
        renderCard(data.content)
      })
      filterLevel.className = "button-content-link"
      filterLevel.textContent = level.name
      levelSelector.appendChild(filterLevel)
  });

  allAttributes.forEach(attribute => {
      const filterAttribute = document.createElement('div');
      filterAttribute.addEventListener('click', async () => {
        const data = await fetchDigimonFilter(`digimon?attribute=${attribute.name}&pageSize=1488`)
        renderCard(data.content)
      })
      filterAttribute.className = "button-content-link"
      filterAttribute.textContent = attribute.name
      attributeSelector.appendChild(filterAttribute)
    });
}

levelButtonSelector.addEventListener('click', () => {
  levelSelector.classList.toggle('active')
})

attributeButtonSelector.addEventListener('click', () => {
  attributeSelector.classList.toggle('active')
})


document.addEventListener('click', (event) => {
  if(!levelSelector.closest('.button-container').contains(event.target)) {
    levelSelector.classList.remove('active')
  }
   if(!attributeSelector.closest('.button-container').contains(event.target)) {
    attributeSelector.classList.remove('active')
  }
})

resetButtonSelector.addEventListener('click', () => {
  searchbarElement.value = '';
  renderCard(digimonArr)
})
// I could make this scaleable with a foreach and selecting all the dropdowns with a const
//but for now I'll just keep it like this

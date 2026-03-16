import { fetchDigimonFilter } from "../data/digimonAPI.js";
import { modalCreateNameContent } from "./modalElements/modalNameContent.js";
import { modalCreateMainContent } from "./modalElements/modalMainContent.js";
import { modalCreateBottomContent } from "./modalElements/modalBottomContent.js";

export const modal = async (id, currentBackground = null, currentCard = null) => {
  const data = await fetchDigimonFilter(`digimon/${id}`)

  console.log('modal called with:', id)
  console.log('currentBackground:', currentBackground)
  console.log('currentCard:', currentCard)
  
  const darkenBackground = currentBackground || document.createElement('div')
    if(!currentBackground) {
      darkenBackground.className = 'darken-bg'
      document.body.appendChild(darkenBackground)
    }


  const modalCard = currentCard || document.createElement('div')
  if(!currentCard) {
    modalCard.className = 'modal-card'
    darkenBackground.appendChild(modalCard)
  } else {
    modalCard.innerHTML = ''
  }

   darkenBackground.addEventListener('click', (event) => {
    if(!modalCard.contains(event.target)) {
      document.body.removeChild(darkenBackground)}
    })
  
  const exitButton = document.createElement('div')
    exitButton.addEventListener('click', () => {
      document.body.removeChild(darkenBackground)
    })
    exitButton.textContent = 'X'
    exitButton.className = 'modal-exit-btn'
    
  modalCard.appendChild(exitButton)
  
  const exitKey = (event) => {
    if(event.key === 'Escape') {
      document.body.removeChild(darkenBackground)
      document.removeEventListener('keydown', exitKey)
    }
  }
  document.addEventListener('keydown', exitKey)
  
  const nameContent = modalCreateNameContent(data)
  modalCard.appendChild(nameContent)

  const mainContent = modalCreateMainContent(data)
  modalCard.appendChild(mainContent)
  
  const modalBottomContentContainer = modalCreateBottomContent(data, darkenBackground, modalCard)
  modalCard.appendChild(modalBottomContentContainer)  

//  //Description

//   const modalDescriptionContainer = document.createElement('div')
//     modalDescriptionContainer.className = 'modal-description-container'

//   const modalDescriptionHeader = document.createElement('div')
//     modalDescriptionHeader.textContent = "Bio"
//     modalDescriptionHeader.className = 'modal-description-header'

//   const modalDescription = document.createElement('div')
//     modalDescription.textContent = data.descriptions
//     .find(d => d.language === 'en_us')?.description
//     modalDescription.className = 'modal-description'

//   modalDescriptionContainer.appendChild(modalDescriptionHeader)
//   modalDescriptionContainer.appendChild(modalDescription)

//   modalCard.appendChild(modalDescriptionContainer) 

}

import { fetchDigimonFilter } from "../data/digimonAPI.js";
import { modalCreateNameContent } from "./modalElements/modalNameContent.js";
import { modalCreateMainContent } from "./modalElements/modalMainContent.js";
import { modalCreateBottomContent } from "./modalElements/modalBottomContent.js";
import { modalEvolutionPopup } from "./modalElements/modalEvolutionPopup.js";

export const modal = async (id) => {
  const data = await fetchDigimonFilter(`digimon/${id}`)

  let isPopupOpen = false
  
  const darkenBackground = document.createElement('div')
    darkenBackground.className = 'darken-bg'

    darkenBackground.addEventListener('click', (event) => {
    if(!modalCard.contains(event.target)) {
      document.body.removeChild(darkenBackground)}
    })

  document.body.appendChild(darkenBackground)

  const modalCard = document.createElement('div')
    modalCard.className = 'modal-card'

  darkenBackground.appendChild(modalCard)

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
  
  const { modalBottomContentContainer, modalPreviousEvolutionButton, modalNextEvolutionButton} = modalCreateBottomContent(data)
  modalCard.appendChild(modalBottomContentContainer)

  
  modalPreviousEvolutionButton.addEventListener('click', () => {
    if(isPopupOpen) return
    isPopupOpen = true
    const evolutionPopup = modalEvolutionPopup(data.priorEvolutions, darkenBackground, 'prior')
    modalCard.appendChild(evolutionPopup)

    setTimeout(() => {
      modalCard.addEventListener('click', (event) => {
        if(!evolutionPopup.contains(event.target)) {
        modalCard.removeChild(evolutionPopup)
        isPopupOpen = false
        }
      })      
    }, 0);
  })

  modalNextEvolutionButton.addEventListener('click', () => {
    if(isPopupOpen) return
    isPopupOpen = true
    const evolutionPopup = modalEvolutionPopup(data.nextEvolutions, darkenBackground, 'next')
    modalCard.appendChild(evolutionPopup)

    setTimeout(() => {
      modalCard.addEventListener('click', (event) => {
        if(!evolutionPopup.contains(event.target)) {
        modalCard.removeChild(evolutionPopup)
        isPopupOpen = false
        }
      })      
    }, 0);
      
  })

  

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

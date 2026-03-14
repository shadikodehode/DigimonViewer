export const modalEvolutionPopup = (evolutions, darkenBackground, direction) => {
  const modalEvolutionPopupContainer = document.createElement('div')
    modalEvolutionPopupContainer.className = 'modal-evolution-popup-container'

    if(direction === 'prior'){
      modalEvolutionPopupContainer.classList.add('prior-popup')
    } 
    else {
      modalEvolutionPopupContainer.classList.add('next-popup')
    }

  const modalEvolutionPopupScrollable = document.createElement('div')
    modalEvolutionPopupScrollable.className = 'modal-evolution-popup-scrollable'

  modalEvolutionPopupContainer.appendChild(modalEvolutionPopupScrollable)

  evolutions.forEach(evolution => {
    const modalEvolutionListContainer = document.createElement('div')
      modalEvolutionListContainer.className = 'modal-evolution-list-container'

    modalEvolutionPopupScrollable.appendChild(modalEvolutionListContainer)

    const modalEvolutionListName = document.createElement('div')
      modalEvolutionListName.textContent = evolution.digimon
      modalEvolutionListName.className = 'modal-evolution-list-name'

    modalEvolutionListContainer.appendChild(modalEvolutionListName)    
      
    const modalEvolutionListImage = document.createElement('img')
      modalEvolutionListImage.src = evolution.image
      modalEvolutionListImage.className = 'modal-evolution-list-image'

    modalEvolutionListContainer.appendChild(modalEvolutionListImage)
  })

  return modalEvolutionPopupContainer
}
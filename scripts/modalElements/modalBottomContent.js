export const modalCreateBottomContent = (data) => {
  //Content Bottom Container

  const modalBottomContentContainer = document.createElement('div')
    modalBottomContentContainer.className = 'modal-bottom-content-container'

  //Previous Evolution Button

  const modalPreviousEvolutionContainer = document.createElement('div')
    modalPreviousEvolutionContainer.className = 'modal-previous-evolution-container'

  modalBottomContentContainer.appendChild(modalPreviousEvolutionContainer)

  if(data.priorEvolutions.length === 0) {
    modalPreviousEvolutionContainer.style.visibility = 'hidden'
  }
  
  const modalPreviousEvolutionButton = document.createElement('div')
    modalPreviousEvolutionButton.className = 'modal-previous-evolution-button'
  
  modalPreviousEvolutionContainer.appendChild(modalPreviousEvolutionButton)

  const modalPreviousEvolution = document.createElement('div')
    modalPreviousEvolution.textContent = "Prior Evolution"
    modalPreviousEvolution.className = 'modal-previous-evolution'

  modalPreviousEvolutionButton.appendChild(modalPreviousEvolution)

  const modalPreviousEvolutionTriangle = document.createElement('div')
    modalPreviousEvolutionTriangle.className = 'modal-previous-evolution-triangle'
  
  modalPreviousEvolutionContainer.appendChild(modalPreviousEvolutionTriangle)


  //Field

  const modalFieldContainer = document.createElement('div')
    modalFieldContainer.className = 'modal-field-container'
    
  modalBottomContentContainer.appendChild(modalFieldContainer)

  if(data.fields.length === 0) {
    modalFieldContainer.style.visibility = 'hidden'
  }

  const modalFieldHeader = document.createElement('div')
    modalFieldHeader.textContent = "FIELDS"
    modalFieldHeader.className = 'modal-field-header'

  modalFieldContainer.appendChild(modalFieldHeader)

  const modalFieldLine = document.createElement('div')
    modalFieldLine.className = 'modal-field-line'

  modalFieldHeader.appendChild(modalFieldLine)

  const modalFieldImgContainer = document.createElement('div')
    modalFieldImgContainer.className = 'modal-field-img-container'

  modalFieldContainer.appendChild(modalFieldImgContainer)
  
  data.fields.forEach(({field, image}) => {
    const modalField = document.createElement('img')
    modalField.src = image
    modalField.alt = field
    modalField.className = 'modal-field'

    modalFieldImgContainer.appendChild(modalField)
  })

  //Next Evolution Button
  
  const modalNextEvolutionContainer = document.createElement('div')
    modalNextEvolutionContainer.className = 'modal-next-evolution-container'

  modalBottomContentContainer.appendChild(modalNextEvolutionContainer)

  if(data.nextEvolutions.length === 0) {
    modalNextEvolutionContainer.style.visibility = 'hidden'
  }

  const modalNextEvolutionButton = document.createElement('div')
    modalNextEvolutionButton.className = 'modal-next-evolution-button'
  
  modalNextEvolutionContainer.appendChild(modalNextEvolutionButton)

  const modalNextEvolution = document.createElement('div')
    modalNextEvolution.textContent = "Next Evolution"
    modalNextEvolution.className = 'modal-next-evolution'

  modalNextEvolutionButton.appendChild(modalNextEvolution)

  const modalNextEvolutionTriangle = document.createElement('div')
    modalNextEvolutionTriangle.className = 'modal-next-evolution-triangle'
  
  modalNextEvolutionContainer.appendChild(modalNextEvolutionTriangle)

  return modalBottomContentContainer
}
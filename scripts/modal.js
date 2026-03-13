import { fetchDigimonFilter } from "../data/digimonAPI.js";


export const modal = async (id) => {
  const data = await fetchDigimonFilter(`digimon/${id}`)

  
  //Background Element

  const darkenBackground = document.createElement('div')
    darkenBackground.className = 'darken-bg'

    darkenBackground.addEventListener('click', (event) => {
    if(!modalCard.contains(event.target)) {
      document.body.removeChild(darkenBackground)}
    })

  document.body.appendChild(darkenBackground)


  //Card Element

  const modalCard = document.createElement('div')
    modalCard.className = 'modal-card'

  darkenBackground.appendChild(modalCard)
  
  //Exit Button

  const exitButton = document.createElement('div')
    exitButton.addEventListener('click', () => {
      document.body.removeChild(darkenBackground)
    })
    exitButton.textContent = 'X'
    exitButton.className = 'modal-exit-btn'
    
  modalCard.appendChild(exitButton)


 //Escape Key

  const exitKey = (event) => {
    if(event.key === 'Escape') {
      document.body.removeChild(darkenBackground)
      document.removeEventListener('keydown', exitKey)
    }
  }
  document.addEventListener('keydown', exitKey)


  //Container for name, id and type

  const modalHeaderContainer = document.createElement('div')
    modalHeaderContainer.className = 'modal-header-container'

  modalCard.appendChild(modalHeaderContainer)


  //Container for id and type

  const modalIdTypeContainer = document.createElement('div')
    modalIdTypeContainer.className = 'modal-id-type-container'

  modalHeaderContainer.appendChild(modalIdTypeContainer)


  //Id

  const modalIdContainer = document.createElement('div')
    modalIdContainer.className= 'modal-id-container'
  
  modalIdTypeContainer.appendChild(modalIdContainer) 

  const modalNameId = document.createElement('div')
    modalNameId.textContent = `#${String(data.id).padStart(4, '0')}`
    modalNameId.className = 'modal-name-id'
  
  modalIdContainer.appendChild(modalNameId)
  

  //Type

  const modalTypeContainer = document.createElement('div')
    modalTypeContainer.className = 'modal-type-container'

  modalIdTypeContainer.appendChild(modalTypeContainer)

  const modalType = document.createElement('div')
    modalType.textContent =  data.types[0]?.type 
    modalType.className = 'modal-type' 

  modalTypeContainer.appendChild(modalType)


  //Name

  const modalNameContainer = document.createElement('div')
    modalNameContainer.className = 'modal-name-container'

  modalHeaderContainer.appendChild(modalNameContainer)

  const modalName = document.createElement('div')
    modalName.textContent = data.name
    modalName.className = 'modal-name'

  
  modalNameContainer.appendChild(modalName)


  //container for name, image and filter

  const modalContentContainer = document.createElement('div')
    modalContentContainer.className = 'modal-content-container'

  modalCard.appendChild(modalContentContainer)


  //Left Container for spacing

  const modalLeftContainer = document.createElement('div')
    modalLeftContainer.className = 'modal-left-container'
  
  modalContentContainer.appendChild(modalLeftContainer)


  //Image Container

  const modalImageContainer = document.createElement('div')
    modalImageContainer.className = 'modal-image-container'

  modalContentContainer.appendChild(modalImageContainer)


  //Image

  const modalImage = document.createElement('img')
    modalImage.src = data.images[0]?.href
    modalImage.alt = data.name
    modalImage.className = 'modal-image'

  modalImageContainer.appendChild(modalImage)


  //Right Content Container

  const modalRightContainer = document.createElement('div')
    modalRightContainer.className = 'modal-right-container'

  modalContentContainer.appendChild(modalRightContainer)


    //Bio button

  const modalBioButton = document.createElement('div')
    modalBioButton.textContent = "Bio"
    modalBioButton.className = 'modal-bio-button'

  modalRightContainer.appendChild(modalBioButton)

  //Triangle Bio Element

  const modalBioTriangle = document.createElement('div')
    modalBioTriangle.className = 'modal-bio-triangle'

  modalBioButton.appendChild(modalBioTriangle)


  const modalRightContentContainer = document.createElement('div')
    modalRightContentContainer.className = 'modal-right-content-container'

  modalRightContainer.appendChild(modalRightContentContainer)


  //Filter Line

  const modalFilterLine = document.createElement('div')
    modalFilterLine.className = 'modal-filter-line'

  modalRightContentContainer.appendChild(modalFilterLine) 


  //Container for level and attribute
  
  const modalFilterContainer = document.createElement('div')
    modalFilterContainer.className = 'modal-filter-container'

  modalRightContentContainer.appendChild(modalFilterContainer)
  

  //Level
  
  const modalLevelContainer = document.createElement('div')
    modalLevelContainer.className = 'modal-level-container'
  
  const modalLevelHeader = document.createElement('div')
    modalLevelHeader.textContent = "LEVEL"
    modalLevelHeader.className = 'modal-level-header'

   modalLevelContainer.appendChild(modalLevelHeader)

  const modalLevelBadgeContainer = document.createElement('div')
    modalLevelBadgeContainer.className = 'modal-level-badge-container'

  modalLevelContainer.appendChild(modalLevelBadgeContainer)

  data.levels.forEach(({level}) => {
    const modalLevel = document.createElement('div')
    modalLevel.textContent = level
    modalLevel.className = 'modal-level'
    
    modalLevelBadgeContainer.appendChild(modalLevel)
  });
  
  modalFilterContainer.appendChild(modalLevelContainer)


  //Attribute

  const modalAttributeContainer = document.createElement('div')
    modalAttributeContainer.className = 'modal-attribute-container'

  modalFilterContainer.appendChild(modalAttributeContainer) 

  const modalAttributeHeader = document.createElement('div')
    modalAttributeHeader.textContent = "ATTR"
    modalAttributeHeader.className = 'modal-attribute-header'
  
  modalAttributeContainer.appendChild(modalAttributeHeader)  
  
  const modalAttribute = document.createElement('div')
    modalAttribute.textContent = data.attributes[0]?.attribute
    modalAttribute.className = 'modal-attribute'

  modalAttributeContainer.appendChild(modalAttribute)
  

  //Content Bottom Container

  const modalBottomContentContainer = document.createElement('div')
    modalBottomContentContainer.className = 'modal-bottom-content-container'

  modalCard.appendChild(modalBottomContentContainer)


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
    modalPreviousEvolution.textContent = "Prior Evo"
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
    modalNextEvolution.textContent = "Next Evo"
    modalNextEvolution.className = 'modal-next-evolution'

  modalNextEvolutionButton.appendChild(modalNextEvolution)

  const modalNextEvolutionTriangle = document.createElement('div')
    modalNextEvolutionTriangle.className = 'modal-next-evolution-triangle'
  
  modalNextEvolutionContainer.appendChild(modalNextEvolutionTriangle)

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

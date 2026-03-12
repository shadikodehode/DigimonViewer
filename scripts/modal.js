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
    exitButton.textContent = 'x'
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


  //Name

  const modalNameContainer = document.createElement('div')
    modalNameContainer.className = 'modal-name-container'

  const modalNameID = document.createElement('div')
    modalNameID.textContent = `#${String(data.id).padStart(4, '0')}`
    modalNameID.className = 'modal-name-id'

  const modalName = document.createElement('div')
    modalName.textContent = data.name
    modalName.className = 'modal-name'

  modalNameContainer.appendChild(modalNameID)
  modalNameContainer.appendChild(modalName)

  modalCard.appendChild(modalNameContainer)

  //container for type, image and filters

  const modalContentContainer = document.createElement('div')
    modalContentContainer.className = 'modal-content-container'

  modalCard.appendChild(modalContentContainer)

  //Type

  const modalTypeContainer = document.createElement('div')
    modalTypeContainer.className= 'modal-type-container'

  const modalTypeHeader = document.createElement('div')
    modalTypeHeader.textContent = "Type"
    modalTypeHeader.className = 'modal-type-header'

  const modalType = document.createElement('div')
    modalType.textContent =  data.types[0]?.type 
    modalType.className = 'modal-type' 

  modalTypeContainer .appendChild(modalTypeHeader)
  modalTypeContainer.appendChild(modalType)

  modalContentContainer.appendChild(modalTypeContainer)


  //Image

  const modalImage = document.createElement('img')
    modalImage.src = data.images[0]?.href
    modalImage.alt = data.name
    modalImage.className = 'modal-image'

  modalContentContainer.appendChild(modalImage)


  //Container for level and attribute
  
  const modalFilterContainer = document.createElement('div')
    modalFilterContainer.className = 'modal-filter-container'

    modalContentContainer.appendChild(modalFilterContainer)

  //Level
  
  const modalLevelContainer = document.createElement('div')
    modalLevelContainer.className = 'modal-level-container'
  
  const modalLevelHeader = document.createElement('div')
    modalLevelHeader.textContent = "Level:"
    modalLevelHeader.className = 'modal-level-header'

   modalLevelContainer.appendChild(modalLevelHeader)

  data.levels.forEach(({level}) => {
    const modalLevel = document.createElement('div')
    modalLevel.textContent = level
    modalLevel.className = 'modal-level'
    
    modalLevelContainer.appendChild(modalLevel)
  });
  
  modalFilterContainer.appendChild(modalLevelContainer)


  //Attribute

  const modalAttributeContainer = document.createElement('div')
    modalAttributeContainer.className = 'modal-attribute-container'

  const modalAttributeHeader = document.createElement('div')
    modalAttributeHeader.textContent = "Attribute:"
    modalAttributeHeader.className = 'modal-attribute-header'
  
  const modalAttribute = document.createElement('div')
    modalAttribute.textContent = data.attributes[0]?.attribute
    modalAttribute.className = 'modal-attribute'

  modalAttributeContainer.appendChild(modalAttributeHeader)
  modalAttributeContainer.appendChild(modalAttribute)

  modalFilterContainer.appendChild(modalAttributeContainer)


  //Field

  const modalFieldContainer = document.createElement('div')
    modalFieldContainer.className = 'modal-field-container'
    
  // const modalFieldHeader = document.createElement('div')
  //   modalFieldHeader.textContent = "Fields:"
  //   modalFieldHeader.className = 'modal-field-header'

  // modalFieldContainer.appendChild(modalFieldHeader)

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

  modalCard.appendChild(modalFieldContainer)  

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

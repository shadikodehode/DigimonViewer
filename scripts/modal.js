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


  //container for name, image and filter

  const modalContentContainer = document.createElement('div')
    modalContentContainer.className = 'modal-content-container'

  modalCard.appendChild(modalContentContainer)


  //Container for name, id and type

  const modalHeaderContainer = document.createElement('div')
    modalHeaderContainer.className = 'modal-header-container'

  modalContentContainer.appendChild(modalHeaderContainer)


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


  //name

  const modalNameContainer = document.createElement('div')
    modalNameContainer.className = 'modal-name-container'

  modalHeaderContainer.appendChild(modalNameContainer)

  const modalName = document.createElement('div')
    modalName.textContent = data.name
    modalName.className = 'modal-name'

  
  modalNameContainer.appendChild(modalName)


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
    modalLevelHeader.textContent = "LEVEL"
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
    modalAttributeHeader.textContent = "ATTRIBUTE"
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
    
  modalCard.appendChild(modalFieldContainer)

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

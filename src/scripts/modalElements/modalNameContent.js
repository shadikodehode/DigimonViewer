import { createTags } from "../utils.js"

export const modalCreateNameContent = (data) => {

   //Container for name, id and type
    const modalHeaderContainer = document.createElement('div')
      modalHeaderContainer.className = 'modal-header-container'

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
      modalNameId.title = "Id"
    
    modalIdContainer.appendChild(modalNameId) 
    
    //Type
    const modalTypeContainer = document.createElement('div')
      modalTypeContainer.className = 'tag-container tag-type'

    modalIdTypeContainer.appendChild(modalTypeContainer)

    const modalType = document.createElement('div')
      modalType.textContent =  data.types[0]?.type 
      modalType.title = "Type"

    modalTypeContainer.appendChild(modalType)

    //Name
    const modalNameContainer = document.createElement('div')
      modalNameContainer.className = 'modal-name-container'

    modalHeaderContainer.appendChild(modalNameContainer)

    const modalName = document.createElement('div')
      modalName.className = 'modal-name'

    modalNameContainer.appendChild(modalName)

    const cleanName = createTags(data.name, modalIdTypeContainer)
    modalName.textContent = cleanName

    return modalHeaderContainer
}


export const modalCreateMainContent = (data) => {

  //container for Image  
    const modalContentContainer = document.createElement('div')
      modalContentContainer.className = 'modal-content-container'
  
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

    //Sub Right Container
    const modalRightSubContainer = document.createElement('div')
      modalRightSubContainer.className = 'modal-right-sub-container'
    
    modalRightContainer.appendChild(modalRightSubContainer)

    //Bio button
    const modalBioButton = document.createElement('div')
      modalBioButton.textContent = "Bio"
      modalBioButton.className = 'modal-bio-button'

    modalRightSubContainer.appendChild(modalBioButton)

    //Triangle Bio Element
    const modalBioTriangle = document.createElement('div')
      modalBioTriangle.className = 'modal-bio-triangle'

    modalBioButton.appendChild(modalBioTriangle)

    const modalRightContentContainer = document.createElement('div')
      modalRightContentContainer.className = 'modal-right-content-container'

    modalRightContainer.appendChild(modalRightContentContainer)

    const modalBioTextContainer = document.createElement('div')
      modalBioTextContainer.className = 'modal-bio-text-container'

    modalRightSubContainer.appendChild(modalBioTextContainer)

    //Decription
    const modalBioText = document.createElement('div')
    modalBioText.textContent = data.descriptions
    .find(description => description.language === 'en_us')?.description
    modalBioText.className = 'modal-bio-text'

    modalBioButton.addEventListener('click', () => {
      event.stopPropagation()
    })

    modalBioTextContainer.appendChild(modalBioText)

    modalBioButton.addEventListener('click', () => {
      event.stopPropagation()
      modalRightSubContainer.classList.toggle('expanded')
      modalBioTextContainer.classList.toggle('expanded')
      modalBioButton.classList.toggle('expanded')
      modalBioTriangle.classList.toggle('expanded')
      modalFilterContainer.classList.toggle('expanded')

      document.addEventListener('click', (event) => {
        if(!modalBioTextContainer.contains(event.target)) {
          modalRightSubContainer.classList.remove('expanded')
          modalBioTextContainer.classList.remove('expanded')
          modalBioButton.classList.remove('expanded')
          modalBioTriangle.classList.remove('expanded')
          modalFilterContainer.classList.remove('expanded')
        }
      })
    })

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
    
    return modalContentContainer
}

import { fetchDigimonFilter } from "../data/digimonAPI.js";

export const modal = async (id) => {
  console.log('modal called')
  const data = await fetchDigimonFilter(`digimon/${id}`)
  console.log(data)
  
  const darkenBackground = document.createElement('div')
  
  darkenBackground.className = 'darken-bg'

  document.body.appendChild(darkenBackground)

  const modalCard = document.createElement('div')
   modalCard.className = 'modal-card'

    darkenBackground.appendChild(modalCard)
  
  const modalName = document.createElement('div')
    modalName.textContent = data.name
    modalName.className = 'modal-name'

    modalCard.appendChild(modalName)

    const exitButton = document.createElement('div')
  
    exitButton.addEventListener('click', () => {
      document.body.removeChild(darkenBackground)
    })
    exitButton.textContent = 'x'
    exitButton.className = 'modal-exit-btn'
    
    modalCard.appendChild(exitButton)
  
  const modalLevel = document.createElement('div')
    modalLevel.textContent = data.levels[0]?.level
    modalLevel.className = 'modal-level'

    modalCard.appendChild(modalLevel)

  const modalType = document.createElement('div')
    modalType.textContent =  data.types[0]?.type 
    modalType.className = 'modal-type' 

    modalCard.appendChild(modalType)

  const modalAttribute = document.createElement('div')
    modalAttribute.textContent = data.attributes[0]?.attribute
    modalAttribute.className = 'modal-attribute'

    modalCard.appendChild(modalAttribute)

  const modalImage = document.createElement('img')
    modalImage.src = data.images[0]?.href ?? 'Unknown'

    modalCard.appendChild(modalImage)
  
  const modalDescription = document.createElement('div')
    modalDescription.textContent = data.descriptions
    .find(d => d.language === 'en_us')?.description
    modalAttribute.className = 'modal-description'

    modalCard.appendChild(modalDescription)

  
  darkenBackground.addEventListener('click', (event) => {
  if(!modalCard.contains(event.target)) {
    document.body.removeChild(darkenBackground)}
  })

  const exitKey = (event) => {
    if(event.key === 'Escape') {
      document.body.removeChild(darkenBackground)
      document.removeEventListener('keydown', exitKey)
    }
  }
  document.addEventListener('keydown', exitKey)
}

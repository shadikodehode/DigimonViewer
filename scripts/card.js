let cardHTML = '';

cardsHTML();

function cardsHTML(){
    cards.forEach((card) => { 

      cardHTML += `
        <div class="card 
        card-modal-popup
        js-card
        "
        data-card-id="${card.id}">
            <div class="card-appearance">

              <img class="card-image" 
              src="${card.image}">

              <div class="card-name">
              ${card.name}
              </div>

              <div class="card-level-${card.level}">
              ${card.level}

            </div>
          </div> 
        </div>
      `;
});
}

document.querySelector('.js-card-container')
  .innerHTML = cardHTML;

//   function digimonClicked() {
//   document.querySelectorAll('.js-card')
//     .forEach((card) => {
//         card.addEventListener('click', () => {
//           console.log(card.dataset.cardId);
//           const digimonId= card.dataset.cardId
//           digimonId
//         })
//     })
//   }
// digimonClicked()
    
let modal = document.querySelector('.js-modal-container')

let modalPopup = document.querySelector('.card-modal-popup')

modalCard();

function modalCard(){
  modalPopup.onclick = function(){
    modal.style.display = "flex";
    cards.forEach((card) => {
      
    });
  }
  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
  }
}

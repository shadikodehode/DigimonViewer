//OOP into Class, this is probably overkill...

class Digimon {
  id;
  name;
  digimon;
  image;
  level;
  attribute;
  field;
  skills;
  release;
  type;

  constructor(digimonDetails) {
    this.id = digimonDetails.id;
    this.name = digimonDetails.name;
    this.image = digimonDetails.image;
    this.level = digimonDetails.level;
    this.attribute = digimonDetails.attribute;
    this.field = digimonDetails.field;
    this.skill = digimonDetails.skill;
    this.release = digimonDetails.release;
    this.type = digimonDetails.type;
  }
  //params: id,  name, leave blank  to get list of

  getIdUrl() {
    return `https://digi-api.com/api/v1/digimon/${this.id}`;
  }

  getNameUrl() {
    return `https://digi-api.com/api/v1/digimon/${this.name}`;
  }

  getDigimonUrl() {
    return `https://digi-api.com/api/v1/digimon/${this.digimon}`; //params: name, exact, attribute, level, page, pageSize, leaveblank to get list of digimons
  }

  getImageUrl() {
    return `https://digi-api.com/api/v1/digimon/${this.image}`;
  }

  getLevelUrl() {
    return `https://digi-api.com/api/v1/level/${this.level}`;
  }

  getAttributeUrl() {
    return `https://digi-api.com/api/v1/attribute/${this.attribute}`;
  }

  getFieldUrl() {
    return `https://digi-api.com/api/v1/field/${this.field}`;
  }

  getSkillUrl() {
    return `https://digi-api.com/api/v1/skill/${this.skill}`;
  }

  getReleaseUrl() {
    return `https://digi-api.com/api/v1/digimon/${this.release}`;
  }

  getTypeUrl() {
    return `https://digi-api.com/api/v1/type/${this.type}`;
  }
}

let digimons = [];

function getDigimons() {
  const xhr = new XMLHttpRequest()
  
  xhr.addEventListener('load', () => {
    console.log(xhr.response);
  });
  
  xhr.open('GET', 'https://digi-api.com/api/v1/digimon')
  xhr.send();
}
getDigimons();

// const digimon = [/*data goes here*/].map((digimonDetails) => {
//   return new Card(digimonDetails)
// });


let cardHTML = '';

let modalHTML = '';

generateCard();

function generateCard(){
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

document.querySelector('.js-modal-container')
  .innerHTML = modalHTML;

// digimonClicked()
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

    
let modal = document.querySelector('.js-modal-container')

let modalPopup = document.querySelector('.card-modal-popup')

let cardPopper = document.querySelector('.modal-content')

modalCard();

function modalCard(){
  cards.forEach(() => {
    modalPopup.onclick = function(){
        this.style.display = "flex",
          this.modalHTML += `
            <div class="modal-content">
              test
            </div>
          `;
    }
      window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
      }
  })
 
}

modalsHTML();

function modalsHTML(){
  modalPopup.onclick(() => {
    modalHTML += `
      <div class="modal-content">
        test
      </div>
    `;
  });
}

let cardHTML = '';

let modalHTML = '';

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
}
//   //params: id,  name, leave blank  to get list of

//   getIdUrl() {
//     return `https://digi-api.com/api/v1/digimon/${this.id}`;
//   }

//   getNameUrl() {
//     return `https://digi-api.com/api/v1/digimon/${this.name}`;
//   }

//   getDigimonUrl() {
//     return `https://digi-api.com/api/v1/digimon/${this.digimon}`; //params: name, exact, attribute, level, page, pageSize, leaveblank to get list of digimons
//   }

//   getImageUrl() {
//     return `https://digi-api.com/api/v1/digimon/${this.image}`;
//   }

//   getLevelUrl() {
//     return `https://digi-api.com/api/v1/level/${this.level}`;
//   }

//   getAttributeUrl() {
//     return `https://digi-api.com/api/v1/attribute/${this.attribute}`;
//   }

//   getFieldUrl() {
//     return `https://digi-api.com/api/v1/field/${this.field}`;
//   }

//   getSkillUrl() {
//     return `https://digi-api.com/api/v1/skill/${this.skill}`;
//   }

//   getReleaseUrl() {
//     return `https://digi-api.com/api/v1/digimon/${this.release}`;
//   }

//   getTypeUrl() {
//     return `https://digi-api.com/api/v1/type/${this.type}`;
//   }
// }

// getDigimons();

// async function fetchData() {
//   try{
//     const response = await fetch("https://digi-api.com/api/v1/digimon")
//     if(!response.ok){
//       throw new Error("Could not fetch")
//     }
    
//     const data = await response.json().map(() => {
//       return new Digimon(digimonDetails);
//     });
//     console.log(data);

//   }
//   catch(error){
//     console.error(error);
//   }};
//   fetchData();

// const digimon = [/*data goes here*/].map((digimonDetails) => {
//   return new Card(digimonDetails)
// });

generateCard();
function generateCard(){
    cards.forEach((card) => { 
      cardHTML += `
        <div class="card 
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
})
};

digimonClicked()
  function digimonClicked() {
  document.querySelectorAll('.js-card')
    .forEach((card) => {
        card.addEventListener('click', () => {
          console.log(card.dataset.cardId);
        })
    });
  };

// function modalCard(){
//     modal.onClick(() => {
//         modal.style.display = "flex",
//           this.innerHTML += `
//             <div class="modal-content">
//               test
//             </div>
//           `;
//     },
//       window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//       })
//   }

// modalsHTML();

// function modalsHTML(){
//   modalPopup.onclick(() => {
//     modalHTML += `
//       <div class="modal-content">
//         test
//       </div>
//     `;
//   });
// }

document.querySelector('.js-card-container')
  .innerHTML = cardHTML;

document.querySelector('.js-modal-container')
  .innerHTML = modalHTML;

let modal = document.querySelector('.js-modal-container')

let cardPopper = document.querySelector('.js-modal-content')

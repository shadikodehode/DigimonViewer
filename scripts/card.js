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
  display(){
      return `${this.id, this.name}`
  }
}

async function getDigimon() {
  try{
    const response = await fetch("https://digi-api.com/api/v1/digimon")
    const data = await response.json();

    for(let i = 0; i < data.length; i++){
      console.log(i)
    }
  }  catch (error){
    console.error('Error fetching data', error);
  }
};
getDigimon();
// async function fetchData() {
//   try{
//     const response = await fetch("https://digi-api.com/api/v1/digimon")
//     if(!response.ok){
//       throw new Error("Could not fetch")
//     }
    
//     const data = await response.json()
//     data.content.map((digimonDetails) => {
//       return new Digimon(digimonDetails);
//     });
//     console.log(data);
//     data;

//   }
//   catch(error){
//     console.error(error);
//   }};
//   fetchData();

// async function getDigimonId(){
//   Digimon.forEach((id, index) => {
//     console.log(`Index: ${index}, id: ${id}`)
//   });
// }
// getDigimonId();

// function getDigimonId(){
//   for(let digimon of data){
//     console.log(digimon)
//   }
// }
// getDigimonId();


let cardHTML = '';

let modalHTML = '';

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
});
}

document.querySelector('.js-card-container')
  .innerHTML = cardHTML;

  document.querySelector('.js-modal-container')
    .innerHTML = modalHTML;
  
const modalClicked = document.getElementById('.js-card');
const modal = document.getElementById('.js-modal')

function digimonClicked() {
  document.querySelectorAll('.js-card')
  .forEach((card) => {
      card.addEventListener('click', () => {
        modalClicked.addEventListener('click', () => {
          modal.style.display = "flex";
        })
        modalHTML += `
          <div id="js-modal">
            <div>
            test
            </div>
          </div>
        `;
        console.log(card.dataset.cardId);
      })
  })
}
digimonClicked()



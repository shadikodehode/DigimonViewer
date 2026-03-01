const cards = [{
  id: '1f1',
  image: 'cards/Baboongamon.png',
  name: 'Baboongamon',
  level: 'ultimate'
}, {
  id: '1f2',
  image: 'cards/Agumon.png',
  name: 'Agumon',
  level: 'rookie'
}, {
  id: '1f3',
  image: 'cards/Dracomon (X-Antibody).png',
  name: 'Dracomon',
  level: 'champion'
}, {
  id: '2f1',
  image: 'cards/Shoeshoemon.png',
  name: 'Shoeshoemon',
  level: 'training1'
}, {
  id: '2f2',
  image: 'cards/Sistermon Ciel.png',
  name: 'Sistermon',
  level: 'training2'
}, {
  id: '2f3',
  image: 'cards/Starmon.png',
  name: 'Starmon',
  level: 'mega'
}];

/*
uses js to set the cards into the body as html
sets the css class "card"
sets the javascript class "js-card"
gets the data with "data-" so when I use the click event it knows which digimon to put on the card
*/

let cardsHTML = '';

cards.forEach((card) => { 
  cardsHTML += `
    <div class="card 
    js-card"
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

document.querySelector('.js-card-container')
  .innerHTML = cardsHTML;

document.querySelectorAll('.js-card')
  .forEach((card)=>{
      card.addEventListener('click', () => {
        const cardId = card.dataset.cardId;
      });
  });
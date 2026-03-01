const cards = [{
  image: 'cards/Baboongamon.png',
  name: 'Baboongamon',
  level: 'ultimate'
}, {
  image: 'cards/Agumon.png',
  name: 'Agumon',
  level: 'rookie'
}, {
  image: 'cards/Dracomon (X-Antibody).png',
  name: 'Dracomon',
  level: 'champion'
}, {
  image: 'cards/Shoeshoemon.png',
  name: 'Shoeshoemon',
  level: 'training1'
}, {
  image: 'cards/Sistermon Ciel.png',
  name: 'Sistermon',
  level: 'training2'
}, {
  image: 'cards/Starmon.png',
  name: 'Starmon',
  level: 'mega'
}];

let cardsHTML = '';

cards.forEach((card) => {
  cardsHTML += `
    <div class="card
    js-card">
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

document.querySelector('.js-card-container').
innerHTML = cardsHTML;

document.querySelectorAll('.js-card')
  .forEach((card)=>{
      card.addEventListener('click', () => {
        console.log('clicked card')
      });
  });
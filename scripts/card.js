const cards = [{
  image: 'cards/Baboongamon.png',
  name: 'Baboongamon',
  level: 'ultimate'
}];

let cardsHTML = '';

cards.forEach((card) => {
  cardsHTML += `
    <div class="card">
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
// fetchData();

// async function fetchData() {
//   try{
//     const response = await fetch("https://digi-api.com/api/v1/digimon")
//     if(!response.ok){
//       throw new Error("Could not fetch")
//     }
    
//     const data = await response.json();
//     console.log(data);

//   }
//   catch(error){
//     console.error(error);
//   }};

// document.addEventListener('scroll', (event) => {
//   if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000){
//     fetchData();
//   }
// });

fetch('https://digi-api.com/api/v1/digimon/5')
  .then(res => res.json())
  .then(data => console.log(data))


// const cards = [{
//   id: '',
//   name: '',
//   image: '',
//   level: '',
//   attribute: '',
//   field: '',
//   skills: '',
//   release: '',
//   type: ''
// }]

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
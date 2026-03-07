import { createCard } from "../scripts/card.js";

const digimonApi = 'https://digi-api.com/api/v1';

let digimonArr = [];

let isLoading = false;

let currentPage = 0;

let totalPages = 0;

const pageSize = 40;

const fetchDigimon = async () => {
  const response = await fetch(`${digimonApi}/digimon?pageSize=${pageSize}`)
  return await response.json();
}

const fetchDigimonData = async (data) => {
  for (const digimonList of data.content) {
   digimonArr.push({
    id: digimonList.id,
    name: digimonList.name,
    image: digimonList.image
   })
  }
  totalPages = data.pageable?.totalPages;
  console.log(data)
}

export const getDigimon = async () => {
  const data = await fetchDigimon();
  await fetchDigimonData(data);
  digimonArr.forEach(digimon => {
      createCard(digimon.name, digimon.image)
  })
}

const LoadNextPage = async () => {  
  if(isLoading || currentPage >= totalPages) return;
  isLoading = true;
  currentPage++;
  const  response = await fetch(`${digimonApi}/digimon?pageSize=${pageSize}&page=${currentPage}`);
  const data = await response.json();
  const startLoad = digimonArr.length;
  await fetchDigimonData(data);
  digimonArr.slice(startLoad).forEach(digimon => {
    createCard(digimon.name, digimon.image)
  })
  isLoading = false;
    }

 document.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200){
    LoadNextPage();
  }}
)




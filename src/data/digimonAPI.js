import { renderCard } from "../scripts/renderCard.js";
import { skipDigimon, skipPattern } from "../scripts/skipDigimon.js";

const digimonApi = 'https://digi-api.com/api/v1';

export let digimonArr = [];

export let allDigimonArr = [];

let isLoading = false;

let isFiltered = false;

export const setIsFiltered = (value) => {isFiltered = value}

let currentPage = 0;

let totalPages = 0;

const pageSize = 40;

const fetchDigimon = async () => {
  const response = await fetch(`${digimonApi}/digimon?pageSize=${pageSize}`);
  return await response.json();

  //error handling / try/catch 
  //
}

export const fetchDigimonFilter = async (filter)=> {
  const response = await fetch(`${digimonApi}/${filter}`)
  return await response.json();
}

const fetchDigimonData = async (data) => {
  for (const digimonList of data.content) {
    if(skipDigimon.has(digimonList.name)) continue;
    if(skipPattern.some(pattern => digimonList.name.includes(pattern))) continue;
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
  renderCard(digimonArr)
}

export const fetchAllDigimon = async () => {
  const response = await fetch(`${digimonApi}/digimon?pageSize=1488`)
  const data = await response.json();
  allDigimonArr = data.content
  .filter(digimon => !skipDigimon.has(digimon.name))
  .filter(digimon => !skipPattern.some(pattern => digimon.name.includes(pattern)))
  .map(digimon => ({
    id: digimon.id,
    name: digimon.name, 
    image: digimon.image
  })
);
}

const LoadNextPage = async () => {  
  if(isLoading || currentPage >= totalPages || isFiltered) return;
  isLoading = true;
  currentPage++;
  const  response = await fetch(`${digimonApi}/digimon?pageSize=${pageSize}&page=${currentPage}`);
  const data = await response.json();
  const startLoad = digimonArr.length;
  await fetchDigimonData(data);
  renderCard(digimonArr.slice(startLoad), false)
  isLoading = false;
}

 document.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200){
    LoadNextPage();
  }}
)

export const fillPage = async () => {
    while(document.body.scrollHeight <= window.innerHeight) {
        await LoadNextPage()
    }
}



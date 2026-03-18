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
  try {
    const response = await fetch(`${digimonApi}/digimon?pageSize=${pageSize}`);
    if(!response.ok) throw new Error(`HTTP error: ${response.status}`)
    return await response.json();
  }
  catch (error) {
    console.error('Failed to fetch digimon', error)
    return null
  }
}

export const fetchDigimonFilter = async (filter)=> {
  try {
    const response = await fetch(`${digimonApi}/${filter}`)
    if(!response.ok) throw new Error(`HTTP error: ${response.status}`)
    return await response.json();
  }
  catch (error) {
    console.error('Failed to fetch digimon', error)
    return null
  }
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
  const data = await fetchDigimon()
  if (!data) return
  await fetchDigimonData(data)
  renderCard(digimonArr)
}

export const fetchAllDigimon = async () => {
  try {
    const response = await fetch(`${digimonApi}/digimon?pageSize=1488`)
    if(!response.ok) throw new Error(`HTTP error: ${response.status}`)
    const data = await response.json();
    allDigimonArr = data.content
    .filter(digimon => !skipDigimon.has(digimon.name))
    .filter(digimon => !skipPattern.some(pattern => digimon.name.includes(pattern)))
    .map(digimon => ({
      id: digimon.id,
      name: digimon.name, 
      image: digimon.image
    })
  )
  }
  catch (error) {
    console.error('Failed to fetch digimon', error)
    return null
  }
}

const LoadNextPage = async () => {  
  if(isLoading || currentPage >= totalPages || isFiltered) return;
  isLoading = true
  currentPage++;
  try {
    const  response = await fetch(`${digimonApi}/digimon?pageSize=${pageSize}&page=${currentPage}`);
    if(!response.ok) throw new Error(`HTTP error: ${response.status}`)
    const data = await response.json();
  const startLoad = digimonArr.length;
  await fetchDigimonData(data);
  renderCard(digimonArr.slice(startLoad), false)
  }
  catch (error) {
    console.error('Failed to fetch digimon', error)
    return null
  }
  finally {
    isLoading = false
  }
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



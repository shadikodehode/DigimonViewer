import { getDigimon, fetchAllDigimon } from "../data/digimonAPI.js";
import { searchDigimonAutocomplete } from "../scripts/search.js";

const init = async () => {
  await getDigimon();
  await fetchAllDigimon();
  searchDigimonAutocomplete();
}

init();
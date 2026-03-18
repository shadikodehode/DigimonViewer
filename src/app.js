import { getDigimon, fetchAllDigimon, fillPage } from "./data/digimonAPI.js";
import { searchDigimonAutocomplete } from "./scripts/search.js";
import { dropdownFilter } from "./scripts/filter.js";

const init = async () => {
  await getDigimon();
  await fetchAllDigimon();
  searchDigimonAutocomplete();
  await dropdownFilter();
  fillPage()
}

init();
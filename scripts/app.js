import { getDigimon, fetchAllDigimon } from "../data/digimonAPI.js";
import { searchDigimonAutocomplete } from "../scripts/search.js";
import { dropdownFilter } from "./filter.js";

const init = async () => {
  await getDigimon();
  await fetchAllDigimon();
  searchDigimonAutocomplete();
  await dropdownFilter();
}

init();
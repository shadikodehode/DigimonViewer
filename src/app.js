import { getDigimon, fetchAllDigimon, fillPage } from "./data/digimonAPI.js";
import { dropdownFilter } from "./scripts/filter.js";

const init = async () => {
  await getDigimon();
  await fetchAllDigimon();
  await dropdownFilter();
  fillPage()
}

init();
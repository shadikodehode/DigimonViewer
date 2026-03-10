//List with digimon to skip, they don't have a type and made the card aestethic look bad
//but in the api to check for type it would check all 1488 digimon individually to find
//the ones without type, which sounded like a big resource hog, and since there weren't
//that many of them I found it easier to do it manually, ideally the api would be better
//suited for this

export const skipDigimon = new Set([
  "Death Airdramon", 
  "Death Devimon", 
  "Death Meramon (C'mon Digimon Version)", 
  "Death Metal Greymon", 
  "Death Tyranomon",
  "Deathmon (C'mon Digimon Version)",
  "Ohakadamon",
  "Fujitsumon",
  "Golemon (PS)",
  "Chaos Greymon",
  "Chaos Seadramon",
  "Chaos Lord",
  "Technodramon",
  "Generamon",
  "Holy Digitamamon",
  "Negamon (Evolved Form)",
  "Jyureimon (Christmas Tree)",
  "Woodwoodymon",
  "Bancho Golemon",
  "Kuzuhamonchiko Mode",
  "Sistermon Noir (Awake)",
  "Sistermon Blanc (Awake",
  "Xros Up Arresterdramon (Orgemon)",
  "Xros Up Astamon (Cerberumon)",
  "Xros Up Opossummon (Candmon)",
  "Xros Up Arresterdramon (Astamon)",
])
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

let initialMapping = createInitialMapping();

let createInitialMapping = () => {
  let mapping = {};
  for(let i = 0; i < letters.length; i++){
    mapping[letters[i]] = letters[i];
  }
  return mapping;
}





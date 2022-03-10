const isEvenlyDivisible = (x, y) => {
  return x % y !== 0 ? false : true;
};

const halfSquare = (x) => {
  return (x * x) / 2;
};

const isLong = (str) => {
  return str.length >= 15 ? true : false;
};

function exclaim(str) {
  if (str.indexOf("!") === -1) {
    return str + "!";
  } else {
    return str.substring(0, str.indexOf("!") + 1);
  }
}

const containsDigit = (str) => {
  //MATCHES DIGIT
  // //g = GLOBAL SEARCH
  // \d = DIGIT
  // \D = NON DIGIT
  const regexp = /\d/g;
  //RETURNS A BOOLEAN VALUE
  return regexp.test(str);
};

const containsLowerCase = (str) => {
  const regexp = /\.*[a-z].*/g;
  return regexp.test(str);
  // CHECKS FOR LOWER CASE CHAR
};

const countWords = (str) => {
  spaceCounter = 1;
  oneWord = 1;
    if(!str.includes(" ")){
      return oneWord;
    }
    else{
  for(let i = 0 ; i <= str.length; i++){
    if(str[i] === " "){
      spaceCounter = spaceCounter +1;
    }
  }
}return spaceCounter;
}

const containsUpperCase = (str) => {
  const regexp = /\.*[A-Z].*/g;
  return regexp.test(str);
};

const containsNonAlphanumeric = (str) => {
  // . = MATCHES ANY CHAR
  // * = QUANTIFIER
  // \W = NOT WORD IS NON ALPHA
  const regexp = /\.*\W.*/g;
  return regexp.test(str);
};

const digits = () => {

};

const containsSpace = (str) => {
  if (str.split(" ").length - 1) {
    return true;
  } else {
    return false;
  }
};

const truncate = (str) => {
  if (str.length < 15) {
    return str;
  }
  for (let i = 0; i <= 15; i++) {
    return str.slice(0, 8) + "...";
  }
};

const isValidPassword = (str) => {
  return (
    containsUpperCase(str) &&
    containsLowerCase(str) &&
    containsDigit(str) &&
    containsNonAlphanumeric(str) &&
    !containsSpace(str)
  );
};

const onlyPunchy = (titles) => {
  const exclaimedTitles = titles.map(exclaim);
  const punchyTitles = exclaimedTitles.filter((title) => title.length < 15);
  return punchyTitles;
};

module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
};

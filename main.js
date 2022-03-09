const isEvenlyDivisible = (x, y) => {
  return x % y !== 0 ? false : true;
};

const halfSquare = (x) => {
  return (x * x) / 2;
};

const isLong = (str) => {
  return str.length >= 15 ? true : false;
};

// exclaim = (str) => {
//   let numExclamationMarks = 0;
//   for (let i = str.length - 1; i >= 0; i--) {
//     if (str[i] === "!") {
//       numExclamationMarks++;
//     } else {
//       break;
//     }
//   }
//   let exclamationlessStr = "";
//   for (let i = 0; i < str.length - numExclamationMarks; i++) {
//     exclamationlessStr += str[i];
//   }
//   return exclamationlessStr + "!";
// };

const exclaim = (str) => {
  if (str.indexOf("!" === -1)){
    str += "!"
  }
  return str
  if (str.indexOf("!") === str.length -1) {
    return str;
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

const countWords = () => {};

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

function digits() {}

containsSpace = (str) => {
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

function isValidPassword() {}

function onlyPunchy() {}

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

function isEvenlyDivisible(x, y) {
  if (x % y !== 0) {
    return false;
  } else {
    return true;
  }
}

function halfSquare(x) {
  let value = Math.pow(x, 2);
  return value / 2;
}

function isLong(str) {
  if (str.length < 15) {
    return false;
  }

  if (str.length >= 15) {
    return true;
  }
}

function exclaim() {}
// exclaim = (str) => {
//   let result = '';

//   for (let i = 0; i < str.length; i++) {
//     if (str[i - 1] !== i) {
//       return result += "1"
//     }
//   }
//   return result;
// }

function countWords() {}

containsDigit = (str) => {
  for (const value of str) {
    if (value % 1 === 0) {
      return true; 
    } else if (typeof str !== 'string') {
      return false;
    }
  }
};
function containsLowerCase() {}

function containsUpperCase() {}

function containsNonAlphanumeric() {}

containsSpace = (str) => {
  if (str.split(" ").length - 1) {
    return true;
  } else {
    return false;
  }
};

function digits() {}

truncate = (str) => {
  if (str.length < 15) {
    return str;
  }
  let result = '';
  for (let i = 0; i <= 15; i++) {
    return str.slice(0, 8) + "..."
  }
}

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

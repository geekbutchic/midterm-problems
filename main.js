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

exclaim = (str) => {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[str.length - 1]) {
      return str.slice() + '!'
    } 
    if (str[str.length - 1] === "!") {
      return str
    }
  }
  // return result;
}

function countWords() {}

containsDigit = (str) => {
  for (const value of str) {
    if (value % 1 === 0 || typeof str !== 'string') {
      return true; 
    } else if (typeof str === 'string') {
      return false;
    }
  }
  return isNaN(str)||typeof(str)!=="number"? false:true
};


function containsLowerCase(ch) {
  if (ch === ch.toLowerCase() && ch !== ch.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}


function containsUpperCase(str) {
  if (str === str.toUpperCase() && str !== str.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

function containsNonAlphanumeric(str) {
  if (str === str.containsNonAlphanumeric && str !== str.containsNonAlphanumeric) {
    return true;
  } else {
    return false;
  }
}

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

function isValidPassword(str) {
  if (
    str.length >= 8 && str.toUpperCase() !== str && str.toLowerCase() !== str && str.containsNonAlphanumeric
  ) {
    return true;
  } else {
    return false;
  }
};

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

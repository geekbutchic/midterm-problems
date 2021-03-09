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
  // Count the number of exclamation marks that the string ends with (count start at end of string)
  let numExclamationMarks = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === "!") {
      numExclamationMarks++;
    } else {
      break;
    }
  }

  // Get the part of the string that does not contain the exclamation marks (ie.: 'hello!!!' => 'hello')
  let exclamationlessStr = "";
  for (let i = 0; i < str.length - numExclamationMarks; i++) {
    exclamationlessStr += str[i];
  }

  // Add one exclamation mark to the end
  // (i.e.: 'hello' => 'hello!')
  return exclamationlessStr + "!";
};

countWords = () => {};

containsDigit = (str) => {
  let doesContainDigits = false;

  // Look at every character, and see if any of them are digits
  for (const char of str) {
    if (
      char === "0" ||
      char === "1" ||
      char === "2" ||
      char === "3" ||
      char === "4" ||
      char === "5" ||
      char === "6" ||
      char === "7" ||
      char === "8" ||
      char === "9"
    ) {
      doesContainDigits = true;
    }
  }
  return doesContainDigits;
};

function containsLowerCase(str) {
  let doesContainLowerCase = false;

  const lowerCaseDigits = "abcdefghijklmnopqrstuvwxyz";

  for (const char of str) {
    if (lowerCaseDigits.includes(char)) {
      doesContainLowerCase = true;
    }
  }

  return doesContainLowerCase;
}

function containsLowerCaseAlternate(str) {
  let doesContainLowerCase = false;

  for (const char of str) {
    // 1. Is the char a letter?
    const isLetter = char.toLowerCase() !== char.toUpperCase();

    // 2. If so, is the lowercased version of that char equal to the original char
    const isLowerCase = char === char.toLowerCase();

    // If 1. and 2. are both true, char is a lower case letter
    if (isLetter && isLowerCase) {
      doesContainLowerCase = true;
    }
  }

  return doesContainLowerCase;
}

function containsUpperCase(str) {
  let doesContainUpperCase = false;

  const upperCaseDigits = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (const char of str) {
    if (upperCaseDigits.includes(char)) {
      doesContainUpperCase = true;
    }
  }

  return doesContainUpperCase;
}

function containsNonAlphanumeric(str) {
  let doesContainNonAlphanumeric = false;

  for (const char of str) {
    const isDigit = containsDigit(char);
    const isUpperCaseLetter = containsUpperCase(char);
    const isLowerCaseLetter = containsLowerCase(char);
    const isAlphanumeric = isDigit || isUpperCaseLetter || isLowerCaseLetter;
    if (!isAlphanumeric) {
      doesContainNonAlphanumeric = true;
    }
  }

  return doesContainNonAlphanumeric;
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
  for (let i = 0; i <= 15; i++) {
    return str.slice(0, 8) + "...";
  }
};

function truncate(str) {
  // If string is less than 15 characters, return it unchanged
  if (str.length < 15) {
    return str;
  }

  // If equal to or longer than 15 chars, truncate it to the first 8 characters + '...'
  else {
    let output = "";
    for (let i = 0; i < 8; i++) {
      output += str[i];
    }
    output += "...";
    return output;
  }
}

function isValidPassword(str) {
  const doesContainUpperCase = containsUpperCase(str);
  const doesContainLowerCase = containsLowerCase(str);
  const doesContainDigit = containsDigit(str);
  const doesContainNonAlphanumeric = containsNonAlphanumeric(str);
  const doesContainSpace = containsSpace(str);

  const isValid =
    doesContainUpperCase &&
    doesContainLowerCase &&
    doesContainDigit &&
    doesContainNonAlphanumeric &&
    !doesContainSpace;
  return isValid;
}

function isValidPasswordAlternate(str) {
  return (
    containsUpperCase(str) &&
    containsLowerCase(str) &&
    containsDigit(str) &&
    containsNonAlphanumeric(str) &&
    !containsSpace(str)
  );
}

function onlyPunchy(titles) {
  // Apply the `exclaim` function to each item in the input array
  let exclaimedTitles = [];
  for (const title of titles) {
    const exclaimedTitle = exclaim(title);
    exclaimedTitles.push(exclaimedTitle);
  }

  // Filter out any titles that are >= 15 chars
  let punchyTitles = [];
  for (const title of exclaimedTitles) {
    if (title.length < 15) {
      punchyTitles.push(title);
    }
  }

  return punchyTitles;
}

// .map, .filter version
function onlyPunchyAlternate(titles) {
  const exclaimedTitles = titles.map(exclaim);
  const punchyTitles = exclaimedTitles.filter(
    (title) => title.length < 15
  );
  return punchyTitles;
}

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

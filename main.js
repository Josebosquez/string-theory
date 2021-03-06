/******************
 * YOUR CODE HERE *
 ******************/
function xify(str) {
  let newStr = "";
  for (i = 0; i < str.length; i++) {
    newStr = newStr + "x";
  }
  return newStr;
}


function yellingChars(str) {
  let newStr = "";
  for (i = 0; i < str.length; i++) {
    newStr += str[i] + "!";
  }
  return newStr;
}

function indexedChars(str) {
  let str1 = "";
  for (i = 0; i < str.length; i++) {
    str1 = str1 + i + str[i];
  }
  return str1
}

function numberedChars(str) {
  let str1 = "";
  for (i = 0; i < str.length; i++) {
    str1 += "(" + (i + 1) + ")" + str[i];
  }
  return str1;
}

function exclaim(str) {
  let str1 = "";
  for (i = 0; i < str.length; i++) {
    if (str[i] === "." || str[i] === "?") {
      str1 += "!";
    } else {
      str1 = str1 + str[i];
    }
  } return str1
}

function repeatIt(str, input) {
  let str1 = "";
  for (i = 0; i < input; i++) {
    str1 += str;
  }
  return str1;
}

function truncate(str) {
  let str1 = "";
  if (str.length > 18) {
  for (i = 0; i < 15; i++) {
      str1 += str[i]
    } return str1 + "..."
  } else {
    return str;
  }
}





/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}



module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}

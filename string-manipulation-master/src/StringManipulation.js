//count the number of Characters in the given String and return the value
const countCharacters = (str) => {
  return str.length
}
//count the number of vowels in the given String and return the value
const countVowels = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      count++;
    }
  }
  return count;
}

//Check the existence of the given String in the Specified String and return the value
const checkExistenceOfStr = (str, checkStr) => {
  return str.includes(checkStr);
}

//replace a word and return the value
const replaceWord = (str, wordToBeReplaced, replaceWord) => {
  return str.replace(wordToBeReplaced, replaceWord);
}

//convert the specified string into Title Case and return the value
const titleCaseConversion = (str) => {
  let words = str.split(" ");

  // Loop through each word and capitalize the first letter
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  // Join the array of words back into a string
  let result = words.join(" ");

  // Return the final result
  return result;
}

// find the largest word (in terms of length) in the specified string and return the value
const findLongestWord = (str) => {
  const words = str.split(" ");

  // initialize a variable to store the longest word
  let longestWord = "";

  // loop through each word in the array
  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    // if the current word is longer than the current longest word, update the longestWord variable
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  }

  // return the longest word
  return longestWord;
}


module.exports = {
  countCharacters,
  countVowels,
  checkExistenceOfStr,
  replaceWord,
  titleCaseConversion,
  findLongestWord
}
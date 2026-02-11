/**
 🧪 Exercise: Slugify a title

Input:

"React Native Performance Guide!"


Output:

"react-native-performance-guide"
 */

const slugify = (str) => {
  const words = str.split(" ");

  return words
    .map(
      (word, index) =>
        `${word.toLowerCase() + ((index + 1) % words.length === 0 ? "" : "-")}`,
    )
    .join(""); // I remembered afterwords I could just do join('-') but I went the hard way as always
};

console.log(slugify("React native Performance Guide"));

/*

Problems:

Doesn’t remove punctuation (!)

Multiple spaces break it

Could be simpler

Expected:

str
  .toLowerCase()
  .replace(/[^\w\s]/g, '')
  .trim()
  .replace(/\s+/g, '-')

*/

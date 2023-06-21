/*
Let us define a precedence string as follows:
"F>E" means that in the word, the letter "F" comes before the letter "E".

The objective of this test is to implement the find_the_word function.
When passed a list of precedences, the function will return the word associated to the input.
There are no duplicate letters in the word.

For example:
------------

findTheWord(["G>W","W>F"]) should return GWF
findTheWord(["E>R","R>S","S>O","O>N","P>E"]) should return PERSON

*/

// const letters = ["E>R","R>S","S>O","O>N","P>E"]
// const letters = ["G>W", "W>F"];

function findTheWord(letters) {
  // TODO:: Do your stuff here...
  let precedences = {};

  for (let letter of letters) {
    const [first, second] = letter.split(">");
    precedences[first] = second;
  }

  let start = Object.keys(precedences).find(
    (key) => !Object.values(precedences).includes(key)
  );

  let current = start;
  let word = [start];
  while (precedences.hasOwnProperty(current)) {
    current = precedences[current];
    word.push(current);
  }

  return(word.join(""));
}

// console.log(findTheWord(letters))

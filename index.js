const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased(){
  return tutorials.map((title)=> {
  //create newTitle based upon title
  const words = title.split(" ")
  // [what, is, NaN , and how Can we Check for it]
  const capitalizedWords = words.map((word) => {
    let newWord = word[0].toUpperCase()
    newWord += word.slice(1)
    return newWord
  })
  const newTitle = capitalizedWords.join(" ")
  return newTitle
})

}


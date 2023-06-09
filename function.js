//1. Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
  const maxOfThree = (num1, num2, num3) => {
    if (num1 >= num2 && num1 >= num3){
     return num1
    }else if (num2 >= num1 && num2 >= num3){
      return num2
    }else{
      return num3
    }
 }
 console.log(maxOfThree(7,8,10))
 console.log(maxOfThree(24,8,10))
 console.log(maxOfThree(43,56,20))
 console.log(maxOfThree(3, 3, 3))
 console.log(maxOfThree(3, 4, 4))
 
 
  


// 2.Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.
  const CharAVowelthat= (letter) => {
    const vowels = 'aeiou'
    if (vowels.includes(letter)){
      return true;
    }else{
      return false
    } 

  }
  console.log(CharAVowelthat('i'))
  console.log(CharAVowelthat('c'))
  
  

    // let vowels = "aeiou"
    // let letter = "i"
    // console.log(vowels.includes(letter));

    // let vowelsArray = ['a', 'e', 'i', 'o', 'u']
    // let alphab = 'z'
    // console.log(vowelsArray.includes(alphab));


// 3.Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.
const sumArraythat = (arrayOfNums) => {
  let sum = 0;
  for(let i=0; i < arrayOfNums.length; i++) {
  sum = sum + arrayOfNums[i]
  
 }
 return sum
}
 console.log(sumArraythat([2,4,5,6,7]))
 console.log(sumArraythat([2,2]))
 console.log(sumArraythat([2,4,5]))


//4. Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.
const multiplyArray = (arrayOfNums) =>{
 
  let product = 1 
  for(let i=0; i < arrayOfNums.length; i++) {
   product = product * arrayOfNums[i]
   
    }
    return product

}
  console.log(multiplyArray([2, 4, 5]))
  console.log(multiplyArray([3, 8, 12]))



//5.Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called.
const numArgs = (numOfArgs) => {

}


//6. Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".
const reverseString = (string) => {
  return string.split('').reverse().join('')

}
 console.log(reverseString('rockStar'))
 console.log(reverseString('tope'))
 console.log(reverseString('jenna'))

// let string = 'rockStar'
// console.log(Array.from(string))
// console.log(string.split('').reverse().join(''))


//7.Define a function, as a function expression, longestStringInArraythat takes an array of strings as an argument and returns the length of the longest string.
const longestStringInArray = (arrayOfstrings) =>{
  let lengths = []

  arrayOfstrings.forEach((string)=>{
    lengths.push(string.length)
  })
  return Math.max(...lengths)
  
  }
   console.log(longestStringInArray(['yalla', 'hola', 'Hernandez']))
   console.log(longestStringInArray(['hello', 'Amigos', 'amos']))





//8. Define a function, as a function declaration, stringsLongerThanthat takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].
const stringsLongerThan = (arrayOfstrings, number) => {
  
   let longerStrings = []

  arrayOfstrings.forEach((string)=> {
    if (string.length > number) {
      longerStrings.push(string)
    }
   }) 

   return longerStrings

}
 console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3))

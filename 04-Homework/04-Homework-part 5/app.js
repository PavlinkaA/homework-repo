
arrayOfNumbers = [3,5,6,8,11]

function sumOfNumbers(arrayOfNumbers){
    let minimumNumberOfArray = arrayOfNumbers[0]
    let maximumNumberOfArray = arrayOfNumbers[0]
  
for(let index = 0; index < arrayOfNumbers.length; index++){

    if(typeof arrayOfNumbers[index] === "number"){
              
      if(minimumNumberOfArray > arrayOfNumbers[index]){
        minimumNumberOfArray = arrayOfNumbers[index]
      }     
      else if(maximumNumberOfArray < arrayOfNumbers[index]){
        maximumNumberOfArray = arrayOfNumbers[index]
      }

    }
 }
 return `Minum is: ${minimumNumberOfArray}, maximum is: ${maximumNumberOfArray}, result is: ${minimumNumberOfArray + maximumNumberOfArray}`

}
let minMaxSum = sumOfNumbers([3,5,6,8,11]);
console.log(minMaxSum);


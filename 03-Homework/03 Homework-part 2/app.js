function calculateHumanToDogAge (age) { 
    let result = age * 7;
    return result;
    }
let age = prompt("Human age");
let parseIntResult = parseInt (age);
let humanToDog = calculateHumanToDogAge (age);
console.log("Converted human to dog age:",humanToDog);



function calculateDogToHumanAge(dogAge) {
    let result = dogAge / 7;
    return result;

}
let dogAge = prompt("Dog age");
let parseIntDogAge = parseInt(dogAge);
let dogToHuman = calculateDogToHumanAge(dogAge);
console.log("Converted dog to human age:",dogToHuman);

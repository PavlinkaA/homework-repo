function twoArrays(firstName, lastName){

    let fullySentence = ""
  
    for(let index = 0; index < firstName.length; index++){
      fullySentence += `1.${firstName[index]} ${lastName[index]} `
    }
  
    return [fullySentence ]
  
  }
  let wordsFirstName = ["Ana", "Marija"]
  let wordsLastName = ["Popova", "Trajkova"]
  
  let newArray = twoArrays(wordsFirstName,wordsLastName)
  console.log(newArray);
  
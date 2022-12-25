function oneSentance(arrayOne){

    let fullySentence = ""
  
    for(let index = 0; index < arrayOne.length; index++){
      fullySentence += `${arrayOne[index]}`
    }
  
    return [fullySentence]
  
  }
  let wordsArrayOne = ["Hello",",", "my"," ","name"," ","is"," ","Pavlinka."]
 let full=oneSentance(wordsArrayOne);
 console.log(full);
  

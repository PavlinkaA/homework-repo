
function tellStory(storyDetails){
    let [name, mood, activity] = storyDetails;
    let story = `I am ${name}. ${name} is  ${activity} how to code late at night. ${name} is ${mood} at the moment.`;
    return story;
}

console.log(tellStory(["Pavlinka", "sleepy", "learning"]));
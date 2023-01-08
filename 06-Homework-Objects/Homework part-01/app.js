const animal = {
    name: "Felix",
    kind: "Labrador",
    speak: function (value) {
        console.log("Animal says: " + value);
    }
}
console.log(animal);
animal.speak("Hello");
const speakInput = document.querySelector("#speakInput");
const speakBtn = document.querySelector("#speakBtn");
speakBtn.addEventListener('click', function () {
animal.speak(speakInput.value)
}
);



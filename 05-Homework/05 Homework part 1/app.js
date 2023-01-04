const paragraphFirstEl = document.querySelector(".paragraph");
console.log(paragraphFirstEl);

paragraphFirstEl.textContent = "This exercise was easy to solve."
console.log(paragraphFirstEl.textContent);

const paragraphSecondEl = document.querySelector(".paragraph-second");
console.log(paragraphSecondEl);
paragraphSecondEl.textContent = "This exercise was intersting."
console.log(paragraphSecondEl.textContent);

const mainHeadingEl = document.getElementById("mainHeading");
mainHeadingEl.textContent = "This is my first Exercise that I solve with DOM"
console.log(mainHeadingEl.textContent);

 const divEl = document.getElementsByTagName("div");
 console.log(divEl[2]);
const divEl2h1 = divEl[2].getElementsByTagName("h1");
console.log(divEl2h1[0]);
divEl2h1[0].textContent = "This h1 element was changed."
console.log(divEl2h1[0].textContent);

const divEl2h3 = divEl[2].getElementsByTagName("h3");
console.log(divEl2h3[0]);
divEl2h3[0].textContent = "And this h3 element was changed."
console.log(divEl2h3[0].textContent);

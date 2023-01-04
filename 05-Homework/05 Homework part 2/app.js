function arrayAndSum(numArray) {
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    let numbers = numArray[i];
    sum += numbers;
  }
  return sum;
}
const array_of_numbers = [1, 2, 8, 10, 2];
console.log(arrayAndSum(array_of_numbers));



const bodyEl = document.querySelector("body");
const ulEl = document.createElement("ul");
bodyEl.appendChild(ulEl)
const getUlEl = document.querySelector("ul");

for (let i = 0; i < array_of_numbers.length; i++) {
  const liEl = document.createElement("li");
  liEl.innerHTML = array_of_numbers[i];
  getUlEl.append(liEl)
}

const spanSumEl = document.createElement("span");
spanSumEl.innerHTML = `Sum: ${arrayAndSum(array_of_numbers)}`;
getUlEl.append(spanSumEl)

const spanFullFormulaEl = document.createElement("span");
for (let i = 0; i < array_of_numbers.length; i++) {
  console.log("index:" + i)
  if (i === array_of_numbers.length - 1) {
    spanFullFormulaEl.innerHTML += `${array_of_numbers[i]} = ${arrayAndSum(array_of_numbers)}`
  } else {
    spanFullFormulaEl.innerHTML += `${array_of_numbers[i]}+`
  }
}
bodyEl.appendChild(spanFullFormulaEl);


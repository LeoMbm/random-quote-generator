console.log("foo");

let btn = document.querySelector("#btn");
let number = document.querySelector("#number");
let index = 0;

btn.addEventListener("click", addOne);

function addOne() {
  number.innerHTML = index++;
}

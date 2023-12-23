console.log("inside script");
var element = document.getElementById("raising-nav-click");
// console.log(element.classList);
// element.classList.add("active");
document.getElementById("raising-nav-click").onclick = myFunc;

function myFunc() {
  console.log("inside func");
  element.classList.add("active");
}

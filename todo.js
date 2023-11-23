var input = document.querySelector("#txt-input");
var btn = document.querySelector(".btn-add");
var ul = document.querySelector(".add-list");



function add() {
 
  if (input.value === "") {
    alert("Write Something there!!!");
  } else {
    
    const li = document.createElement("li");

   

    li.innerHTML = `<p>${input.value}</p>` + `<button class="btn btn-line">&#10006;</button>`;

    ul.appendChild(li);

    
    const lisner = document.querySelector("li");
  }
  
  input.value = "";
}
ul.addEventListener( "click",function (p) {
    if (p.target.tagName === "LI") {
      p.target.classList.toggle("check-li");
      p.target.childNodes[0].classList.toggle("check");
      console.log(p.target)
      
    } else if (p.target.tagName === "BUTTON") {
      p.target.parentElement.remove();
    }
  },
  false
);

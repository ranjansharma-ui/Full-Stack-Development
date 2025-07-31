let btns = document.querySelectorAll("button");

for (btn of btns) {
  // btn.onclick = sayHello;
  // btn.onclick = sayName;

  // btn.addEventListener("click", sayHello)
  // btn.addEventListener("click", sayName)
  btn.addEventListener("ondblclick", function (){
    console.log("clicked!")
  });


}

function sayHello() {
  alert("hello");
}

function sayName(){
  alert("Ranjan")
}

let p = document.querySelector("p");

p.addEventListener("click" ,function () {
  console.log("Para clicked");
  
})

let box = document.querySelector('.box');
box.addEventListener("mouseenter", function(){
  console.log("Mouse hoved!");
  
})

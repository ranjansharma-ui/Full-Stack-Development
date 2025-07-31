let btn = document.querySelector("button");

let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);
    inp.value = "";

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn)
});

let delBtns = document.querySelectorAll(".delete");


ul.addEventListener("click", function (event) {
    // console.dir(event.target.parentElement)
    if (event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted")
    }
})

// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function () {
//         console.log("Element Deleted");
//         let par = this.parentElement;
//         console.log(par)
//         par.remove();
//     })
// }

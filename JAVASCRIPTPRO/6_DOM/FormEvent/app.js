let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault()
    // alert("form submitted!")

    // let inp = document.querySelector("input");
    // console.dir(inp)
    // // console.log(inp.innerText) not work for userinput
    // console.log(inp.value)


    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass");
    //OR
    console.dir(form)
    let user = this.elements[0]; //form.elements
    let pass = this.elements[1];

    console.log(user.value)
    console.log(pass.value)

    alert(`Hi ${user.value}, your password is set to ${pass.value}`)
})
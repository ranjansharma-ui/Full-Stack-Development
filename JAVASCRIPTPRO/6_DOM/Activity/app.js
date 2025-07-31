
let btn = document.querySelector('button');


btn.addEventListener('click', function () {
    let h3 = document.querySelector('h3');
    let randomColor = changeColor();
    h3.innerText = randomColor;

    let box = document.querySelector('div')
    box.style.backgroundColor = randomColor;
    console.log("Color updated!")
    
    
})

function changeColor() {

    let r = Math.floor(Math.random()*255)
    let g = Math.floor(Math.random()*255)
    let b = Math.floor(Math.random()*255)

    let color = `rgb(${r},${g},${b})`;

    return color;
}

/**
 * Await Keyword : pauses the execution of its surrounding async function until the promise is settled(resolved or rejected)
 * 
 * Await means waithing
 */

function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1000)
    })
}

async function demo() {
    await getNum();
    await getNum();
    await getNum();
}


// to improve changecolor method
h1 = document.querySelector("h1")

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if (num > 3) {
                reject("promise rejected!")
            }
            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve("color changed!");
        }, delay);
    });
}

async function change() {
    /// Handling Rejections with Await and try-catch
    try {
        await changeColor("red", 1000);
        await changeColor("orange", 1000);
        await changeColor("green", 1000);
        await changeColor("blue", 1000);

    } catch (err) {
        console.log("error caught");
        console.log(err);
    }


    let a = 5;
    console.log(a);
    console.log("number : ", a + 6);


}



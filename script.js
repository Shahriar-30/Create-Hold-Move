// function problem(str1, str2) {
//     let string1 = str1.split("").sort().join('')
//     let string2 = str2.split("").sort().join('')

//     if (string1 == string2) {
//         console.log('yes');
//     } else {
//         console.log('no');
//     }
// }


// const str1 = 'eat';
// const str2 = 'kea';
// problem(str1, str2);

// =================================

// function even() {
//     for(let i = 1; i <= 10; i++){
//         let slove = i % 2
//         if(slove == 0){
//             console.log(i);
//         }
//     }    
// }
// even()

// =================================


// function odd() {
//     for(let i = 1; i <= 10; i++){
//         let slove = i % 2
//         if(slove !== 0){
//             console.log(i);
//         }
//     }    
// }
// odd()

// =================================


// function print(n) {
//     for(let i = 1; i <= 10; i++){
//         console.log(
//             `${n} X ${i} = ${n * i}` 
//         );
//     }
// }

// print(2)

// =================================

// ================================================wlfjweofwjhfoah=================
// let box = document.querySelector('.box2'); // Make sure to replace 'yourBoxId' with the actual ID of your box

// let getElement = (e) => {
//     let box = e.target
//     makeIt(box)
// }
// window.addEventListener('mousedown', getElement)

// let removeElement = () => {
//     window.removeEventListener('mouseup', getElement)
// }
// window.addEventListener('mouseup', removeElement)



function randomColorCode() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    var colorCode = "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue);

    return colorCode;
}

function componentToHex(component) {
    var hex = component.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}






let ele = document.querySelectorAll('.dd');

ele.forEach((ele) => {
    makeDraggable(ele);
});

let btn = document.querySelector('.btn');
let container = document.querySelector('.container');

btn.addEventListener('click', () => {
    var randomColor = randomColorCode();
    let html = document.createElement('div');
    html.classList.add('dd');
    html.classList.add('box');
    html.style.backgroundColor = randomColor;
    container.appendChild(html);
    makeDraggable(html);
});

function makeDraggable(element) {
    let mouseDown = () => {
        let mouseMove = (e) => {
            let x = e.clientX - 100 + 'px';
            let y = e.clientY - 100 + 'px';
            element.style.left = x;
            element.style.top = y;
        }
        element.addEventListener('mousemove', mouseMove);

        let mouseUp = () => {
            element.removeEventListener('mousemove', mouseMove);
        }
        element.addEventListener('mouseup', mouseUp);
    }

    element.addEventListener('mousedown', mouseDown);
}



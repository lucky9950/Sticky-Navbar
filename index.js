const navbarE1 = document.querySelector(".navbar");

const bottemContainerE1 = document.querySelector(".bottom-container");

setInterval(()=>{
    bottemContainerE1.style.backgroundColor = 'red'
},1000)



console.log(navbarE1.offsetHeight);
console.log(bottemContainerE1.offsetTop);

window.addEventListener("scroll", () => {

    console.log(window.scrollY);

    if (window.scrollY > 100 && window.scrollY < 199) {

        navbarE1.classList.add("red");
        navbarE1.classList.remove("orange");
        navbarE1.classList.remove("yellow");
        navbarE1.classList.remove("green");
        navbarE1.classList.remove("blue");
        navbarE1.classList.remove("indigo");
        navbarE1.classList.remove("violet");
        console.log('red');

    } 
    if(window.scrollY > 200 && window.scrollY < 299) {

        navbarE1.classList.remove("red");
        navbarE1.classList.add("orange");
        navbarE1.classList.remove("yellow");
        navbarE1.classList.remove("green");
        navbarE1.classList.remove("blue");
        navbarE1.classList.remove("indigo");
        navbarE1.classList.remove("violet");
        console.log('orange');


    }
    if(window.scrollY > 300 && window.scrollY < 399) {
        navbarE1.classList.remove("red");
        navbarE1.classList.remove("orange");
        navbarE1.classList.add("yellow");
        navbarE1.classList.remove("green");
        navbarE1.classList.remove("blue");
        navbarE1.classList.remove("indigo");
        navbarE1.classList.remove("violet");
        console.log('yellow');


    }
    if(window.scrollY > 400 && window.scrollY < 499) {

        navbarE1.classList.remove("red");
        navbarE1.classList.remove("orange");
        navbarE1.classList.remove("yellow");
        navbarE1.classList.add("green");
        navbarE1.classList.remove("blue");
        navbarE1.classList.remove("indigo");
        navbarE1.classList.remove("violet");
        console.log('green');


    } 
    if(window.scrollY > 500 && window.scrollY < 599) {

        navbarE1.classList.remove("red");
        navbarE1.classList.remove("orange");
        navbarE1.classList.remove("yellow");
        navbarE1.classList.remove("green");
        navbarE1.classList.add("blue");
        navbarE1.classList.remove("indigo");
        navbarE1.classList.remove("violet");
        console.log('blue');


    }
    if(window.scrollY > 600 && window.scrollY < 699) {

        navbarE1.classList.remove("red");
        navbarE1.classList.remove("orange");
        navbarE1.classList.remove("yellow");
        navbarE1.classList.remove("green");
        navbarE1.classList.remove("blue");
        navbarE1.classList.add("indigo");
        navbarE1.classList.remove("violet");
        console.log('indigo');


    } 
    if(window.scrollY > 700 && window.scrollY < 799) {

        navbarE1.classList.remove("red");
        navbarE1.classList.remove("orange");
        navbarE1.classList.remove("yellow");
        navbarE1.classList.remove("green");
        navbarE1.classList.remove("blue");
        navbarE1.classList.remove("indigo");
        navbarE1.classList.add("violet");
        console.log('violet');


    } 
    if(window.scrollY < 100 || window.scrollY > 800){
        navbarE1.classList.remove("red");
        navbarE1.classList.remove("orange");
        navbarE1.classList.remove("yellow");
        navbarE1.classList.remove("green");
        navbarE1.classList.remove("blue");
        navbarE1.classList.remove("indigo");
        navbarE1.classList.remove("violet");
        console.log('removed all or nothing toggleed');
    }
})

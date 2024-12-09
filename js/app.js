const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {

    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}

function industry() {

    document.querySelector(".tele1").style.cssText = "display:block;";
    document.querySelector(".heal1").style.cssText = "display:block;";
    document.querySelector(".ener1").style.cssText = "display:block;";
    document.querySelector(".law-en1").style.cssText = "display:block;";
    document.querySelector(".industry").style.cssText = "display:none;";
    document.querySelector(".industry1").style.cssText = "display:block;";
}
function industry1() {

    document.querySelector(".tele1").style.cssText = "display:none;";
    document.querySelector(".heal1").style.cssText = "display:none;";
    document.querySelector(".ener1").style.cssText = "display:none;";
    document.querySelector(".law-en1").style.cssText = "display:none;";
    document.querySelector(".industry").style.cssText = "display:block;";
    document.querySelector(".industry1").style.cssText = "display:none;";
}

function show() {
    document.querySelector(".dropdown-menu").style.cssText = "display:block;";
}

document.querySelector('.dropdown-menu').addEventListener('click', function(event) {
    event.stopPropagation();
 });
function show1() {
    document.querySelector(".drop1").style.cssText = "display:block;";
}
function show2() {
    document.querySelector(".drop1").style.cssText = "display:none;";
    document.querySelector(".drop2").style.cssText = "display:block;";
}

function show3() {
    document.querySelector(".drop1").style.cssText = "display:none;";
    document.querySelector(".drop2").style.cssText = "display:none;";
    document.querySelector(".drop3").style.cssText = "display:block;";
}
function hide1() {
    document.querySelector(".drop1").style.cssText = "display:none;";
}

function hide2() {
    document.querySelector(".drop2").style.cssText = "display:none;";
}

function hide3() {
    document.querySelector(".drop3").style.cssText = "display:none;";
}
function drop1() {
    document.querySelector(".dropdown-menu1").style.cssText = "display:block;";
    document.querySelector(".dropdown-toggle1").style.cssText = "display:none;";
    document.querySelector(".dropdown-toggle2").style.cssText = "display:block;";
}
function drop2() {
    document.querySelector(".dropdown-menu1").style.cssText = "display:none;";
    document.querySelector(".dropdown-toggle1").style.cssText = "display:block;";
    document.querySelector(".dropdown-toggle2").style.cssText = "display:none;";
}
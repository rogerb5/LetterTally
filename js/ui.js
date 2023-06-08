"use strict";

const fontTag = document.querySelector(`select[name="typeface"]`);
const radioButtons = document.querySelectorAll("input[type='radio']");
const mainTag = document.querySelector('main');

/*
    Takes the brower's event property
    as a parameter and changes the font family
    according to the target value found in the dropdown menu
*/
function setFontFamily(event) {
    mainTag.style.fontFamily = event.target.value;
}

/*
    Loops over all radio buttons
    and for each of them add the change event listener
    then change the background color of each radio button target value
*/
function setThemeColor() {
    radioButtons.forEach(btn => {
        btn.addEventListener("change", (event) => {
            mainTag.style.backgroundColor = event.target.style.backgroundColor;
        });
    });
}

//event listeners
fontTag.addEventListener("input", (event) => {
    setFontFamily(event);
})

// run on load
setThemeColor();
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

function setThemeColor() {
    radioButtons.forEach(btn => {

    })
}

//event listerners
fontTag.addEventListener("input", (event) => {
    setFontFamily(event);
})
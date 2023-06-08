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
    and adds the "change" event listener to each of them 
    then sets the background color from a radio button target value
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
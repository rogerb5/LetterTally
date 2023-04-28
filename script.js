"use strict";

const submitBtn = document.querySelector("button.sbmt");
const inputString = document.querySelector("input.name");
const wordContainer = document.querySelector("section.word-container")


const ALPHABETIC_SIZE = 26;
const aDecimalValue = 97;

/*
    Takes a string as a parameter
    and builds a count of alphabetic letters. The tally
    is stored inside an array of 26 placeholders while ignoring
    non-alphabetic letters, and case of letter.

    e.g. "abc"
    [1, 1, 1, 0, 0 , 0, .....] size 26
*/
function letterCounter(word) {
    const characterArr = new Array(26).fill(0);
    for (let index = 0; index < word.length; index++) {
        if (!isLetter(word.charAt(index))) {
            throw error('every character is not a letter!');
        } else {
            const charCode = word.toLowerCase().charCodeAt(index);
            if (charCode >= aDecimalValue && charCode < aDecimalValue + ALPHABETIC_SIZE) {
                characterArr[charCode - aDecimalValue]++;
            }
        }
    }
    const result = inventoryToString(characterArr);
    console.log(characterArr);
    console.log(result);
    return characterArr;
}

/*
    Takes an array as a parameter
    Returns a string tally of letters in sorted order
    Eg: 3 a's and 2 b's 2 c's should return
    "aaabbcc"
*/
function inventoryToString(characterArr) {
    let result = '';
    for (let i = 0; i < characterArr.length; i++) {
        const count = characterArr[i];
        for (let j = 0; j < count; j++) {
            result += String.fromCharCode(i + aDecimalValue);
        }
    }
    return result;
}

/*
    Take's a character as parameter
    and returns a boolean if a character is an alphabetic letter
    from a-z, A-Z, . and ' ' white space using REGEX
*/
function isLetter(char) {
    return /^[a-zA-Z .]$/.test(char);
}

function createDiv(inputString) {
    const article = document.createElement("article");
    const result = inventoryToString(inputString);
    const inString = document.querySelector("input.name");

    article.innerHTML = `
        <article class="article">
            <div class="info-div">
                <p class="word-p">${"Array Inventory: [" + inputString + "]"}</p>
            </div>
            <div class="info-div">
                <p class="word-p-2">${"Letter Tally: " + result}</p>
            </div>
            <div class="info-div">
                <p class="word-p">${"Original input: " + inString.value}</p>
            </div>
        </article>
    `;
    wordContainer.append(article);
}

// event listener's
submitBtn.addEventListener("click", (event) => {
    let letterInventory = letterCounter(inputString.value);
    if (inputString.value === '') {
        alert('please enter a word');
        return;
    }
    createDiv(letterInventory);

    inputString.value = "";
    inputString.focus();
    event.preventDefault();
})
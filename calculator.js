// global variables to store the number
let number;

// Reference to nodes in the DOM 
const btnZero = document.querySelector('.zero');
const btnDot = document.querySelector('.dot');
const btnEqual = document.querySelector('.equal');
const btnOne = document.querySelector('.one');
const btnTwo = document.querySelector('.two');
const btnThree = document.querySelector('.three');
const btnPlus = document.querySelector('.plus');
const btnFour = document.querySelector('.four');
const btnFive = document.querySelector('.five');
const btnSix = document.querySelector('.six');
const btnMinus = document.querySelector('.minus');
const btnSeven = document.querySelector('.seven');
const btnEight = document.querySelector('.eight');
const btnNine = document.querySelector('.nine');
const btnMultiply = document.querySelector('.multiply');
const btnClear = document.querySelector('.clear');
const btnDelete = document.querySelector('.delete');
const btnRemainder = document.querySelector('.remainder');
const btnDivide = document.querySelector('.divide');

const operation = document.querySelector('.operation');
const result = document.querySelector('.result');

// numbers
btnZero.addEventListener('click', (event) => {
    number = event.target.id;
    displayContent(number);
});

btnOne.addEventListener('click', (event) => {
    number = event.target.id;
    displayContent(number);
});
btnTwo.addEventListener('click', (event) => {
    number = event.target.id;
    displayContent(number);
});
btnThree.addEventListener('click', (event) => {
    number = event.target.id;
    displayContent(number);
});
btnFour.addEventListener('click', (event) => {
    number = event.target.id;
    displayContent(number);
});
btnFive.addEventListener('click', (event) => {
    number = event.target.id;
    displayContent(number);
});
btnSix.addEventListener('click', (event) => {
    number = event.target.id;
    displayContent(number);
});
btnSeven.addEventListener('click', (event) => {
    number = event.target.id;
    displayContent(number);
});
btnEight.addEventListener('click', (event) => {
    number = event.target.id;
    displayContent(number);
});
btnNine.addEventListener('click', (event) => {
    number = event.target.id;
    displayContent(number);
});
// operations 
btnDot.addEventListener('click', (event) => {
    operator = event.target.id;
    displayContent(operator);
});
btnPlus.addEventListener('click', (event) => {
    operator = event.target.id;
    displayContent(operator);
});
btnMinus.addEventListener('click', (event) => {
    operator = event.target.id;
    displayContent(operator);
});
btnMultiply.addEventListener('click', (event) => {
    operator = event.target.id;
    displayContent(operator);
});
btnDivide.addEventListener('click', (event) => {
    operator = event.target.id;
    displayContent(operator);
});
btnRemainder.addEventListener('click', (event) => {
    operator = event.target.id;
    displayContent(operator);
});

/*
btnEqual.addEventListener('click', (event) => {
    operator = event.target.id;
    displayContent(operator);
});
btnClear.addEventListener('click', (event) => {
    operator = event.target.id;
    displayContent(operator);
});
btnDelete.addEventListener('click', (event) => {
    operator = event.target.id;
    displayContent(operator);
});
*/

function displayContent(btnClicked)
{
    operation.innerHTML += btnClicked;
}

function add(x, y) 
{
    return x + y;
}

function subtract(x, y)
{
    return x - y;
}

function multiply(x, y)
{
    return x * y;
}

function divide(x, y)
{
    return x / y;
}

function remainder(x, y) 
{
    return x % y;
}

function operate(x, y, operator) 
{
    switch(operator) 
    {
        case "+":
            add(x, y);
            break;
        case "-":
            subtract(x, y);
            break;
        case "x":
            multiply(x, y);
            break;
        case "/":
            divide(x, y);
            break;
        case "%":
            remainder(x, y);
            break;
    }
        
}

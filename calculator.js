// global variables to store the number
let firstNumber = 0;
let secondNumber = 0; 
let currentOperator = '';
let solution = 0;
let resetResult = false;

// Reference to all number buttons 
const btnNumber = document.querySelectorAll('.number');

// Reference to all the operator buttons 
const btnOperator = document.querySelectorAll('.operator');

// Reference to nodes in the DOM 
const btnDot = document.querySelector('.dot');
const btnEqual = document.querySelector('.equals');
const btnClear = document.querySelector('.clear');
const btnDelete = document.querySelector('.delete');
const operation = document.querySelector('.operation');
const result = document.querySelector('.result');

// Adding event listener for the number buttons 
btnNumber.forEach(button => {
    button.addEventListener('click', (event) => {
        let number = event.target.textContent; 
        displayContent(number);
    });
});

// Adding event listener for the operator buttons 
btnOperator.forEach(button => {
    button.addEventListener('click', (event) => {
        let operator = event.target.textContent;
        getOperator(operator);
    });
});

btnClear.addEventListener('click', clearDisplay);

btnEqual.addEventListener('click', operate);

/*
btnDot.addEventListener('click', (event) => {
    let dot = event.target.id;
    displayContent(dot);
});

btnDelete.addEventListener('click', (event) => {
    operator = event.target.id;
    displayContent(operator);
});
*/


function displayContent(btnClicked)
{   
    if (resetResult === true)
    {
        resetResultScreen();
    }
    result.textContent += btnClicked;
}

function getOperator(btnClicked) 
{
    firstNumber = parseInt(result.textContent);
    currentOperator = btnClicked;
    displayOperationScreen();
    resetResult = true;
}

function displayOperationScreen() 
{
    operation.textContent = `${firstNumber} ${currentOperator}`
}

function resetResultScreen()
{
    result.textContent = '';
    resetResult = false;
}

function displaySolution() 
{
    result.textContent = solution;
    operation.textContent = `${firstNumber} ${currentOperator} ${secondNumber}`;
    firstNumber = solution;
    resetResult = true; 
}

function clearDisplay()
{
    operation.textContent = '';
    result.textContent = '';
    firstNumber = 0;
    secondNumber = 0;
    currentOperator = '';
}

function operate() 
{
    secondNumber = parseInt(result.textContent);
    switch(currentOperator) 
    {
        case "+":
            add(firstNumber, secondNumber);
            break;
        case "-":
            subtract(firstNumber, secondNumber);
            break;
        case "x":
            multiply(firstNumber, secondNumber);
            break;
        case "/":
            divide(firstNumber, secondNumber);
            break;
        case "%":
            remainder(firstNumber, secondNumber);
            break;
    }
    displaySolution();
}

function add(x, y) 
{
    solution = x + y;
    
    return solution;
}

function subtract(x, y)
{
    solution = x - y;
   
    return solution;
}

function multiply(x, y)
{
    solution = x * y;
  
    return solution;
}

function divide(x, y)
{
    solution = x / y;

    return solution;
}

function remainder(x, y) 
{
    solution = x % y;

    return solution; 
}

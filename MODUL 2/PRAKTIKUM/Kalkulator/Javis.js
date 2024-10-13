let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(op) {
    if (currentInput === '') return;
    if (firstOperand !== '') {
        calculate();
    }
    firstOperand = currentInput;
    operator = op;
    currentInput = '';
}

function clearDisplay() {
    display.value = '';
    currentInput = '';
    firstOperand = '';
    operator = '';
}

function calculate() {
    if (currentInput === '' || firstOperand === '') return;
    let result;
    let secondOperand = currentInput;

    switch (operator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            if (secondOperand == '0') {
                alert("Cannot divide by zero!");
                return;
            }
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        case '%':
            result = parseFloat(firstOperand) % parseFloat(secondOperand);
            break;
        case '^':
            result = Math.pow(parseFloat(firstOperand), parseFloat(secondOperand));
            break;
        default:
            return;
    }
    display.value = result;
    currentInput = result;
    firstOperand = '';
    operator = '';
}

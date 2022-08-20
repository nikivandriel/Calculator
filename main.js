const calculator = document.querySelector('#calculator'); 
const myInput = calculator.querySelector('#keys');
const display = calculator.querySelector('#result');
const operatorDisplay = calculator.querySelector('#operator');

myInput.addEventListener('click', event => {
    if (!event.target.closest('button')) return

    const key = event.target;
    const keyValue = key.textContent;
    const displayValue = display.placeholder;
    const type = key.dataset.type;

    // if it is a number key
    if (type ==='number') {
        if (displayValue === '0') {
            display.placeholder = keyValue;
        } 
        // check if last input and current input is a dot  
        else if(displayValue.includes('.') && keyValue === '.') {
         return;   
        } 
        else if(calculator.dataset.previousKeyType === 'operator') {
            display.placeholder = keyValue;
        }
        else {
            display.placeholder = displayValue + keyValue;
        }
    }

    // if it is a operator key
    if (type === 'operator') {
        const currentActiveOperator = calculator.querySelector('[data-state="selected"]');
        if(currentActiveOperator) {
            currentActiveOperator.dataset.state = ''
        }
        key.dataset.state = 'selected';
        operatorDisplay.placeholder = keyValue,
        
        calculator.dataset.firstNumber = displayValue;
        calculator.dataset.operator = keyValue;
    };
    
    // if it is cancel
    if(type === 'cancel') {
        display.placeholder = '0';
        clearOperator()
    }
    
    // if it is equal
    if(type === 'equal') {
        // perform a calculation
        const firstNumber = calculator.dataset.firstNumber;  
        const secondNumber = displayValue;
        const operator = calculator.dataset.operator;
        display.placeholder = calculate(firstNumber, operator, secondNumber);
        clearOperator()

    }
    calculator.dataset.previousKeyType = type;
})

function calculate (firstNumber, operator, secondNumber) {

    let result = '';
    if(operator === '+') result = Number(firstNumber) + Number(secondNumber);
    if(operator === '-') result = Number(firstNumber) - Number(secondNumber);
    if(operator === 'x') result = Number(firstNumber) * Number(secondNumber);
    if(operator === '/') result = Number(firstNumber) / Number(secondNumber);

    return result.toFixed(10);
}

function clearOperator() {
    operatorDisplay.placeholder = '';
}
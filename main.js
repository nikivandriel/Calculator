const myInput = document.getElementById('result');
const myOperator = document.getElementById('operator');

function onClickNumber(clickedNumber) {
    console.log('a number is clicked', clickedNumber);
    myInput.value += clickedNumber; 
};

function onClickOperator(clickedOperator) {
    console.log('operator is clicked', clickedOperator);
    myOperator.value = clickedOperator;
}

function onClickCancel(clickedCancel) {
    console.log('cancel is clicked', clickedCancel);
    myInput.value = ' ';
}

function onClickEquals(clickedEquals) {
    console.log('equals is clicked', clickedEquals);
}


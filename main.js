const myInput = document.getElementById('result');
const myOperator = document.getElementById('operator'); 

function onClickNumber(clickedNumber) {
    console.log('Hello', clickedNumber);
    myInput.value += clickedNumber;
};

function onClickOperator(clickedOperator) {
    console.log('Hi', clickedOperator);
    myOperator.value = clickedOperator;
};

function onClickCancel(clickedCancel) {
    console.log('Hoi', clickedCancel);
    myInput.value = " ";
    myOperator.value = "";
};

function onClickEquals(clickedEquals) {
    console.log('Hallo', clickedEquals)
};

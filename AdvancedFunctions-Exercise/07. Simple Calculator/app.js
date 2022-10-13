function calculator() {
    let numberOne = null;
    let numberTwo = null;
    let result = null;

    return {
        init,
        add,
        subtract
    };

    function init(num1, num2, res) {
        numberOne = document.querySelector(num1);
        numberTwo = document.querySelector(num2);
        result = document.querySelector(res);
    }

    function add() {
        result.value = Number(numberOne.value) + Number(numberTwo.value);
    }

    function subtract() {
        result.value = Number(numberOne.value) - Number(numberTwo.value);
    }
}

const calculate = calculator ();

calculate.init ('#num1', '#num2', '#result');





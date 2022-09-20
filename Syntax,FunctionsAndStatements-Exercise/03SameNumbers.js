function sameNumbers(number){
    let numberAsString = number.toString();
    let firstNumber = numberAsString[0];
    let isFlag = true;
    let sum = 0;
    for (let i = 0; i < numberAsString.length; i++) {
        if(numberAsString[i] !== firstNumber){
            isFlag = false;
        }
        sum += Number(numberAsString[i]);
    }
    console.log(isFlag);
    console.log(sum);
}
sameNumbers(2222222);

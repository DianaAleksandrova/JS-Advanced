function cookingByNumbers(number, command1, command2, command3, command4, command5){

   number = coocking(number,command1);
   number = coocking(number,command2);
   number = coocking(number,command3);
   number = coocking(number,command4);
   number = coocking(number,command5);
   
    function coocking(currentNumber, command){
        switch(command){
            case "chop": currentNumber /= 2;
            console.log(currentNumber);
            break;
            case "dice": currentNumber = Math.sqrt(currentNumber);
            console.log(currentNumber);
            break;
            case "spice": currentNumber += 1;
            console.log(currentNumber);
            break;
            case "bake": currentNumber *= 3;
            console.log(currentNumber);
            break;
            case "fillet": currentNumber *= 0.8;
            console.log(currentNumber);
            break;
        }
        return currentNumber;
    }
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
function smallestTwoNumbers(array){
    array.sort((a, b) => a-b);
    let numbers = array.slice(0, 2);

    console.log(numbers.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5]);

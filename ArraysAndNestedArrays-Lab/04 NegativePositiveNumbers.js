function  negativePositiveNumbers(array){
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] >= 0){
            result.push(array[i]);
        }else {
            result.unshift(array[i]);
        }
    }
    console.log(result.join('\n'));
}

negativePositiveNumbers([7, -2, 8, 9]);
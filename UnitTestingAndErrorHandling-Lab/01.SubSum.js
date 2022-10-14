function subSum(array, startIndex, endIndex) {

    if(Array.isArray(array) == false) {
        return NaN;
    }

    if(startIndex < 0) {
        startIndex = 0;
    }

    if(endIndex > array.length - 1) {
        endIndex = array.length -1;
    }

    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += Number(array[i]);
    }
    return sum;
}

subSum([10, 20, 30, 40, 50, 60], 3, 300);
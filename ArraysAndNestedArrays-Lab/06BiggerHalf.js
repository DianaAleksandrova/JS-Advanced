function biggerHalf(array){

    array.sort((a, b) => a-b);
    let middle = Math.floor(array.length / 2);
    let result = array.slice(middle);

   return result;
}
biggerHalf([4, 7, 2, 5]);
function sortArray(array, type) {
    if(type === 'asc') {
        array.sort((a, b) => a - b);
    }else {
        array.sort((a, b) => b - a);
    }
    return array;

    // let method = {
    //     asc: (a, b) => a - b,
    //     desc: (a, b) => b - a
    // };
    // array.sort(method[type]);
    // return array;
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));
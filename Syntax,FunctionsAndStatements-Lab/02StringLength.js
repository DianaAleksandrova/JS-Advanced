function stringLength(arr1,arr2,arr3) {
    let sum = arr1.length + arr2.length + arr3.length;
    let average = Math.floor(sum / 3);
    console.log(sum);
    console.log(average);
}

stringLength('chocolate', 'ice cream', 'cake');
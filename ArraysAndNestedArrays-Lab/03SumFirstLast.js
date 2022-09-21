function sumFirstLast(array){
    return Number(array.pop()) + Number(array.shift());
}
let result = sumFirstLast(['20', '30', '40']);
console.log(result);
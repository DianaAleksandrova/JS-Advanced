function pieceOfPie(array, string1, string2){

    let startIndex = array.indexOf(string1);
    let endIndex = array.indexOf(string2);

    let result = array.slice(startIndex, endIndex + 1);
    return result;

}
 let result = pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie');

console.log(result);
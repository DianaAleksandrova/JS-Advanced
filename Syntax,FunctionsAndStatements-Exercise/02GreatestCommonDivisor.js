function solve(num1,num2){
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
    while(num2){
        let number = num2;
        num2 = num1 % number;
        num1 = number;
    }
    console.log(num1);
}
solve(15, 5);
solve(2154, 458);
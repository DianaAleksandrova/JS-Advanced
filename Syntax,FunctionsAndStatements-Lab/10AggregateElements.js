function aggregateElements(numbers) {

    console.log(aggragete(numbers, x => x));
    console.log(aggragete(numbers, x => 1 / x));
    console.log(aggragete(numbers, x => x.toString()));


    function aggragete(numbers,func){
        let result = numbers[0];

        for (let i = 1; i < numbers.length; i++) {
            result += func(numbers[i]); 
        }
        return result;
    }
}
aggregateElements([2, 4, 8, 16]);
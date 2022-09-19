function squareOfStars(input) {

    let inputType = typeof (input);
    let result = "";

    if (inputType === 'number') {
        for (let i = 0; i < input; i++) {
            for (let k = 0; k < input; k++) {
                result += "* ";
            }
            result += "\n";
        }
        console.log(result);
    } else {
        for (let i = 0; i < 5; i++) {
            result += "* ";
        }
        result += "\n";
        console.log(result.repeat(5));
    }
}
squareOfStars(8);
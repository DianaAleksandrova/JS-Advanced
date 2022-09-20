function validityChecker(x1, y1, x2, y2){
    let firstFormula = Math.sqrt(Math.pow(0 - x1, 2) + Math.pow(0 - y1, 2));
    let secondFormula = Math.sqrt(Math.pow(x2 - 0, 2) + Math.pow(y2 - 0, 2));
    let thirdFormula = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)); 

    if(firstFormula % 1 == 0){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if(secondFormula % 1 == 0){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if(thirdFormula % 1 == 0){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

validityChecker(2, 1, 1, 1);
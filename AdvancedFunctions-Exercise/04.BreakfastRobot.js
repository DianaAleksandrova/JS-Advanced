function breakfastRobot() {

    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let commands = {
        restock,
        prepare,
        report
    }

    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }

    return manager;

    function manager(input){
        let [command, element, quantity] = input.split(' ');
        let line = commands[command];
        return line(element, quantity);
    }

    function restock(element, quantity){
            stock[element] += Number(quantity);
            return `Success`;
    }

    function prepare(recipeAsString, quantity){
        quantity = Number(quantity);
        let recipe = Object.entries(recipes[recipeAsString]);
        recipe.forEach(element => element[1] *= quantity);
       
        for(let [element, required] of recipe) {
            if(stock[element] < required) {
                return `Error: not enough ${element} in stock`
            }
        }
        recipe.forEach(([element, required]) => stock[element] -= required);
       return `Success`;
    }

    function report() {
        return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
    }
}
let manager = breakfastRobot ();

console.log (manager ('restock carbohydrate 10'));
console.log (manager ('restock flavour 10'));
console.log (manager ('prepare apple 1'));
console.log (manager ('restock fat 10'));
console.log (manager ('prepare burger 1'));
console.log (manager ('report'));

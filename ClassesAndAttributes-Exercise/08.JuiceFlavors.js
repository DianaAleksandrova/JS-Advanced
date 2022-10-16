function juiceFlavors(array) {
    let juiceAmount = new Map();
    let juiceBottle = new Map();

    for (let index = 0; index < array.length; index++) {
        let [juiceName, amount] = array[index].split(' => ');
        amount = Number(amount);

        if(!juiceAmount.has(juiceName)) {
            juiceAmount.set(juiceName, 0);
        }

        let totalAmount = juiceAmount.get(juiceName) + amount;

        if(totalAmount >= 1000) {
        if(!juiceBottle.has(juiceName)) {
            juiceBottle.set(juiceName, 0);
        }
        let newBottles = Math.trunc(totalAmount / 1000);
        let totalBottles = juiceBottle.get(juiceName) + newBottles;
        juiceBottle.set(juiceName, totalBottles);
    }
    juiceAmount.set(juiceName, totalAmount % 1000);
    }

    return [...juiceBottle].map(([key, value]) => `${key} => ${value}`).join('\n');
}
console.log(juiceFlavors(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']))

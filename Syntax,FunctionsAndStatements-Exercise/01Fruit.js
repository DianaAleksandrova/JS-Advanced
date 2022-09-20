function fruit(type,weight,money){
    let weightInKilogram = weight / 1000;
    let totalMoney = weightInKilogram * money;
    console.log(`I need $${totalMoney.toFixed(2)} to buy ${weightInKilogram.toFixed(2)} kilograms ${type}.`);
}

fruit('orange', 2500, 1.80);
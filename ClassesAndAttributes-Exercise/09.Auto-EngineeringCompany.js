function company(array) {
    let brands = new Map();
   
    for (let element of array) {
        let tokens = element.split(" | ");
        let carBrand = tokens[0];
        let carModel = tokens[1];
        let producedCars = Number(tokens[2]);

        if (!brands.get(carBrand)) {
            brands.set(carBrand, new Map());
        }
        if (!brands.get(carBrand).get(carModel)) {
            brands.get(carBrand).set(carModel, 0);
        }

        brands.get(carBrand).set(carModel, brands.get(carBrand).get(carModel) + producedCars);
    }

    for (let [carBrand, modelCount] of brands) {
        console.log(carBrand);

        for (let [model, count] of modelCount) {
            console.log(`###${model} -> ${count}`);
        }
    }
}
company(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);
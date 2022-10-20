class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant (plantName, spaceRequired) {
        if(this.spaceAvailable < spaceRequired) {
            throw new Error('Not enough space in the garden.');
        }
        this.spaceAvailable -= spaceRequired;
        this.plants.push({
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        });
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        let plant = this.plants.find((p) => p.plantName == plantName); 
        if(plant === undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if(plant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`);
        }
        if(quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }
        plant.ripe = true;
        plant.quantity += quantity;

        if(quantity == 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        }else {
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }

    harvestPlant(plantName) {
        let plantIndex = this.plants.findIndex((p) => p.plantName === plantName);
        if(plantIndex === -1) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        let plant = this.plants[plantIndex];
        if(plant.ripe == false) {
            throw new Error (`The ${plantName} cannot be harvested before it is ripe.`);
        }
        this.plants.splice(plantIndex, 1); // remove plant

        this.storage.push({
            plantName,
            quantity: plant.quantity
        });
        this.spaceAvailable += plant.spaceRequired;

        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {

        let result = `The garden has ${this.spaceAvailable} free space left.\n`;
        let plantInGarden = this.plants.map(p => p.plantName).sort((a, b) => a.localeCompare(b));
        result += `"Plants in the garden: ${plantInGarden.join(', ')}\n`;
        result += 'Plants in storage: ';

        if(this.storage.length == 0) {
            result += 'The storage is empty.\n';
        } else {
            let storageList = this.storage.map(p => `${p.plantName} (${p.quantity})`);
             result += `${storageList.join(', ')}\n`;
        }
        return result;
    }
}
const myGarden = new Garden(250) 
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 100)); 
console.log(myGarden.addPlant('cucumber', 30)); 
console.log(myGarden.ripenPlant('apple', 10)); 
console.log(myGarden.ripenPlant('orange', 1)); 
console.log(myGarden.harvestPlant("apple"));
console.log(myGarden.harvestPlant("raspberry"));
console.log(myGarden.harvestPlant("olive"));
console.log(myGarden.generateReport());


function townPopulation(input){
    let townData = {};

    for(let data of input){
      let[name, population] = data.split(' <-> ');
      population = Number(population);

      if(townData[name] === undefined){
        townData[name] = population;
      }else{
        townData[name] += population;
      }
    }
    for(let town in townData){
        console.log(`${town} : ${townData[town]}`)
    }
   
}

townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);
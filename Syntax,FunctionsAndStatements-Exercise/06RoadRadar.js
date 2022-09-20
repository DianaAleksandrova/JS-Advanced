function roadRadar(number,area){
    let speed = Number(number);
    let limit = 0;
    let difference = 0;

    let isFlag = false;

    if(area === "motorway"){
        limit = 130;
        if (speed <= limit){
            isFlag = true;
        }else{
            difference = speed - limit;
        }
    }else if(area === "interstate"){
        limit = 90;
        if (speed <= limit){
            isFlag = true;
        }else{
            difference = speed - limit;
        }
    }else if(area === "city"){
        limit = 50;
        if (speed <= limit){
            isFlag = true;
        }else{
            difference = speed - limit;
        }
    }else if(area === "residential"){
        limit = 20;
        if (speed <= limit){
            isFlag = true;
        }else{
            difference = speed - limit;
        }
    }

    if(isFlag == true){
        console.log(`Driving ${speed} km/h in a ${limit} zone`)
    }else{
        if(difference <= 20){
            let status = "speeding";
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
        }else if(difference <= 40){
            let status = "excessive speeding";
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
        }else{
            let status = "reckless driving";
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
        }
    }
}
roadRadar(40, 'city');
function argumentInfo() {
    let params = Array.from(arguments);

    let types = {};

    for (const param of params) {
        let type = typeof param;
        console.log(`${type}: ${param}`);

        if(types[type] == undefined) {
            types[type] = 0;
        }
        types[type]++;
    }

    let result = Object.entries(types).sort((a, b) => b[1] - a[1]);
        
    for (let [type, count] of result) {
        console.log(`${type} = ${count}`);
    }
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); })
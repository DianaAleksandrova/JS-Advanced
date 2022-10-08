function generateReport() {
    let rows = document.querySelectorAll("tbody tr");
    let checkbox = document.querySelectorAll("thead tr th");
    let result = [];

    for (let i = 0; i < rows.length; i++) {
        let tableData = rows[i].cells;
        let obj = {};

        for (let j = 0; j < tableData.length; j++) {
            let headerInfo = checkbox[j].childNodes;

            if(headerInfo[1].checked === true) {
                obj[headerInfo[0].textContent.trim().toLocaleLowerCase()] = tableData[j].textContent
            }
            
        }
        result.push(obj);
    }
    let jsonResult = JSON.stringify(result);
    document.getElementById("output").textContent = jsonResult;

}
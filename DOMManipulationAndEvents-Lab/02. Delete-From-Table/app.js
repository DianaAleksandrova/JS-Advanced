function deleteByEmail() {
    let email = document.getElementsByName('email')[0].value;
    let rows = document.querySelectorAll('#customers td:nth-child(2');

    let isFound = false;

    for(let row of rows) {
        if(row.textContent === email) {
            row.parentElement.remove();
            isFound = true;
        }
    }
    let result = document.getElementById('result');

    result.textContent = isFound ? "Deleted." : "Not found.";
    email.textContent = '';
}
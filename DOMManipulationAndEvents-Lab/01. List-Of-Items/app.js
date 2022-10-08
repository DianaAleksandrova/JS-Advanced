function addItem() {
    let input = document.getElementById("newItemText");
    let newItemText = input.value;

    let list = document.getElementById("items");

    let liItem = document.createElement("li");

    liItem.textContent = newItemText;

    list.appendChild(liItem);
    input.value = "";
}
function solve() {
  let input = document.getElementById("text").value;
  let currentText = document.getElementById("naming-convention").value;

  let inputArray = input.split(" ");
  let result = "";

  switch(currentText) {
    case "Camel Case":
      inputArray.forEach((e, i) => {
        if( i === 0){
          return result += e.toLowerCase();
        }
        return result += e[0].toUpperCase() + e.substring(1).toLowerCase(); 
      });
      break;
      case "Pascal Case":
        inputArray.forEach((e, i) => {
          e = e.toLowerCase();
          result += e[0].toUpperCase() + e.substring(1);
        })
        break;
      default:
      result = "Error!"
      break;
  }

  document.getElementById("result").textContent = result;
}
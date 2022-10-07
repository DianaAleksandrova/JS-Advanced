function search() {
   let towns = Array.from(document.querySelectorAll("ul li"));
   let searchText = document.getElementById("searchText").value;
   let matches = 0;
   for(let town of towns){
      let text = town.textContent;

      if(text.includes(searchText)){
         town.style.textDecoration = "underline";
         town.style.frontWeight = "bold";
         matches++;
      }else{
         town.style.textDecoration = "none";
         town.style.frontWeight = "";
      }
   }
   document.getElementById("result").innerText = `${matches} matches found`;
}

function create(words) {

   for (let word of words) {

      let div = document.createElement('div');
      let p = document.createElement('p');
      p.innerText = word;
      p.style.display = 'none';
      div.appendChild(p);
      div.addEventListener('click', function(event) {
         if(event.target.nameNode === 'P'){
            return;
         }
         let p = event.target.children[0];
         p.style.display = 'block';
      });
      document.getElementById('content').appendChild(div);
   }
}
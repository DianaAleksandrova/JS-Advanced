function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let result = [];

   function onClick() {
      let input = JSON.parse(document.getElementById('inputs').children[1].value);
      let bestRestaurant = document.querySelector('#bestRestaurant p');
      let workers = document.querySelector('#workers p');

      for(let element of input) {
         let [restaurantName, workersList] = element.split(' - ');
         if(!result.find(r => r.restaurantName === restaurantName)){
            result.push({
               restaurantName,
               averageSalary: 0,
               bestSalary: 0,
               sumSalary: 0,
               workersList: []
            });
         }
            let currentRestaurant = result.find(r => r.restaurantName === restaurantName);
            workersList = workersList && workersList.split(', ');
            for(let currentWorker of workersList) {
               updateRestaurant(currentRestaurant, currentWorker);
            } 
      }
     
         let sortRestaurant = result.sort((a, b) => b.averageSalary - a.averageSalary)[0];
         bestRestaurant.textContent = 
         `Name: ${sortRestaurant.restaurantName} Average Salary: ${sortRestaurant.averageSalary.toFixed(2)} Best Salary: ${sortRestaurant.bestSalary.toFixed(2)}`;

         let sortWorkers = sortRestaurant.workersList.sort((a, b) => b.salary - a.salary);
         let print = '';
         for(let worker of sortWorkers) {
            print += `Name: ${worker.name} With Salary: ${worker.salary} `;
         }
         workers.textContent += print;
      
   }

   function updateRestaurant(obj, worker) {
      let [name, salary] = worker.split(' ');
      salary = Number(salary);
      obj.sumSalary += salary;
      if(salary > obj.bestSalary) {
         obj.bestSalary = salary;
      }
      obj.workersList.push({
         name,
         salary
      });
      obj.averageSalary = obj.sumSalary / obj.workersList.length;
   }
}
window.addEventListener("load", solve);

function solve() {

  let fields = {
    make: document.getElementById('make'),
    model: document.getElementById('model'),
    year: document.getElementById('year'),
    fuel: document.getElementById('fuel'),
    originalCost: document.getElementById('original-cost'),
    sellingPrice: document.getElementById('selling-price')
  };

  let offers = {
    editOffer: document.getElementById('table-body'),
    soldCar: document.getElementById('cars-list')
  };
  let totalProfit = document.getElementById('profit');
  let profit = 0;

  let submitBtn = document.getElementById('publish');

  submitBtn.addEventListener('click', publish);

  function publish(event) {
    event.preventDefault();

    let make = fields.make.value;
    let model = fields.model.value;
    let year = fields.year.value;
    let fuel = fields.fuel.value;
    let originalCost = fields.originalCost.value;
    let sellingPrice = fields.sellingPrice.value;

    if (make == '' || model == '' || year == '' || fuel == '' || originalCost == '' || sellingPrice == '' || originalCost > sellingPrice) {
      return;
    }

    let tr = document.createElement('tr');
    tr.className = 'row';
    tr.innerHTML = `<td>${make}</td>
                    <td>${model}</td
                    <td>${year}</td
                    <td>${fuel}</td
                    <td>${originalCost}</td
                    <td>${sellingPrice}</td
                    <td>
                      <button class="action-btn edit">Edit</button>  
                      <button class="action-btn sell">Sell</button>
                    </td>`;

    let editBtn = tr.querySelector('.edit');
    let sellBtn = tr.querySelector('.sell');
    editBtn.addEventListener('click', edit);
    sellBtn.addEventListener('click', sell);

    offers.editOffer.appendChild(tr);

    fields.make.value = '';
    fields.model.value = '';
    fields.year.value = '';
    fields.fuel.value = '';
    fields.originalCost.value = '';
    fields.sellingPrice.value = '';

    function edit() {
      fields.make.value = make;
      fields.model.value = model;
      fields.year.value = year;
      fields.fuel.value = fuel;
      fields.originalCost.value = originalCost;
      fields.sellingPrice.value = sellingPrice;

      tr.remove();
    }
    function sell() {
      tr.remove();
      let profitCurrentCar = sellingPrice - originalCost;
      let li = document.createElement('li');
      li.className = 'each-list';
      li.innerHTML = `<span>${make} ${model}</span>
                      <span>${year}</span>
                      <span>${profitCurrentCar}</span>`;

      offers.soldCar.appendChild(li);
      profit += profitCurrentCar;
      totalProfit.textContent = profit.toFixed(2);

    }
  }
}

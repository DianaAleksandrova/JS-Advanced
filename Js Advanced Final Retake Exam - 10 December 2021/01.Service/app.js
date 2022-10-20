window.addEventListener('load', solve);

function solve() {
    let typeOfProducts = document.getElementById('type-product');

    let fields = {
        description: document.getElementById('description'),
        clientName: document.getElementById('client-name'),
        clientPhone: document.getElementById('client-phone')
    };
    let orders = {
        receive: document.getElementById('received-orders'),
        complete: document.getElementById('completed-orders')
    }
    let submitBtn = document.querySelector('#right button');

    let clearBtn = document.querySelector('#completed-orders button');


    submitBtn.addEventListener('click', sendForm);
    clearBtn.addEventListener('click', clear);

    function sendForm(event) {
        event.preventDefault();
        let typeOfProduct = typeOfProducts.value;
        let description = fields.description.value;
        let clientName = fields.clientName.value;
        let clientPhone = fields.clientPhone.value;

        if (description == '' || clientName == '' || clientPhone == '') {
            return;
        }

        let div = document.createElement('div');
        div.className = 'container';
        div.innerHTML = `<h2>Product type for repair: ${typeOfProduct}</h2>
                        <h3>Client information: ${clientName}, ${clientPhone}</h3>
                        <h4>Description of the problem: ${description}</h4>
                        <button class="start-btn">Start repair</button>
                        <button class="finish-btn">Finish repair</button`;

        let startBtn = div.querySelector('.start-btn');
        let finishBtn = div.querySelector('.finish-btn');
        finishBtn.setAttribute('disabled', true);

        startBtn.addEventListener('click', start);
        finishBtn.addEventListener('click', finish);


        orders.receive.appendChild(div);

        fields.description.value = '';
        fields.clientName.value = '';
        fields.clientPhone.value = '';

        function start() {
            startBtn.setAttribute('disabled', true);

            finishBtn.disabled = false;
        }

        function finish() {

            let div = document.createElement('div');
            div.className = 'container';
            div.innerHTML = `<h2>Product type for repair: ${typeOfProduct}</h2>
            <h3>Client information: ${clientName}, ${clientPhone}</h3>
            <h4>Description of the problem: ${description}</h4>`;

            orders.receive.querySelector('div').remove();
            orders.complete.appendChild(div);
            startBtn.remove();
            finishBtn.remove();

        }
    }
    function clear() {
        //orders.complete.querySelector('div').remove();
        orders.complete.innerHTML = '';
    }
}

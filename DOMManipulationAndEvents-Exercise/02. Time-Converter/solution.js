function attachEventsListeners() {

    let buttons = Array.from(document.querySelectorAll('input[type=button]'));

    for (let button of buttons) {
        button.addEventListener('click', function(event) {
            let value = Number(event.target.parentElement.querySelector('input[type=text]').value);
            let field = event.target.id;

            switch(field) {
                case 'daysBtn':
                    calculate(value);
                    break;
                case 'hoursBtn':
                    calculate(value / 24);
                    break;
                case 'minutesBtn':
                    calculate(value /24 /60);
                    break;
                case 'secondsBtn':
                    calculate(value /24 /60 /60);
                    break;
            }
        });
    }
    function calculate(value) {
        let inputs = Array.from(document.querySelectorAll('input[type=text]'));
        inputs.shift().value = value;
        let minutes = value * 24;
        for (let input of inputs) {
            input.value = minutes;
            minutes *= 60;
        }
    }
}

function lockedProfile() {
    let buttons = document.querySelectorAll('.profile button');
    
    for (let button of buttons) {
        button.addEventListener('click', function(event) {
            let status = event.target.parentElement;
            let isActive = status.querySelector('input[type="radio"][value="unlock"]').checked;
            
            if(isActive) {
                let div = status.querySelector('div');
                if(event.target.textContent === 'Show more') {
                    div.style.display = 'block';
                    event.target.textContent = 'Hide it';
                }else {
                    div.style.display = 'none';
                    event.target.textContent = 'Show more';
                }
            }
        
        });
    }
}
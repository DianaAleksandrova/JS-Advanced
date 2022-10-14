function solve() {

    let input = {
        task: document.getElementById('task'),
        description: document.getElementById('description'),
        date: document.getElementById('date')
    };
    let [_, openSection, inProgressSection, completeSection] = Array.from(document.querySelectorAll('section'))
        .map(e => e.children[1]);

    document.getElementById('add').addEventListener('click', addTask);

    function addTask(event) {
        event.preventDefault();

        let article = document.createElement('article');
        article.appendChild(createElement('h3', input.task.value));
        article.appendChild(createElement('p', `Description: ${input.description.value}`));
        article.appendChild(createElement('p', `Due Date: ${input.date.value}`));
        let div = createElement('div', '', 'flex');

        let startButton = createElement('button', 'Start', 'green');
        let deleteButton = createElement('button', 'Delete', 'red');
        let finishButton = createElement('button', 'Finish', 'orange');

        div.appendChild(startButton);
        div.appendChild(deleteButton);
        article.appendChild(div);

        openSection.appendChild(article);
        Object.values(input).forEach(e => e.value = '');

        deleteButton.addEventListener('click', function () {
            article.remove();
        });

        startButton.addEventListener('click', function () {
            startButton.remove();
            div.appendChild(finishButton);
            inProgressSection.appendChild(article);
        });

        finishButton.addEventListener('click', function () {
            div.remove();
            completeSection.appendChild(article);
        })
    }
    function createElement(type, content, className) {
        let element = document.createElement(type);
        element.textContent = content;
        if (className) {
            element.className = className;
        }
        return element;
    }

}
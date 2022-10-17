window.addEventListener("load", solve);

function solve() {
  let input = {
    title: document.getElementById('post-title'),
    category: document.getElementById('post-category'),
    content: document.getElementById('post-content')
  };

  let lists = {
    review: document.getElementById('review-list'),
    published:document.getElementById('published-list')
  };

  let publishBtn = document.getElementById('publish-btn');
  let clearBtn = document.getElementById('clear-btn');
  publishBtn.addEventListener('click', publish);
  clearBtn.addEventListener('click' , clear);

  function publish(event) {
      event.preventDefault();
      let title = input.title.value;
      let category = input.category.value;
      let content = input.content.value;

      if(title === '' || category === '' || content === '') {
        return;
      }

      let li = document.createElement('li');
      li.className = 'rpost';
      li.innerHTML = `<article>
        <h4>${title}</h4>
        <p>Category: ${category}</p>
        <p>Content: ${content}</p>
      </article>
      <button class="action-btn edit">Edit</button>
      <button class="action-btn approve">Approve</button>`;

      let editBtn = li.querySelector('.edit');
      let approveBtn = li.querySelector('.approve');
      editBtn.addEventListener('click', edit);
      approveBtn.addEventListener('click', approve);

      lists.review.appendChild(li);

      input.title.value = '';
      input.category.value = '';
      input.content.value = '';

      function edit() {
        input.title.value = title;
        input.category.value = category;
        input.content.value = content;

        li.remove();
      }

      function approve() {
        lists.published.appendChild(li);
        editBtn.remove();
        approveBtn.remove();
      }
  }
  function clear() {
    lists.published.innerHTML = '';
  }
}

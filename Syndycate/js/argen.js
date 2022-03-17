// Request - Делится на 5 видов

// 1 - GET (получить)
// 2 - POST (опубликовать)
// 3 - PUT (полажить)
// 4 - PATCH (для редактирования)
// 5 - Delete (удалить)

const createPost = (post) => {
    let item = `
    <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h1>${post.id}</h1>
      <h5 class="card-title">${post.title}</h5>
      <p class="card-text">${post.body}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    `;
    return item
  };

  let items = []

  fetch("https://jsonplaceholder.typicode.com/posts?_page=1")
    .then(response => response.json())
    .then(array => {
        array.map((post) => {
            let el = createPost(post)
            items.push(el)
        })
    })

    .then(() => {
        let cards = items.join('')
        document.getElementById('posts').innerHTML = cards
    })

    .catch((err) => {
      alert("Ошибка,интернет жакшы эмес же интернет такыр иштебей эле");
    });
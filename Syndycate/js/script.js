// Request - Делится на 5 видов

// 1 - GET (получить)
// 2 - POST (опубликовать)
// 3 - PUT (полажить)
// 4 - PATCH (для редактирования)
// 5 - Delete (удалить)

const createPost = (post, photo) => {
  let item = `
    <div class="card" style="width: 18rem;">
    <img src="${photo.url}" class="card-img-top" alt="...">
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

let count = (1)

const loadPost = (page) => {
  fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}`)
    .then(response => response.json())
    .then(array => {
      fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}`)
        .then(response2 => response2.json())
        .then(array2 => {
          array2.map((photo, id) => {
            let el = createPost(array[id], photo)
            items.push(el)
          })
        })
        .then(() => {
          let cards = items.join('')
          document.getElementById('posts').innerHTML = cards
          count++
        })
    })
    .catch((err) => {
      alert('Ошибка, интернет прохо подключен')
    })
}

loadPost()
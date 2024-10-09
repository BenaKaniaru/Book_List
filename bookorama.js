const books = JSON.parse(localStorage.getItem('books')) || []; //fetches the book list from local storage

renderBookList(); //updates the list everytime the page reloads

function renderBookList () {
  let html = '';

  //loops through the array of books and creates an html element for each 
  books.forEach((book) => {
    html += `
      <div class="book-item">
        <div class="selection-indicator"></div>
        <p>${book}</p> 
        <button class="delete-button">Delete</button>
      </div>
    `
  });

  //places the created html on the page
  const container = document.querySelector('.books-container');
  container.innerHTML = html;

  if (container.innerHTML === '') {
    container.innerHTML = 'You have nothing scheduled to read yet!';
    container.classList.add('empty-text');
  } else {
    container.classList.remove('empty-text');
  }

  localStorage.setItem('books', JSON.stringify( books)); //stores the book list on local storage, ensuring it can be accessed everytime the page loads 


  //added event listener on the delete buttons
  document.querySelectorAll('.delete-button').forEach((button, index) => {
      button.addEventListener('click', () => {
      books.splice(index, 1);
      renderBookList();
    })
  })
}

const addBook = document.querySelector('.add-book-button');
const inputValue = document.querySelector('.input-book-title');


//Event listener for the add button
addBook.addEventListener('click', () => {
  const addedBook = inputValue.value;

  if (addedBook === '') {
    alert('Please add the book title')
  } else {
  books.push(addedBook);
  inputValue.value = '';
  renderBookList();
  };  
})









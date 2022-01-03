let myLibrary = [];

// DEFINE general html elements
const booksDisplay = document.querySelector('.books');
const addBookBtn = document.getElementById('addBookBtn');
const submitBtn = document.getElementById('submitBtn');
const popUpWindow = document.querySelector('.popUpWindow');

// DEFINE form input html elements
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const yearInput = document.getElementById('year');
const genreInput = document.getElementById('genre');

// DEFINE FUNCTIONS

function Book(title, author, year, genre) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.year = year;
  this.genre = genre;
};

function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book);
};

// loop through array and show on display HTML
function displayBooks () {
    booksDisplay.textContent = '';
    for (let i = 0; i < myLibrary.length; i++) {
        let bookTitle = myLibrary[i].title;
        let bookAuthor = myLibrary[i].author;
        let bookYear = myLibrary[i].year;
        let bookGenre = myLibrary[i].genre;
        let newLine = document.createElement('div');
            newLine.className = 'cards';
            booksDisplay.appendChild(newLine);
        let titleDiv = document.createElement('div');
            titleDiv.className = 'bookTitle';
            newLine.appendChild(titleDiv);
        let authorDiv = document.createElement('div');
            authorDiv.className = 'bookAuthor';
            newLine.appendChild(authorDiv);
        let yearDiv = document.createElement('div');
            yearDiv.className = 'bookYear';
            newLine.appendChild(yearDiv);
        let genreDiv = document.createElement('div');
            genreDiv.className = 'bookGenre';
            newLine.appendChild(genreDiv);
            
            titleDiv.append(bookTitle);
            authorDiv.append(bookAuthor);
            yearDiv.append(bookYear);
            genreDiv.append(bookGenre);
    }
}

function divShow() {
    popUpWindow.style.display = 'block';
}

function hideDiv() {
    popUpWindow.style.display = 'none';
}

// create initial array with 3 books
const harryPotter = new Book("Harry Potter and the Sorcerer's Stone", 'J. K. Rowling', '1997', 'Fiction');
const starWars = new Book('Lord of the Rings: Return of the King', 'J. R. R. Tolkien', '1954', 'Fiction');
const twilight = new Book('Kite Runner', 'Khaled Hosseini', '2003', 'Fiction');

addBookToLibrary(harryPotter);
addBookToLibrary(starWars);
addBookToLibrary(twilight);

console.log(myLibrary);

// show pop up window when add Book button is clicked
addBookBtn.addEventListener('click', e => {
    divShow();
})

displayBooks();

// pop up window SUBMIT button logic
submitBtn.addEventListener('click', () => {

    const currentBook = new Book(titleInput.value, authorInput.value, 
                                    yearInput.value, genreInput.value); // creates new book object
    addBookToLibrary(currentBook); // adds book to library
    displayBooks();

    titleInput.value = "";
    authorInput.value = "";
    yearInput.value = "";
    genreInput.value = "";

    hideDiv();
})
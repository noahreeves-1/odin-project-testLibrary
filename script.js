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
const readInput = document.getElementById('askRead');

// DEFINE FUNCTIONS //

// FUNCTION create book
function Book(title, author, year, genre, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.year = year;
  this.genre = genre;
  this.read = read;
};

// FUNCTION add book to library
function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book);
};

// FUNCTION loop through array and display books in library as cards
function displayBooks () {
    booksDisplay.textContent = '';
    for (let i = 0; i < myLibrary.length; i++) {
        let bookTitle = myLibrary[i].title;
        let bookAuthor = myLibrary[i].author;
        let bookYear = myLibrary[i].year;
        let bookGenre = myLibrary[i].genre;
        let bookRead = myLibrary[i].read;
        let newLine = document.createElement('div');
            newLine.classList.add('cards');
            newLine.dataset.index = i;
            booksDisplay.appendChild(newLine);
        let titleDiv = document.createElement('div');
            titleDiv.classList.add('bookTitle', 'bookInfo');
            newLine.appendChild(titleDiv);
            titleDiv.append(bookTitle);
        let authorDiv = document.createElement('div');
            authorDiv.classList.add('bookAuthor', 'bookInfo');
            newLine.appendChild(authorDiv);
            authorDiv.append(bookAuthor);
        let yearDiv = document.createElement('div');
            yearDiv.classList.add('bookYear', 'bookInfo');
            newLine.appendChild(yearDiv);
            yearDiv.append(bookYear);
        let genreDiv = document.createElement('div');
            genreDiv.classList.add('bookGenre', 'bookInfo');
            newLine.appendChild(genreDiv);
            genreDiv.append(bookGenre);
        let readBtnLine = document.createElement('div');
            readBtnLine.className = 'readBtn';
            newLine.appendChild(readBtnLine);
            readBtnLine.append(bookRead);
        let removeBtnLine = document.createElement('div');
            removeBtnLine.className = 'removeBtn';
            newLine.appendChild(removeBtnLine);
            removeBtnLine.textContent = "Remove";
        if (bookRead == true) {
            readBtnLine.textContent = 'Read';
            readBtnLine.style.backgroundColor = 'lightgreen';
        } else {
            readBtnLine.textContent = "Haven't read";
            readBtnLine.style.backgroundColor = 'pink';
        }
    }
    // REMOVE card when clicked
    const removeBtn = document.querySelectorAll('.removeBtn');

    removeBtn.forEach((button) => {
        
        button.addEventListener('click', e => {
            console.log('removeBtn was clicked');

            let dataIndex = button.parentNode.dataset['index'];
            myLibrary.splice(dataIndex,1);

            console.log(myLibrary);
            console.log(myLibrary.length);

            displayBooks();
        })
    });

    // READ / DIDN'T READ button
    const readBtn = document.querySelectorAll('.readBtn');

    readBtn.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.textContent == "Read") {
                button.style.backgroundColor = "pink";
                button.textContent = "Haven't read";
            } else {
                button.style.backgroundColor = 'lightgreen';
                button.textContent = "Read";
            }
        })
    })

}

function divShow() {
    popUpWindow.style.display = 'block';
}

function hideDiv() {
    popUpWindow.style.display = 'none';
}

// create initial array with 3 books
const harryPotter = new Book("Harry Potter and the Sorcerer's Stone", 'J. K. Rowling', '1997', 'Fiction', true);
const starWars = new Book('Lord of the Rings: Return of the King', 'J. R. R. Tolkien', '1954', 'Fiction', false);
const twilight = new Book('Kite Runner', 'Khaled Hosseini', '2003', 'Fiction', false);

addBookToLibrary(harryPotter);
addBookToLibrary(starWars);
addBookToLibrary(twilight);

console.log(myLibrary);

displayBooks();

// SHOW pop up window when add Book button is clicked
addBookBtn.addEventListener('click', e => {
    divShow();
});

// SUBMIT pop up information when clicked
submitBtn.addEventListener('click', () => {

    const currentBook = new Book(titleInput.value, authorInput.value, 
                                    yearInput.value, genreInput.value, readInput.value); // creates new book object
    addBookToLibrary(currentBook); // adds book to library
    displayBooks();

    titleInput.value = "";
    authorInput.value = "";
    yearInput.value = "";
    genreInput.value = "";

    hideDiv();
});
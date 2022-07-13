let myLibrary = [];
const addBook = document.querySelector('.addBookButton')
const addBookModal = document.querySelector('.addBookForm')
const confirmBookAdd = document.querySelector('#confirmBookAdd')
const bookTitle = document.querySelector('#bookName').value
const author = document.querySelector('#authorName').value
const pages = document.querySelector('#pages').value
const read = true //setting it to true atm. Will get its value when i figure out how.

//variable for combining book info into an object and then pushing it into myLibrary array.
/* let newBook */

addBook.addEventListener('click', () => {
    //on clicking this, the addBookForm window should pop up
    addBookModal.classList.add('show')
})

//adds book to library once user confirms addition. Need to add variables that can access the data from addBookform and pass it here.
confirmBookAdd.addEventListener('click', () => {
    addBookModal.classList.remove('show')
    /* newBook = new Book(bookTitle,author,pages,read) */
})

//class for passing added books to the myLibrary array.
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = function () {
            return `${title} by ${author}, ${pages} pages, ${read}`;
        };
    }
}

/* JS to dynamically add html elements to DOM after a new book has been added */
class UI {
    static displayBooks() {
        /* hard coded books here so i can see how they show up and that JS methods are working as intended */
        const exampleBooks = [
            {
                title: "Winnie The Pooh",
                author: "A.A. Milne",
                pages: 420,
                read: 'yes' 
            },
            {
                title: "Asterix and Obelisk",
                author: "A.A. Milne",
                pages: 69,
                read: 'yes' 
            }
        ]

        const books = exampleBooks;

        books.forEach((value) => UI.addBookToLibrary(value))
    }

    static addBookToLibrary(book){
        const cardArea = document.querySelector('.cardArea')
        const newCard = document.createElement('div')
        newCard.classList.add('newCard')
        newCard.innerText = `${book.title},${book.author},${book.pages},${book.read}`
        cardArea.appendChild(newCard)
    }    
}

//JS for displaying books on DOM
document.addEventListener('DOMContentLoaded', UI.displayBooks)

//JS for adding the book to the library by instantiating our book class
document.querySelector('.addBookForm').addEventListener('submit', (e) => {
    e.preventDefault();
    //values from the form are stored in variables bookTitle, author and pages.
    //need to add read or not as a value here too
    const book = new Book(bookTitle,author,pages,read)

    //Add book card to DOM
    UI.addBookToLibrary(book)
    console.log(book)
})


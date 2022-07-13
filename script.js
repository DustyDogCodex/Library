let myLibrary = [];
const addBook = document.querySelector('.addBookButton')
const addBookModal = document.querySelector('.addBookForm')
const confirmBookAdd = document.querySelector('#confirmBookAdd')
const bookTitle = document.querySelector('#bookName')
const author = document.querySelector('#authorName')
const pages = document.querySelector('#pages')

//variable for combining book info into an object and then pushing it into myLibrary array.
let newBook

addBook.addEventListener('click', () => {
    //on clicking this, the addBookForm window should pop up
    addBookModal.classList.add('show')
})

//adds book to library once user confirms it. Need to add variables that can access the data from addBooform and pass it here.
confirmBookAdd.addEventListener('click', () => {
    addBookModal.classList.remove('show')
    newBook = new Book(bookTitle,author,pages,read)
})

//class for passing added books to the myLibrary array.
class Book {
    constructor(bookTitle, author, pages, read) {
        this.title = bookTitle;
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

        books.forEach((value) => UI.addBookToLibrary(value) )
    }

    static addBookToLibrary(book){
        myLibrary.push(newBook)
        const cardArea = document.querySelector('.cardArea')
        const newCard = document.createElement('div')
    
        newCard.innerText(`${book.title},${book.author},${book.pages},${book.read}`)
        newCard.classList.add('newCard')
        cardArea.appendChild(newCard)
    }    
}

//JS for displaying books on DOM
document.addEventListener('DOMContentLoaded', UI.displayBooks)


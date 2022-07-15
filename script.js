let myLibrary = [];
const addBook = document.querySelector('.addBookButton')
const addBookModal = document.querySelector('.addBookForm')
const confirmBookAdd = document.querySelector('#confirmBookAdd')

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

    //method for displaying books as cards on screen
    static addBookToLibrary(book){
        const cardArea = document.querySelector('.cardArea')
        const newCard = document.createElement('div')
        newCard.classList.add('newCard')
        newCard.innerText = `${book.title},${book.author},${book.pages},${book.read}`
        cardArea.appendChild(newCard)
    }    

    //method for clearing the fields after user submits information
    static resetFields() {
        document.querySelector('#bookName').value = ''
        document.querySelector('#authorName').value = ''
        document.querySelector('#pages').value = ''
        //will insert value for read checkbox later
    }

    //method for removing books 
    static removeBook(el) {
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }
}

//JS for displaying books on DOM
document.addEventListener('DOMContentLoaded', UI.displayBooks)

//JS for adding the book to the library by instantiating our book class
document.querySelector('.addBookForm').addEventListener('submit', (e) => {

    //prevent default submit event from happening. right now the book card only flashes and then vanishes.
    e.preventDefault();

    //values from the form are stored in variables bookTitle, author and pages.
    //need to add read or not as a value here too
    const bookTitle = document.querySelector('#bookName').value
    const author = document.querySelector('#authorName').value
    const pages = document.querySelector('#pages').value
    const read = true //setting it to true atm. Will get its value when i figure out how.
    
    //Validation of entered variables using JS
    //will change value of read later
    if(bookTitle === '' || author === '' || pages === '' || read === false){
        alert('Please fill in all fields before submitting!').setTimeout(() => {
           document.querySelector('.alert').remove()
        }, 3000);
    } else {
        //instantiate book class
        const book = new Book(bookTitle,author,pages,read)

        //Add book card to DOM
        UI.addBookToLibrary(book)
        console.log(book)

        //reset all form fields
        UI.clearFields();
    }
})

//JS for removing books
document.querySelector('.cardArea').addEventListener('click', (e) => {
    UI.removeBook(e.target)
})


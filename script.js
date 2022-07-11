let myLibrary = [];
const addBook = document.querySelector('.addBookButton')
const addBookModal = document.querySelector('.addBookForm')
const confirmBookAdd = document.querySelector('#confirmBookAdd')
const bookTitle = document.querySelector('#bookName')
const author = document.querySelector('#authorName')
const pages = document.querySelector('#pages')

//variable for getting combining book info into an object and then pushing it into myLibrary array.
let newBook

addBook.addEventListener('click', () => {
    //on clicking this, the addBookForm window should pop up
    addBookModal.classList.add('show')
})

//adds book to library once user confirms it. Need to add variables that can access the data from addBooform and pass it here.
confirmBookAdd.addEventListener('click', () => {
    addBookModal.classList.remove('show')
    newBook = new Book(bookTitle,author,pages,read)
    addBookToLibrary()
})

//object constructor that will pass added books to the myLibrary array.
function Book(bookTitle,author,pages,read){
    this.title = bookTitle
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${read}`
    }
}

function addBookToLibrary(){
    myLibrary.push(newBook)
    console.log(myLibrary)
}


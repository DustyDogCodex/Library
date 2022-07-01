let myLibrary = [];
const addBook = document.querySelector('.addBookButton')
const addBookModal = document.querySelector('.addBookForm')
const confirmBookAdd = document.querySelector('#confirmBookAdd')

addBook.addEventListener('click', () => {
    //on clicking this, the addBookForm window should pop up
    addBookModal.classList.add('.show')
})

function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info() = function () {
        return `${title} by ${author}, ${pages} pages, ${read}`
    }
}

function addBookToLibrary(){
    myLibrary.push(Book)
}


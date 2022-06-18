let myLibrary = [];

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

const addBook = document.querySelector('.add-book')
addBook.addEventListener('click', () => {
    addBookToLibrary()
})
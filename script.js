//class for passing added books to the myLibrary array.
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = function () {
            return `${title} by ${author}, ${pages} pages, read: ${read ? "yes" : "no"}`;
        };
    }
}

/* JS to dynamically add html elements to DOM after a new book has been added */
class Interface {
    
    static displayBooks() {

        const myLibrary = Storage.getBooks()

        myLibrary.forEach((value) => Interface.addBookToLibrary(value))
    }

    //method for displaying books as cards on screen
    //also adds a remove book buttoon to newly added cards.
    static addBookToLibrary(book){
        const cardArea = document.querySelector('.cardArea')
        const newCard = document.createElement('div')
        newCard.classList.add('newCard')
        newCard.innerHTML = `
            <span>${book.title}</span>  
            by ${book.author}. \n
            It has ${book.pages} pages. \n  
            Read: ${book.read ? 'Yes' : 'No'} \n
            <button class='delete'>Remove Book</button></td>`        
        cardArea.appendChild(newCard)
    }    

    //method for showing an alert message using bootstrap if user doesn't enter all info and after removing/adding books.
    static UserMakesBooBoo(message,className) {
        const alertBox = document.createElement('div')
        alertBox.className = `alert alert-${className}`
        alertBox.appendChild(document.createTextNode(message))
        const contentBox = document.querySelector('.content')
        const addBookForm = document.querySelector('.addBookForm')
        contentBox.insertBefore(alertBox, addBookForm)
        //timeout values for removing alert box after display
        setTimeout(() => document.querySelector('.alert').remove(), 3000)
    }

    //method for clearing the fields after user submits information
    static resetFields() {
        document.querySelector('#bookName').value = ''
        document.querySelector('#authorName').value = ''
        document.querySelector('#pages').value = ''
        document.querySelector('#readStatus').checked = false
    }

    //method for removing books 
    static removeBook(el) {
        if(el.classList.contains('delete')){
            el.parentElement.remove();
        }
    }
}

// class for accessing and adding books to local storage
class Storage {

    static getBooks() {
        let myLibrary
        if(localStorage.getItem('myLibrary') === null){
            myLibrary = []
        } else {
            myLibrary = JSON.parse(localStorage.getItem('myLibrary'))
        }

        return myLibrary
    }

    static addBook(book){
        const myLibrary = Storage.getBooks()
        myLibrary.push(book)
        localStorage.setItem('myLibrary', JSON.stringify(myLibrary))
    }

    //lol how do i remove a book from storage??????
    static removeBook(title){
        const myLibrary = Storage.getBooks()

        myLibrary.forEach((book,index) => {
            if(book.title === title){
               myLibrary.splice(index,1);
            }
        })

        localStorage.setItem('myLibrary', JSON.stringify(myLibrary))
    }
}

//JS for displaying books on DOM
document.addEventListener('DOMContentLoaded', Interface.displayBooks)

//JS for adding the book to the library by instantiating our book class
document.querySelector('.addBookForm').addEventListener('submit', (e) => {

    //prevent default submit event from happening. right now the book card only flashes and then vanishes.
    e.preventDefault();

    //values from the form are stored in variables bookTitle, author and pages.
    //check box is read using the checked method. Learned something new today.
    const bookTitle = document.querySelector('#bookName').value
    const author = document.querySelector('#authorName').value
    const pages = document.querySelector('#pages').value
    const read = document.querySelector('#readStatus').checked 
    
    //Validation of entered variables using JS
    //will change value of read later
    if(bookTitle === '' || author === '' || pages === ''){
        Interface.UserMakesBooBoo('Please fill in all fields before submitting!', 'danger');
    } else {
        //instantiate book class
        const book = new Book(bookTitle,author,pages,read)

        //Add book card to DOM
        Interface.addBookToLibrary(book)
        
        //add book to local storage using Storage class
        Storage.addBook(book)

        //success message for adding a book
        Interface.UserMakesBooBoo('Book Added!', 'success')

        //reset all form fields
        Interface.resetFields();
    }
})

//JS for removing books
document.querySelector('.cardArea').addEventListener('click', (e) => {
    //this is for reoving book from UI
    Interface.removeBook(e.target)

    //this is for removing book from localstorage
    Storage.removeBook(e.target.previousElementSibling.innerText)

    //message for successfully removing a book
    Interface.UserMakesBooBoo('Book Removed!', 'success')
})


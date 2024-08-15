const myLibrary = [];

function Books(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        return `${name} by ${author}, ${pages}, ${read}.`;
    };
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

//Manually adding books to see output
const one = new Books("one", "auth1", 1, "read");
const two = new Books("two", "auth2", 2,"not read");

addBookToLibrary(one);
addBookToLibrary(two);

function addToDom() {
    let currentTable = document.querySelector('#row');
    myLibrary.forEach(book => {
        let newRow = `<tr><td>${book.name}</td><td>${book.author}</td><td>${book.pages}</td><td>${book.read}</td></tr>`;
        currentTable.innerHTML += newRow;
    })
}

addToDom();
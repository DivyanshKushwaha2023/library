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

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

Book.prototype.getTitle = function()
{
    return this.title;
}

Book.prototype.getAuthor = function()
{
    return this.author;
}

Book.prototype.getPages = function()
{
    return this.pages;
}

Book.prototype.hasRead = function()
{
    return this.read;
}

function addBook() {
    const title = window.prompt("What is the title of the book: ")
    const author = window.prompt("Who is author of book: ");
    const pages = window.prompt("How many number of pages: ");
    const read = window.prompt("Have you read: ");
    
    myLibrary.push(new Book(title, author, pages, read));
}

addBook();
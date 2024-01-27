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
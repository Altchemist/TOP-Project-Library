let myLibrary = [];
let openformButton = document.getElementById("openForm");
let dialogBox = document.getElementById("dialog");

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

myLibrary.push(new Book("The Obstacle is the way", "Ryan Holiday", "200", "Not read"))
myLibrary.push(new Book("The Obstacle is the way", "Ryan Holiday", "200", "Not read"))
myLibrary.push(new Book("Start With Why", "Ryan Holiday", "200", "Not read"))

function addBook() {
    // const title = window.prompt("What is the title of the book: ")
    // const author = window.prompt("Who is author of book: ");
    // const pages = window.prompt("How many number of pages: ");
    // const read = window.prompt("Have you read: ");
    
    // myLibrary.push(new Book(title, author, pages, read));
}

function displayBook()
{
    let table = document.getElementById("tabul");
    for(obj of myLibrary)
    {
        let tableRow = document.createElement("tr");
        table.appendChild(tableRow);
        let title = document.createElement("td");
        title.textContent = obj.getTitle();
        tableRow.appendChild(title);
        
        let author = document.createElement("td");
        author.textContent = obj.getAuthor();
        tableRow.appendChild(author);

        let page = document.createElement("td");
        page.textContent = obj.getPages();
        tableRow.appendChild(page)

        let read = document.createElement("td");
        read.textContent = obj.hasRead();
        tableRow.appendChild(read);
    }
}

openformButton.addEventListener("click", ()=>{
    dialogBox.showModal();
});

displayBook()
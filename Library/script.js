let myLibrary = [];
let openformButton = document.getElementById("openForm");
let dialogBox = document.getElementById("dialog");
let statusSelect = dialogBox.querySelector("select");
let inputValues = dialogBox.querySelectorAll("input");
let closeButton = document.getElementById("Close");
let addButton = document.getElementById("Add");

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


function displayBook()
{
    let table = document.getElementById("tabul");

    let obj = myLibrary[myLibrary.length-1];

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

    let delTd = document.createElement("td")
    let delButton = document.createElement("button");
    delButton.textContent = "Delete";
    tableRow.appendChild(delTd);
    delTd.appendChild(delButton)

    let changeTd = document.createElement("td");
    let changeReadButton = document.createElement("button");
    changeReadButton.textContent = "Read";
    tableRow.appendChild(changeTd);
    changeTd.appendChild(changeReadButton);
}

openformButton.addEventListener("click", ()=>{
    dialogBox.showModal();
});

closeButton.addEventListener("click", (e)=>{
    e.preventDefault();
    dialogBox.close();
})

addButton.addEventListener("click", ()=>{
    let valuesArray = Array.from(inputValues);

    let title = valuesArray[0].value;
    let author = valuesArray[1].value;
    let number = valuesArray[2].value;

    let status = statusSelect.value;

    myLibrary.push(new Book(title, author, number, status));

    displayBook();
});
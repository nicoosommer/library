const main = document.getElementById("main");

const myLibrary = [];
function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
function addBook() {
  const title = prompt("Ingrese el nombre");
  const author = prompt("Ingrese el nombre del autor");
  const pages = prompt("Ingrese la cantidad de paginas");
  const read = prompt("Ingrese si lo leyo");
  myLibrary.push(new book(title, author, pages, read));
  displayBook(myLibrary[myLibrary.length - 1]);
}
function displayBook(i) {
  const div = document.createElement("div");
  div.className = "card";
  const h3 = document.createElement("h3");
  const h4 = document.createElement("h4");
  const p = document.createElement("p");
  const p2 = document.createElement("p");
  h3.textContent = `${i.title}`;
  div.appendChild(h3);
  h4.textContent = `${i.author}`;
  div.appendChild(h4);
  p.textContent = `${i.pages}`;
  div.appendChild(p);
  p2.textContent = `${i.read}`;
  div.appendChild(p2);
  main.appendChild(div);
}

const boton = document.querySelector(".boton");
boton.addEventListener("click", addBook);

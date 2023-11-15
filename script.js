const main = document.getElementById("main");
const boton = document.querySelector(".boton");
const dialog = document.querySelector("dialog");
const cancel = document.getElementById("cancel");
const myform = document.querySelector("#myform");

const myLibrary = [];
function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
function addBook() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const radio = document.querySelectorAll("input[type='radio']");
  let read = "";
  for (let i of radio) {
    if (i.checked) {
      read = i.value;
    }
  }
  myLibrary.push(new book(title, author, pages, read));
  displayBook(myLibrary[myLibrary.length - 1]);
}
function displayBook(i) {
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const h4 = document.createElement("h4");
  const p = document.createElement("p");
  const p2 = document.createElement("p");
  const borrar = document.createElement("button");
  div.className = "card";
  div.dataset.index = myLibrary.length - 1;
  h3.textContent = `${i.title}`;
  div.appendChild(h3);
  h4.textContent = `${i.author}`;
  div.appendChild(h4);
  p.textContent = `${i.pages}`;
  div.appendChild(p);
  p2.textContent = `${i.read}`;
  div.appendChild(p2);
  borrar.textContent = "Delete";
  borrar.className = "borrar";
  borrar.addEventListener("click", buttonDelete);
  div.appendChild(borrar);
  main.appendChild(div);
}
function buttonDelete(e) {
  const carta = e.currentTarget.parentNode;
  myLibrary.splice(carta.dataset.index, 1);
  carta.remove();
  const divs = document.querySelectorAll(".card");
  for (let i of divs) {
    if (i.dataset.index > carta.dataset.index) {
      i.dataset.index = i.dataset.index - 1;
    }
  }
}
boton.addEventListener("click", () => {
  dialog.showModal();
});
cancel.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});

myform.addEventListener("submit", (e) => {
  e.preventDefault();
  addBook();
  myform.reset();
  dialog.close();
});

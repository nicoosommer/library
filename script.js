const main = document.getElementById("main");

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
const dialog = document.querySelector("dialog");
const cancel = document.getElementById("cancel");
boton.addEventListener("click", () => {
  dialog.showModal();
});
cancel.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});

const myform = document.querySelector("#myform");
myform.addEventListener("submit", (e) => {
  e.preventDefault();
  addBook();
  myform.reset();
  dialog.close();
});

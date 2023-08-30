// // Les ecouteurs d'événements
// let button = document.querySelector("button");
// button.addEventListener("click", function () {
//   alert("Bonjour");
// });
// // // Annuler la redirection de la page
// document.querySelector("a").addEventListener("click", function (e) {
//   event.preventDefault();
//   let target = this.getAttribute("href");
//   console.log(target);
//   let response = confirm("Voulez-vous quitter la page?");
// });
// if (response == true) {
//   window.Location = target;
// } else {
//   alert("Merci de rester avec nous");
// }
// // Challenge checklist
// const icone = "<span><i class = 'fa fa-check'></span>";
// let tabLi = document.querySelectorAll("ul li");
// for (let li of tabLi) {
//   li.addEventListener("click", function () {
//     this.classList.toggle("active");
//     if (this.classList.contains("active")) {
//       this.innerHTML = this.innerText + icone;
//     }
//   });

// }
// let button = document.querySelector("button");
// button.addEventListener("click", function () {
//   alert("Bonjour");
// });
// let a = document.querySelector("a");
// a.addEventListener("click", function (event) {
//   alert("Merci!");
//   event.preventDefault();
// });
// Permet de détecter le clique droit
// let b = window.document;
// b.addEventListener("contextmenu", function (event) {
//   alert("hello!");
// });
// let btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   btn.classList.add("bg-color");
// });
// let btn = document.querySelector("button");
// btn.addEventListener("dblclick", function () {
//   btn.classList.add("bg-color");
// });
// let btn = document.querySelector("button");
// btn.addEventListener("mouseover", function () {
//   btn.classList.add("bg-color");
// });
// let input = document.querySelector("input");
// input.addEventListener("submit", function () {
//   input.classList.add("bg-color");
// });
// let name = prompt("Entrez votre nom");
// if (name.length >= 5) {
//   alert("Validé");
// } else {
//   alert("Veuillez entrer votre nom complet");
// }

// Masquer les photos sauf la première
const images = document.querySelectorAll("#galery img");
for (i = 1; i < images.length; i++) {
  images[i].classList.add("hidden");
}
let imgActive = 0;
// Masquer les photos sauf la première
for (let i = 1; i < images.length; i += 1) {
  images[i].classList.add("hidden");
}
// Cliick sur bouton suivant
document.querySelector("#next").addEventListener("click", function () {
  images[imgActive].classList.add("hidden");
  imgActive += 1;
  if (imgActive >= images.length) {
    imgActive = 0;
  }
  images[imgActive].classList.remove("hidden");
});

// let li = document.querySelector("li");
// console.log(li.textContent);
// li.innerText = "Salut";
// let a = document.querySelector("a");
// console.log(a.getAttribute("href"));
// let h1 = document.querySelector("h1");
// console.log(h1.classList.add("color"));
// console.log(getComputedStyle(h1).color);
// const div = document.createElement("div");
// div.innerHTML = "Hello world";
// GESTION DU TEMPS
// window.setInterval(function(){
//     console.log("Set intervalle");
// },1000)
// window.setInterval(function () {
//   alert("hello");
// }, 1000);
// window.setTimeout(function () {
//   alert("hello");
// }, 3000);

// const affichage = function () {
//   let date = new Date();
//   let minute = date.getMinutes();
//   console.log(minute);
//   let heure = date.getHours();
//   console.log(heure);
//   let second = date.getSeconds();
//   console.log(second);
//   if (second < 10) {
//     second = "0" + second;
//   }
//   if (minute < 10) {
//     minute = "0" + minute;
//   }
//   let horloge = heure + ":" + minute + ":" + second;
//   document.querySelector("h1").innerText = horloge;
// };
// window.setInterval(affichage, 1000);

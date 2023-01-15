let plusBtns = document.getElementsByClassName("plus");
console.log(plusBtns);
let moinBtns = document.getElementsByClassName("moin");
console.log(moinBtns);
let deletBtns = document.getElementsByClassName("delet");
console.log(deletBtns);
let favorieBtns = document.getElementsByClassName("fa-heart");
console.log(favorieBtns);

function total() {
  let prix = document.getElementsByClassName("prix");
  let qtes = document.getElementsByClassName("qte");
  let total = document.querySelector("#totalprice");
  console.log(total);
  let sum = 0;
  for (let i = 0; i < prix.length; i++) {
    sum += prix[i].textContent * qtes[i].textContent;
    total.textContent = sum;
  }
}
for (const plusbtn of plusBtns) {
  plusbtn.addEventListener("click", function () {
    // console.log(plusbtn.nextElementSibling.textContent);
    plusbtn.nextElementSibling.textContent++;
    total();
  });
}
for (const moinbtn of moinBtns) {
  moinbtn.addEventListener("click", function () {
    if (moinbtn.previousElementSibling.textContent > 0) {
      moinbtn.previousElementSibling.textContent--;
    }
    total();
  });
}
for (const deletbnt of deletBtns) {
  deletbnt.addEventListener("click", function () {
    deletbnt.parentElement.parentElement.parentElement.remove();
    total();
  });
}
for (const favoriebtn of favorieBtns) {
  favoriebtn.addEventListener("click", function () {
    console.log("ok");
    favoriebtn.classList.toggle("toggelheart");
  });
}

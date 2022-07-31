let burger = document.querySelector(".header__burger")
let header = document.querySelector(".header")
let body = document.querySelector("body")

burger.onclick = function() {
    header.classList.toggle("header--active")
    body.classList.toggle("fixed-body")
}

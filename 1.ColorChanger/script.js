 var main = document.querySelector(".main")
//  var box = document.querySelectorAll(".box")
 var box1 = document.querySelector(".box1")
 var box2 = document.querySelector(".box2")
 var box3 = document.querySelector(".box3")
 var box4 = document.querySelector(".box4")
 var box5 = document.querySelector(".box5")

 box1.addEventListener("click", function() {
    main.style.backgroundColor = "red"
 })
 box2.addEventListener("click", function() {
    main.style.backgroundColor = "blue"
 })
 box3.addEventListener("click", function() {
    main.style.backgroundColor = "brown"
 })
 box4.addEventListener("click", function() {
    main.style.backgroundColor = "green"
 })
 box5.addEventListener("click", function() {
    main.style.backgroundColor = "cyan"
 })
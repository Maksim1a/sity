let text = document.getElementById("w")
text.innerHTML = "<b> это новый текст </b>"
text.innerText = "<b> это супер новый текст </b>"



let block1 = document.createElement("main")

block1.style.backgroundColor = "red"
block1.style.width = "1000px"
block1.style.height = "200px"

document.querySelector('body').append(block1)

let block2 = document.createElement("header")


block2.style.backgroundColor = "green"
block2.style.width = "1000px"
block2.style.height = "200px"

document.querySelector('body').insertBefore(block2, block1)

let block1_div = document.createElement("div")
block1_div.className = "content"

block1_div.style.backgroundColor = "blue"

block1_div.style.width = "200px"
block1_div.style.height = "200px"

document.querySelector('main').append(block1_div)

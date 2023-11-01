// console.log(document)
const divL = document.createElement('div')
console.log(divL)
divL.innerText = "Hello!"
const bodyEl = document.getElementById("bodyID")
document.getElementsByClassName("bodyClass")
document.querySelector("#bodyID") //you can use css selectors to catch the element
document.querySelector(".bodyClass")

//querySelector - if you have many with the same class/id/whatever it will be catch the first one.
//querySelectorAll - will find everyone and return ARRAY - NodeList

// const allRoot = document.querySelectorAll(".root")
// console.log(allRoot)

bodyEl.appendChild(divL) //add  the element in the end of the parent elemnt
const btn = document.createElement("button")
const inputEl = document.createElement("input")
btn.innerText = "Kristina" //add text in the element
bodyEl.appendChild(btn)
bodyEl.appendChild(inputEl)


const inputEl2 = document.createElement("input")
inputEl2.setAttribute("name", "inputSecond") //setAttribute(name Of attribute, value of attribute )
inputEl2.setAttribute("placeholder", "some new input")
inputEl2.style.background = "red"
inputEl2.style.color = "black"
inputEl2.classList.add("inputStyleCSS") // remove() toggle()
//inputEl2.classList.remove("inputStyleCSS") // remove() toggle()
const newEl = document.querySelector(".elToInsert")
newEl.appendChild(inputEl2)




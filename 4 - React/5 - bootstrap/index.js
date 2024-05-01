const select = document.querySelector("select[name=select-options]")
const color = document.querySelector("input[name=colorChange]")
const root = document.querySelector(".root")
const body  =document.querySelector("body")

console.log(select)

const showSelect = () => {
    root.innerHTML = select.value
}

const setBackgroundColor = () => {
body.style.backgroundColor = color.value
}


// const elBody = document.querySelector('body')

// const elDiv = document.createElement('div')

// elBody.appendChild(elDiv)

// const imgEl = document.createElement('img')


// //<img src="https://zelenyjmir.ru/wp-content/uploads/2017/06/lev-1.jpg" > 

// imgEl.setAttribute('src', 'https://zelenyjmir.ru/wp-content/uploads/2017/06/lev-1.jpg')
// imgEl.setAttribute('alt', 'Pride of liones')

// elDiv.appendChild(imgEl)
// imgEl.classList.add('image')

// const elForm = document.createElement('form')
// elDiv.appendChild(elForm)
// const elImput = document.createElement('input')
// elForm.appendChild(elImput)
// elImput.setAttribute('placeholder', 'enter URL for the line')
// elImput.setAttribute("name",'imageUrl')
// const elBtn = document.createElement('button')
// elBtn.innerText = "Change the picture"
// elForm.appendChild(elBtn)

// const altInput = document.createElement('input')
// altInput.setAttribute('placeholder', 'enter alt of picture')
// altInput.setAttribute('name', 'imageAlt')
// elForm.appendChild(altInput)

// elForm.onsubmit = (event) => {
//     event.preventDefault()
    
//     // console.log(event);

//     const url = event.target.elements.imageUrl.value
//     console.log(url);
//     const alt = event.target.elements.imageAlt.value
//     console.log(alt)
    
//     if(!url || url.length == 0) {
//         alert("url input is empty")
//     } else {
//         imgEl.setAttribute('src', url)
//     }
    
//     if(!alt || alt.length == 0) {
//         alert("alt input is empty")
//     } else {
//         imgEl.setAttribute('alt', alt)
//     }
// };

const elBody = document.querySelector('body')


const colInput = document.createElement('input')
const elDiv = document.createElement('div')
elBody.appendChild(colInput)
elBody.appendChild(elDiv)

colInput.setAttribute('name', 'changeColor')
colInput.setAttribute('type', 'color')
colInput.style.width = '100px'
colInput.style.height = '50px'
elDiv.style.background = 'red'
elDiv.style.width = '300px'
elDiv.style.height = '200px'

// colInput.onchange = (event) => {
//     const colorValue = event.target.value //the value of the color from the input type color
//     console.log(colorValue)
    
//     elDiv.style.background = colorValue // the background of div equel to color value
//     //elDiv.style.background = event.target.value
// }

colInput.addEventListener("change", (event)=>{
    const colorValue = event.target.value
    console.log(colorValue)
    
    elDiv.style.background = event.target.value
}) //two parametrs - type of event, function that will be work 


const textInput = document.createElement('input')
textInput.setAttribute('name', 'text')
textInput.setAttribute('type', 'text')
elBody.appendChild(textInput)

textInput.addEventListener('keyup', (event) =>{
const textValue = event.target.value
console.log(textValue)
elDiv.innerText = textValue
})
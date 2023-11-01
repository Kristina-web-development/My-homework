const root = document.querySelector("#root")

// const x = 4
// root.innerHTML = `
//     <h1>Title is h1</h1>
//     <p>Text is ${x} symbols</p>
// `

// const arr = ["a","b","c","d","e"]

// let html = ""

// console.log(html);

// arr.forEach((letter, index)=>{
//     html += `
//         <li>Our index is ${index} and the letter is ${letter}</li>
//     `
// })

// console.log(html);

// root.innerHTML = `<ul>${html}</ul>`

const tasks = [
    {text:"Go to sleep"},
    {text:"Take a shower"},
    {text:"Make dinner"},
]

let text = ''

tasks.forEach((task)=> {
text += `
<li>${task.text}</li>
`
})

root.innerHTML = `<ol>${text}</ol>`


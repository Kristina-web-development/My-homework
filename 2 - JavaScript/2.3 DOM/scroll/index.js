const oneDiv = document.querySelector(".oneDiv")
const twoDiv = document.querySelector(".twoDiv")
const threeDiv = document.querySelector(".threeDiv")

const oneDivBtn = document.querySelector(".oneDiv > button")
const twoDivBtn = document.querySelector(".twoDiv > button")
const threeDivBtn = document.querySelector(".threeDiv > button")
const upBtn = document.querySelector('.up')

oneDivBtn.addEventListener('click', () => {
    twoDiv.scrollIntoView({
        behavior: "smooth",
        block: "end",

    })
})

upBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
})

twoDivBtn.addEventListener('dblclick', () => {
    threeDiv.scrollIntoView({
        behavior: 'smooth',
        block: "center",
    })
})

window.addEventListener('scroll', () => {
    const scrollWindow = window.scrollY
    console.log(scrollWindow)

    if (scrollWindow > 800) {
        twoDiv.style.background = 'red'

    } else (twoDiv.style.background = 'blueviolet')
})


// threeDivBtn.onscroll = () => {
//     oneDiv.scrollIntoView({
//     //top: 0,    
//     behavior: 'smooth',    
// })
// };


threeDivBtn.addEventListener('click', () => {
    oneDiv.scrollIntoView({
    
        behavior: 'smooth',
    })
   
})

threeDivBtn.addEventListener('mouseenter', ()=>{
    threeDivBtn.style.background = 'yellow'
    threeDivBtn.style.width = '150px'
})

threeDivBtn.addEventListener('mouseleave', ()=> {
    threeDivBtn.style = ''
    // threeDivBtn.style.background = 'buttonface'
    // threeDivBtn.style.width = "84px"
})
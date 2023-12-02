// const name: string = "Kristina"

// localStorage.setItem("someName", name)

// const getname = localStorage.getItem("someName")
// console.log(getname);

const saveNewName = () =>{
    const name = prompt("Enter name")
    localStorage.setItem("newName", name)
}

const getOldName = () => {
    const oldName = localStorage.getItem("newName")
    console.log(oldName);
}

const clearName  = () => {
    localStorage.removeItem("newName")
}
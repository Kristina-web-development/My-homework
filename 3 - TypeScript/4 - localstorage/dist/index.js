// const name: string = "Kristina"
// localStorage.setItem("someName", name)
// const getname = localStorage.getItem("someName")
// console.log(getname);
var saveNewName = function () {
    var name = prompt("Enter name");
    localStorage.setItem("newName", name);
};
var getOldName = function () {
    var oldName = localStorage.getItem("newName");
    console.log(oldName);
};
var clearName = function () {
    localStorage.removeItem("newName");
};

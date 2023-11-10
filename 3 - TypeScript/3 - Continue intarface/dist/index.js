var arrOfUsers = [
    { id: 1, name: "Kristina", age: 25, student: true },
    {
        id: 2,
        name: "Katya",
        age: 18,
        student: false
    },
];
var manageUser = {
    users: arrOfUsers,
    showAllUsersName: function () {
        return this.users.forEach(function (user) {
            console.log("the name is " + user.name);
        });
    },
    addNewUser: function (id, name, age, student) {
        this.users.push({ id: id, name: name, age: age, student: student });
        return this.users;
    },
    updateUserName: function (id, name) {
        var userFind = this.users.find(function (user) {
            return user.id == id; // сравнение 
        });
        userFind.name = name; //- одно ровно это значит поменять одно значение на другое 
        return userFind;
    },
    updateUserStudent: function (id, student) {
        var userFind = this.users.find(function (user) {
            return user.id == id; // сравнение 
        });
        userFind.student = student; //- одно ровно это значит поменять одно значение на другое 
        return userFind;
    }
};
manageUser.showAllUsersName();
var handleAddNew = function () {
    var id = +prompt("enter your id");
    var name = prompt("Enter your name");
    var age = +prompt("Enter your age");
    var student = confirm("Are you stident");
    console.log(manageUser.addNewUser(id, name, age, student));
};
var handleUpdateName = function () {
    var id = +prompt("Enter your id");
    var name = prompt("Enter new name");
    console.log(manageUser.updateUserName(id, name));
};
var handleUpdateStudent = function () {
    var id = +prompt("Enter your id");
    var student = confirm("Enter new value");
    console.log(manageUser.updateUserStudent(id, student));
};

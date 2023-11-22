interface User {
    id: number
  name: string;
  age: number;
  student: boolean;
}

const arrOfUsers: Array<User> = [
  { id: 1, name: "Kristina", age: 25, student: true },
  {
    id: 2,
    name: "Katya",
    age: 18,
    student: false
  },
];

const manageUser = {
    users: arrOfUsers,
    showAllUsersName: function() {
        return this.users.forEach(user => {
            console.log(`the name is ${user.name}`);
        });
    },
    addNewUser: function (id: number, name: string, age: number, student: boolean): Array<User> {
        this.users.push({id, name,  age, student})
        return this.users
    },
    updateUserName: function(id: number, name: string):User  {
        const userFind  = this.users.find(user=>{
            return user.id == id // сравнение 
        })

        userFind.name = name //- одно ровно это значит поменять одно значение на другое 
        return userFind
    },
    updateUserStudent: function(id: number, student: boolean): User {

        const userFind  = this.users.find(user=>{
            return user.id == id 
        })

        userFind.student = student  
        return userFind
    },
    deleteUser: function(id: number): Array<User> {
       //this.users.delete({id, name,  age, student})

       //filter // может отфельтровать все обьекты торомые мы хотим получить или не хотим
       this.users = this.users.filter(user => user.id !== id)

        
        return this.users
    }
}

manageUser.showAllUsersName()

const handleAddNew = () =>{
    const id: number = +prompt("enter your id")
    const name: string = prompt("Enter your name")
    const age: number = +prompt("Enter your age")
    const student: boolean = confirm("Are you stident")

    console.log(manageUser.addNewUser(id, name, age, student))
}

const handleUpdateName = () => {
    const id: number = +prompt("Enter your id")
    const name: string  = prompt("Enter new name")

    console.log(manageUser.updateUserName(id, name));
}

const handleUpdateStudent = () => {
    const id: number = +prompt("Enter your id")
    const student: boolean  = confirm("Enter new value")
    
    console.log(manageUser.updateUserStudent(id, student));
}

const handleDeleteUser = () => {
    const id: number = +prompt("Enter your id")
    
    console.log(manageUser.deleteUser(id))
}

//const aaa =  manageUser.users.filter(user => user.name.includes("Ka"))
const aaa =  manageUser.users.filter(user => user.name == "Kristin2342324a")
console.log(aaa);

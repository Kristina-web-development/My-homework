// 1. Массив в длину 3 единицы. Включает в себя 3 объекта с задачами. 
//    Объект должен включать в себя {taskTitle:"....", taskId:"...", taskDone: true/false}
// 2. Определить какие данные есть в массиве (interface/type)
var arrOfTask = [
    { taskTitle: "HTML + CSS", taskId: 1, taskDone: true },
    { taskTitle: "JavaScript", taskId: 2, taskDone: false },
    { taskTitle: "TypeScript", taskId: 3, taskDone: true },
];
// 3. Вернуть все задачи которые закончены.
// const completedTasks = arrOfTask.filter(task => task.taskDone === true);
// console.log(completedTasks);
// 4. Вернуть все задачи в которых включены буквы of/eat/go и т.д. на твоё усмотрение.
// const tasksWithEat = arrOfTask.filter(task => task.taskTitle.includes('Scr'));
// console.log(tasksWithEat);
// 5. Вернуть новый массив в котором кажлый taskId начинается с 123-....
// const newArrayWithPrefix = arrOfTask.map(task => ({
//     ...task, taskId: `123-${task.taskId}`
//   }));
//   console.log(newArrayWithPrefix);
// 6. Отсортировать в алфавитном порядке все задачки.
// const sortedTasks = arrOfTask.slice().sort((a, b) => a.taskTitle.localeCompare(b.taskTitle));
// console.log(sortedTasks);
// const sortedTasks = arrOfTask.sort((a, b) =>
//     a.taskTitle.localeCompare(b.taskTitle));
// console.log(sortedTasks);

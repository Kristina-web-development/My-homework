import React, { useState, ChangeEvent, KeyboardEvent, FC } from "react";
import "./ToDoInput.css";
import iconcrossgray from "../assets/images/iconcrossgray.png"

interface Task {
  text: string;
  completed: boolean;
}

const ToDoInput: FC<Task> = () => {
  const [tasks, setTasks] = useState<Array<Task>>([]);
  const [newTask, setNewTask] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  //   const handleKeyPress = (e) => {
  //     if (e.key === 'Enter' && newTask.trim() !== '') {
  //       setTasks([...tasks, newTask.trim()]);
  //       setNewTask('');
  //     }
  //   };
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask.trim(), completed: false }]);
      setNewTask("");
    }
  };

  const handleCheckboxChange = (index: number) => {
    const newTasks = tasks.map((task, taskIndex) => {
      if (taskIndex === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const handleDeleteTask = (index: number) => {
    console.log(index);

    setTasks((tasks) => {
      return tasks.filter((task, taskIndex) => {
        return taskIndex != index;
      });
    });
  };

  return (
    <div className="container">
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        id="input"
        placeholder="Add a new task"
      />
      <ul>
        {/* {tasks.map((task, index) => (
          <li key={index}><input type="checkbox" id="checkbox" />{task}</li>
        ))} */}
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}>
            <label className="custom-checkbox">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleCheckboxChange(index)}
              />
              <span className="checkmark"></span>
              {task.text}
            </label>
            <button onClick={() => handleDeleteTask(index)}><img className="icon-button" src={iconcrossgray} /></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoInput;

import { useState } from "react";
function Todolist() {
  const [tasks, setTasks] = useState(["eatdinner", "havebreakfast", "gotogym"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTaskList = tasks.filter((_, i) => i !== index);
    setTasks(updatedTaskList);
  }

  function moveUp(index) {
    if (index > 0) {
      const updatedlist = [...tasks];
      [updatedlist[index], updatedlist[index - 1]] = [
        updatedlist[index - 1],
        updatedlist[index],
      ];
      setTasks(updatedlist);
    }
  }

  function moveDown(index) {
    const updatedlist = [...tasks];
    if (index < tasks.length - 1) {
      [updatedlist[index], updatedlist[index + 1]] = [
        updatedlist[index + 1],
        updatedlist[index],
      ];
      setTasks(updatedlist);
    }
  }

  return (
    <div className="container">
      <h1>Todo List</h1>

      <div className="content">
        <input
          type="text"
          placeholder="Add new tasks"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-btn" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li>
            <span className="text">{task}</span>
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="up-btn" onClick={() => moveUp(index)}>
              ⬆️
            </button>
            <button className="down-btn" onClick={() => moveDown(index)}>
              ⬇️
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Todolist;

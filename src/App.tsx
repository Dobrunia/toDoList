import React, { useState } from "react";
import "./App.css";
import { TaskType, Todolist } from "./Todolist";

function App() {
  const hi: string = "Привет";

  let [tasks, setTasks] = useState<Array<TaskType>>([
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
    { id: 4, title: "Hello world", isDone: true },
    { id: 5, title: "I am Happy", isDone: false },
    { id: 6, title: "Yo", isDone: false },
  ]);

  function removeTask(id: number) {
    setTasks(tasks.filter((j) => j.id !== id));
  }
  return (
    <div className="App">
      <Todolist header={hi} tasks={tasks} removeTask={removeTask} />
    </div>
  );
}

export default App;

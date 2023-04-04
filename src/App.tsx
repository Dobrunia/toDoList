import React from "react";
import "./App.css";
import { TaskType, Todolist } from "./Todolist";

function App() {
  const data: Array<TaskType> = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
    { id: 4, title: "Hello world", isDone: true },
    { id: 5, title: "I am Happy", isDone: false },
    { id: 6, title: "Yo", isDone: false },
  ];
  return (
    <div className="App">
      <Todolist tasks={data} />
    </div>
  );
}

export default App;

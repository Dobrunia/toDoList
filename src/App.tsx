import React from "react";
import "./App.css";
import { TaskType, Todolist } from "./components/Todolist";
import { v1 } from "uuid";

function App() {
  const data: Array<TaskType> = [
    { id: v1(), title: "HTML&CSS", isDone: true },
    { id: v1(), title: "JS", isDone: true },
    { id: v1(), title: "ReactJS", isDone: false },
    { id: v1(), title: "Hello world", isDone: true },
    { id: v1(), title: "I am Happy", isDone: false },
    { id: v1(), title: "Yo", isDone: false },
  ];
  return (
    <div className="App">
      <Todolist tasks={data} />
    </div>
  );
}

export default App;

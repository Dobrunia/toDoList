import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { v1 } from "uuid";

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

type FiltersTasksType = "all" | "completed" | "active";

type HeaderType = {
  tasks: Array<TaskType>;
};

export const Todolist = (props: HeaderType) => {
  let [tasks, setTasks] = useState<Array<TaskType>>(props.tasks);
  let [filter, setFilter] = useState<FiltersTasksType>("all");
  const [newTasktitle, setNewTasktitle] = useState("");

  function addTasks() {
    if (newTasktitle !== "") {
      let newTask = { id: v1(), title: newTasktitle, isDone: false };
      let newTasks = [newTask, ...tasks];
      setNewTasktitle("");
      setTasks(newTasks);
    }
  }

  const collanderFoo = () => {
    let tasksForToDoList = tasks;
    if (filter === "completed") {
      tasksForToDoList = tasks.filter((e) => e.isDone === true);
    } else if (filter === "active") {
      tasksForToDoList = tasks.filter((e) => e.isDone === false);
    }
    return tasksForToDoList;
  };

  function onChangeInput(e: ChangeEvent<HTMLInputElement>) {
    setNewTasktitle(e.currentTarget.value);
  }

  function onEnterAdd(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      addTasks();
    }
  }

  return (
    <div className="Todolist">
      <div>
        <h3>{}</h3>
        <div>
          <input
            value={newTasktitle}
            onChange={onChangeInput}
            onKeyPress={onEnterAdd}
          />
          <button onClick={addTasks}>+</button>
        </div>
        <ul>
          {collanderFoo().map((e) => {
            function removeTask() {
              setTasks(tasks.filter((f) => f.id !== e.id));
            }

            return (
              <li key={e.id}>
                <input type="checkbox" checked={e.isDone} />
                <span>{e.title}</span>
                <button onClick={removeTask}>X</button>
              </li>
            );
          })}
        </ul>
        <div>
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("active")}>Active</button>
          <button onClick={() => setFilter("completed")}>Completed</button>
        </div>
      </div>
    </div>
  );
};

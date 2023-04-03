import React, { useState } from "react";

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};
type FiltersTasksType = "all" | "completed" | "active";

type HeaderType = {
  header: string;
  tasks: Array<TaskType>;
  removeTask: (e: number) => void;
};

export const Todolist = (props: HeaderType) => {
  let [filter, setFilter] = useState<FiltersTasksType>();

  function changeFilter(value: FiltersTasksType) {
    setFilter(value);
  }

  let tasksForToDoList = props.tasks;
  if (filter === "completed") {
    tasksForToDoList = props.tasks.filter((e) => e.isDone === true);
  } else if (filter === "active") {
    tasksForToDoList = props.tasks.filter((e) => e.isDone === false);
  }

  return (
    <div className="Todolist">
      <div>
        <h3>{props.header}</h3>
        <div>
          <input />
          <button>+</button>
        </div>
        <ul>
          {tasksForToDoList.map((e) => {
            return (
              <li key={e.id}>
                <input type="checkbox" checked={e.isDone} />
                <span>{e.title}</span>
                <button onClick={() => props.removeTask(e.id)}>X</button>
              </li>
            );
          })}
        </ul>
        <div>
          <button onClick={() => changeFilter("all")}>All</button>
          <button onClick={() => changeFilter("active")}>Active</button>
          <button onClick={() => changeFilter("completed")}>Completed</button>
        </div>
      </div>
    </div>
  );
};

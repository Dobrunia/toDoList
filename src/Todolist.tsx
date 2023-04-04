import React, { useState } from "react";

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};
type FiltersTasksType = "all" | "completed" | "active";

type HeaderType = {
  tasks: Array<TaskType>;
};

export const Todolist = (props: HeaderType) => {
  let [tasks, setTasks] = useState<Array<TaskType>>(props.tasks);

  function removeTask(id: number) {
    setTasks(tasks.filter((f) => f.id !== id));
  }
  let [filter, setFilter] = useState<FiltersTasksType>();

  function changeFilter(value: FiltersTasksType) {
    setFilter(value);
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

  return (
    <div className="Todolist">
      <div>
        <h3>{}</h3>
        <div>
          <input />
          <button>+</button>
        </div>
        <ul>
          {collanderFoo().map((e) => {
            return (
              <li key={e.id}>
                <input type="checkbox" checked={e.isDone} />
                <span>{e.title}</span>
                <button onClick={() => removeTask(e.id)}>X</button>
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

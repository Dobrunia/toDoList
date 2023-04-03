import React from "react";
import { FiltersTasksType } from "./App";

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

type HeaderType = {
  header: string;
  tasks: Array<TaskType>;
  removeTask: (id: number) => void;
  changeFilter: (value: FiltersTasksType) => void;
};

export const Todolist = (props: HeaderType) => {
  return (
    <div className="Todolist">
      <div>
        <h3>{props.header}</h3>
        <div>
          <input />
          <button>+</button>
        </div>
        <ul>
          {props.tasks.map((e) => {
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
          <button onClick={() => props.changeFilter("all")}>All</button>
          <button onClick={() => props.changeFilter("active")}>Active</button>
          <button onClick={() => props.changeFilter("completed")}>
            Completed
          </button>
        </div>
      </div>
    </div>
  );
};

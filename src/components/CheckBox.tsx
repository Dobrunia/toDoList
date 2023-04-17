import React, { ChangeEvent } from "react";
import { TaskType } from "./Todolist";
import styles from "./Todolist.module.css";

type PropsType = {
  tasksForToDoList: TaskType[];
  tasks: TaskType[];
  setTasks: (e: TaskType[]) => void;
};

export function CheckBox(props: PropsType) {
  function removeTask(taskId: string) {
    props.setTasks(props.tasks.filter((f) => f.id !== taskId));
  }

  function onChangeStatus(
    event: ChangeEvent<HTMLInputElement>,
    taskId: string
  ) {
    const task = props.tasks.find((el) => el.id === taskId);
    if (task) {
      task.isDone = event.currentTarget.checked;
    }
    props.setTasks([...props.tasks]);
  }
  return (
    <ul>
      {props.tasksForToDoList.map((e) => {
        return (
          <li key={e.id} className={e.isDone ? styles.isDone : ""}>
            <input
              type="checkbox"
              checked={e.isDone}
              onChange={(event) => onChangeStatus(event, e.id)}
            />
            <span>{e.title}</span>
            <button onClick={() => removeTask(e.id)}>X</button>
          </li>
        );
      })}
    </ul>
  );
}

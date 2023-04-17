import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import styles from "./Todolist.module.css";
import { v1 } from "uuid";
import { CheckBox } from "./CheckBox";
import { Button } from "./Button";

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

export type FiltersTasksType = "all" | "completed" | "active";

type HeaderType = {
  tasks: Array<TaskType>;
};

export const Todolist = (props: HeaderType) => {
  const [tasks, setTasks] = useState<Array<TaskType>>(props.tasks);
  const [filter, setFilter] = useState<FiltersTasksType>("all");
  const [newTasktitle, setNewTasktitle] = useState("");
  const [error, setError] = useState<string | null>(null);

  function addTasks() {
    if (newTasktitle.trim() !== "") {
      const newTask = { id: v1(), title: newTasktitle.trim(), isDone: false };
      setNewTasktitle("");
      setTasks([newTask, ...tasks]);
    } else {
      setError("Title ir required!");
    }
  }

  function collanderFoo() {
    let tasksForToDoList = tasks;
    if (filter === "completed") {
      tasksForToDoList = tasks.filter((e) => e.isDone === true);
    } else if (filter === "active") {
      tasksForToDoList = tasks.filter((e) => e.isDone === false);
    }
    return tasksForToDoList;
  }

  function onChangeInput(e: ChangeEvent<HTMLInputElement>) {
    setError(null);
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
        <div>
          <input
            className={error ? styles.error : ""}
            value={newTasktitle}
            onChange={onChangeInput}
            onKeyDown={onEnterAdd}
          />
          <button onClick={addTasks}>+</button>
        </div>
        {error && <div className={styles.errorMessage}>{error}</div>}
        <CheckBox
          tasksForToDoList={collanderFoo()}
          tasks={tasks}
          setTasks={setTasks}
        />
        <div>
          <Button name={"all"} filter={filter} setFilter={setFilter}/>
          <Button name={"completed"} filter={filter} setFilter={setFilter}/>
          <Button name={"active"} filter={filter} setFilter={setFilter}/>
        </div>
      </div>
    </div>
  );
};

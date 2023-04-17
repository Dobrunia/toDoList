import React from "react";
import styles from "./Todolist.module.css";
import { FiltersTasksType } from "./Todolist";

type PropsType = {
  name: FiltersTasksType;
  filter: FiltersTasksType;
  setFilter: (el: FiltersTasksType) => void;
};

export function Button(props: PropsType) {
  return (
    <button
      className={props.filter === props.name ? styles.activeBtn : ""}
      onClick={() => props.setFilter(props.name)}
    >
      {props.name}
    </button>
  );
}

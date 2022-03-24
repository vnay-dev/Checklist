import React from "react";
import { Actions, Todo } from "../../models";
import TaskCard from "../TaskCard/TaskCard";
import "./styles.css";

interface Props {
  taskList: Todo[];
  setTaskLists: React.Dispatch<React.SetStateAction<Todo[]>>;
  dispatch: React.Dispatch<Actions>;
}

const TaskList: React.FC<Props> = ({ taskList, setTaskLists, dispatch }) => {
  return (
    <div className="list">
      {taskList.map((item) => (
        <TaskCard
          key={item.id}
          currTask={item}
          setTaskLists={setTaskLists}
          taskList={taskList}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
};

export default TaskList;

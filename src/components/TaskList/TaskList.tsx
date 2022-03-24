import React from "react";
import { Todo } from "../../models";
import TaskCard from "../TaskCard/TaskCard";
import "./styles.css";

interface Props {
  taskList: Todo[];
  setTaskLists: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TaskList: React.FC<Props> = ({ taskList, setTaskLists }) => {
  return (
    <div className="list">
      {taskList.map((item) => (
        <TaskCard
          key={item.id}
          task={item}
          setTaskLists={setTaskLists}
          taskList={taskList}
        />
      ))}
    </div>
  );
};

export default TaskList;

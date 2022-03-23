import React from "react";
import { Todo } from "../../models";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import './styles.css'

interface Props {
  task: Todo;
  setTaskLists: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TaskCard: React.FC<Props> = ({ task, setTaskLists }) => {
  return (
    <form className="task-card">
      <span>{task.task}</span>
      <div className="task-functions">
        <AiFillEdit />
        <AiFillDelete />
        <MdDone/>
      </div>
    </form>
  );
};

export default TaskCard;

import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../../models";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";

interface Props {
  task: Todo;
  setTaskLists: React.Dispatch<React.SetStateAction<Todo[]>>;
  taskList: Todo[];
}

const TaskCard: React.FC<Props> = ({ task, setTaskLists, taskList }) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [toEditTask, setToEditTask] = useState<string>(task.task);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleDone = (id: number) => {
    setTaskLists(
      taskList.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  const handleDelete = (id: number) => {
    setTaskLists(taskList.filter((item) => item.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    if (!!toEditTask) {
      setTaskLists(
        taskList.map((item) =>
          item.id === id ? { ...task, task: toEditTask } : item
        )
      );
      setEditMode(false);
    }
  };

  useEffect(()=>{
    inputRef.current?.focus()
  },[editMode])

  return (
    <form className="task-card" onSubmit={(e) => handleEdit(e, task.id)}>
      {editMode ? (
        <input
          ref={inputRef}
          placeholder={task.task}
          onChange={(e) => setToEditTask(e.target.value)}
        />
      ) : task.isCompleted ? (
        <s>{task.task}</s>
      ) : (
        <span>{task.task}</span>
      )}

      <div className="task-functions">
        <span
          className="icon"
          onClick={() => {
            if (!editMode && !task.isCompleted) {
              setEditMode(!editMode);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(task.id)}>
          <AiFillDelete />
        </span>
        <span onClick={() => handleDone(task.id)} className="icon">
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default TaskCard;

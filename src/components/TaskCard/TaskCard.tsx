import React, { useEffect, useRef, useState } from "react";
import { Actions, Todo } from "../../models";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";

interface Props {
  currTask: Todo;
  setTaskLists: React.Dispatch<React.SetStateAction<Todo[]>>;
  taskList: Todo[];
  dispatch: React.Dispatch<Actions>;
}

const TaskCard: React.FC<Props> = ({
  currTask,
  setTaskLists,
  taskList,
  dispatch,
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [toEditTask, setToEditTask] = useState<string>(currTask.task);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleDone = (id: number) => {
    dispatch({ type: "Complete", payload: id });
  };

  const handleDelete = (id: number) => {
    dispatch({ type: "Remove", payload: id });
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    if (!!toEditTask) {
      dispatch({
        type: "Edit",
        payload: {
          id: id,
          currTask: currTask,
          toEditTask: toEditTask,
        },
      });
      setEditMode(false);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [editMode]);

  return (
    <form className="task-card" onSubmit={(e) => handleEdit(e, currTask.id)}>
      {editMode ? (
        <input
          ref={inputRef}
          placeholder={currTask.task}
          onChange={(e) => setToEditTask(e.target.value)}
        />
      ) : currTask.isCompleted ? (
        <s>{currTask.task}</s>
      ) : (
        <span>{currTask.task}</span>
      )}

      <div className="task-functions">
        <span
          className="icon"
          onClick={() => {
            if (!editMode && !currTask.isCompleted) {
              setEditMode(!editMode);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(currTask.id)}>
          <AiFillDelete />
        </span>
        <span onClick={() => handleDone(currTask.id)} className="icon">
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default TaskCard;

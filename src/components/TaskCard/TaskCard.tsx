import React, { useEffect, useRef, useState } from "react";
import { ActionsDone, ActionsTodo, Todo } from "../../models";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";
import { Draggable } from "react-beautiful-dnd";

interface Props {
  currTask: Todo;
  setTaskLists: React.Dispatch<React.SetStateAction<Todo[]>>;
  taskList: Todo[];
  dispatch: React.Dispatch<ActionsTodo>;
  dispatchDone: React.Dispatch<ActionsDone>;
  index: number;
  idList: string;
}

const TaskCard: React.FC<Props> = ({
  currTask,
  setTaskLists,
  taskList,
  dispatch,
  dispatchDone,
  idList,
  index,
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [toEditTask, setToEditTask] = useState<string>(currTask.task);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleDone = (id: number) => {
    if (idList === "done") {
      dispatchDone({ type: "CompleteDoneList", payload: id });
    } else {
      dispatch({ type: "Complete", payload: id });
    }
  };

  const handleDelete = (id: number) => {
    if (idList === "done") {
      dispatchDone({ type: "RemoveDoneList", payload: id });
    } else {
      dispatch({ type: "Remove", payload: id });
    }
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    if (!!toEditTask) {
      if (idList === "done") {
        dispatchDone({
          type: "EditDoneList",
          payload: {
            id: id,
            currTask: currTask,
            toEditTask: toEditTask,
          },
        });
      } else {
        dispatch({
          type: "Edit",
          payload: {
            id: id,
            currTask: currTask,
            toEditTask: toEditTask,
          },
        });
      }
      setEditMode(false);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [editMode]);

  return (
    <Draggable draggableId={currTask.id.toString()} index={index}>
      {(provided) => (
        <form
          className="task-card"
          onSubmit={(e) => handleEdit(e, currTask.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
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
      )}
    </Draggable>
  );
};

export default TaskCard;

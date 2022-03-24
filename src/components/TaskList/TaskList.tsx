import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Actions, Todo } from "../../models";
import TaskCard from "../TaskCard/TaskCard";
import "./styles.css";

interface Props {
  taskList: Todo[];
  setTaskLists: React.Dispatch<React.SetStateAction<Todo[]>>;
  dispatch: React.Dispatch<Actions>;
  completedTasks: Todo[];
  setCompletedTasks: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TaskList: React.FC<Props> = ({
  taskList,
  setTaskLists,
  dispatch,
  completedTasks,
  setCompletedTasks,
}) => {
  return (
    <div className="list">
      <Droppable droppableId="todolist">
        {(provided) => (
          <div
            className="todoBox"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todoBox-heading">Current tasks</span>
            {taskList.map((item, index) => (
              <TaskCard
                index={index}
                key={item.id}
                currTask={item}
                setTaskLists={setTaskLists}
                taskList={taskList}
                dispatch={dispatch}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="todolistRemove">
        {(provided) => (
          <div
            className="todoBox"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todoBox-heading">Completed tasks</span>
            {completedTasks?.map((item, index) => (
              <TaskCard
                index={index}
                key={item.id}
                currTask={item}
                setTaskLists={setCompletedTasks}
                taskList={taskList}
                dispatch={dispatch}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TaskList;

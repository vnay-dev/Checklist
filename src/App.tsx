import React, { useEffect, useReducer, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import "./App.css";
import InputField from "./components/InputField/InputField";
import TaskList from "./components/TaskList/TaskList";
import { Todo } from "./models";
import DoneListReducer from "./reducers/doneList";
import TaskReducer from "./reducers/todoList";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<string>("");
  const [taskList, setTaskLists] = useState<Todo[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Todo[]>([]);

  const [taskListState, dispatch] = useReducer(TaskReducer, taskList);
  const [doneListState, dispatchDone] = useReducer(
    DoneListReducer,
    completedTasks
  );

  const addTaskToList = (e: React.FormEvent) => {
    e.preventDefault();
    if (tasks) {
      dispatch({ type: "Add", payload: tasks });
      setTasks("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add;
    let active = taskList;
    let complete = completedTasks;

    if (source.droppableId === "todolist") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === "todolist") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }
    setCompletedTasks(complete);
    setTaskLists(active);
  };

  useEffect(() => {
    setTaskLists(taskListState);
  }, [taskListState]);

  useEffect(() => {
    setCompletedTasks(doneListState);
  }, [doneListState]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <div className="container">
          <div className="task-input">
            <span className="title">Checklist</span>
            <InputField
              tasks={tasks}
              setTasks={setTasks}
              submitTask={addTaskToList}
            />
          </div>
          <TaskList
            taskList={taskList}
            setTaskLists={setTaskLists}
            dispatch={dispatch}
            dispatchDone={dispatchDone}
            completedTasks={completedTasks}
            setCompletedTasks={setCompletedTasks}
          />
        </div>
      </div>
    </DragDropContext>
  );
};

export default App;

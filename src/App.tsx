import React, { FormEvent, useEffect, useReducer, useState } from "react";
import "./App.css";
import InputField from "./components/InputField/InputField";
import TaskList from "./components/TaskList/TaskList";
import { Todo } from "./models";
import TaskReducer from "./reducers/reducer";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<string>("");
  const [taskList, setTaskLists] = useState<Todo[]>([]);

  const [taskListState, dispatch] = useReducer(TaskReducer, taskList);

  const addTaskToList = (e: React.FormEvent) => {
    e.preventDefault();
    if (tasks) {
      dispatch({ type: "Add", payload: tasks });
      setTasks("");
    }
  };

  return (
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
        <TaskList taskList={taskListState} setTaskLists={setTaskLists} />
      </div>
    </div>
  );
};

export default App;

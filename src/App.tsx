import { FormEvent, useState } from "react";
import "./App.css";
import InputField from "./components/InputField/InputField";
import TaskList from "./components/TaskList/TaskList";
import { Todo } from "./models";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<string>("");
  const [taskList, setTaskLists] = useState<Todo[]>([]);

  const addTaskToList = (e: React.FormEvent) => {
    e.preventDefault();
    if (tasks) {
      setTaskLists([
        ...taskList,
        {
          id: Date.now(),
          task: tasks,
          isCompleted: false,
        },
      ]);
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
        <TaskList taskList={taskList} setTaskLists={setTaskLists} />
      </div>
    </div>
  );
};

export default App;

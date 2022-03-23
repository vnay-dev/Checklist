import { FormEvent, useState } from "react";
import "./App.css";
import InputField from "./components/InputField/InputField";
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
          tasks: tasks,
          isCompleted: false,
        },
      ]);
      setTasks("");
    }
  };

  console.log(taskList)

  return (
    <div className="App">
      <span className="title">Checklist</span>
      <InputField
        tasks={tasks}
        setTasks={setTasks}
        submitTask={addTaskToList}
      />
    </div>
  );
};

export default App;

import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField/InputField";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<string>("");
  console.log(tasks)

  return (
    <div className="App">
      <span className="title">Checklist</span>
      <InputField tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;

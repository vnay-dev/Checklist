import "./styles.css";

interface Props {
  tasks: string;
  setTasks: React.Dispatch<React.SetStateAction<string>>;
  submitTask: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ tasks, setTasks, submitTask }) => {
  return (
    <form className="form" onSubmit={submitTask}>
      <input
        type={"text"}
        placeholder="Enter task"
        value={tasks}
        onChange={(e) => setTasks(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default InputField;

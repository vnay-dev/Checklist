import "./styles.css";

interface Props {
  tasks: string;
  setTasks: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({ tasks, setTasks }) => {
  return (
    <form className="form">
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

import "./styles.css";

const InputField = () => {
  return (
    <form className="form">
      <input type={"text"} placeholder="Enter task" />
      <button type="submit">Add</button>
    </form>
  );
};

export default InputField;

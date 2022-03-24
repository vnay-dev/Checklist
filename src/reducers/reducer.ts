import { Actions, Todo } from "../models";

const TaskReducer = (state: Todo[], action: Actions) => {
  switch (action.type) {
    case "Add":
      return [
        ...state,
        {
          id: Date.now(),
          task: action.payload,
          isCompleted: false,
        },
      ];

    case "Complete":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      );

    case "Remove":
      return state.filter((item) => item.id !== action.payload);
    case "Edit":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...action.payload.currTask, task: action.payload.toEditTask }
          : item
      );
    default:
      return state;
  }
};

export default TaskReducer;

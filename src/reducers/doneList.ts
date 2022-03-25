import { ActionsDone, Todo } from "../models";

const DoneListReducer = (state: Todo[], action: ActionsDone) => {
  switch (action.type) {
    case "AddDoneList":
      return [
        ...state,
        {
          id: Date.now(),
          task: action.payload,
          isCompleted: false,
        },
      ];

    case "CompleteDoneList":
      console.log(state);
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      );

    case "RemoveDoneList":
      return state.filter((item) => item.id !== action.payload);

    case "EditDoneList":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...action.payload.currTask, task: action.payload.toEditTask }
          : item
      );

    default:
      return state;
  }
};

export default DoneListReducer;

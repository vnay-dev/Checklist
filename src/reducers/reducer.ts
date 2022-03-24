import { Todo } from "../models";

interface AddAction {
  type: "Add";
  payload: string;
}

interface RemoveAction {
  type: "Remove";
  payload: number;
}

interface EditAction {
  type: "Edit";
  payload: number;
}

interface CompleteAction {
  type: "Complete";
  payload: number;
}

type Actions = AddAction | RemoveAction | EditAction | CompleteAction;

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
    case "Remove":
    case "Edit":
    case "Complete":
    default:
      return state;
  }
};

export default TaskReducer;

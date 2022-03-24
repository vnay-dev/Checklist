export interface Todo {
  id: number;
  task: string;
  isCompleted: boolean;
}

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
  payload: {
    id: number;
    currTask: Todo;
    toEditTask: string;
  };
}

interface CompleteAction {
  type: "Complete";
  payload: number;
}

export type Actions = AddAction | RemoveAction | EditAction | CompleteAction;

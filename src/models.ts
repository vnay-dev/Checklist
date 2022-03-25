export interface Todo {
  id: number;
  task: string;
  isCompleted: boolean;
}
interface AddAction {
  type: "Add" | "AddDoneList";
  payload: string;
}

interface RemoveAction {
  type: "Remove" | "RemoveDoneList";
  payload: number;
}

interface EditAction {
  type: "Edit" | "EditDoneList";
  payload: {
    id: number;
    currTask: Todo;
    toEditTask: string;
  };
}

interface CompleteAction {
  type: "Complete" | "CompleteDoneList";
  payload: number;
}

export type ActionsTodo =
  | AddAction
  | RemoveAction
  | EditAction
  | CompleteAction;

interface AddActionDone {
  type: "AddDoneList";
  payload: string;
}

interface RemoveActionDone {
  type: "RemoveDoneList";
  payload: number;
}

interface EditActionDone {
  type: "EditDoneList";
  payload: {
    id: number;
    currTask: Todo;
    toEditTask: string;
  };
}

interface CompleteActionDone {
  type: "CompleteDoneList";
  payload: number;
}

export type ActionsDone =
  | AddActionDone
  | RemoveActionDone
  | EditActionDone
  | CompleteActionDone;

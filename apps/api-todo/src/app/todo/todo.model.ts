export enum TodoStatusModel {
  IN_PROGRESS = 'inprogress',
  DONE = 'done',
}

export type TodoModel = {
  id?: number;
  todo?: string;
  status?: TodoStatusModel;
};

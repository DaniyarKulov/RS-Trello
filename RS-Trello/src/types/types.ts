export interface IText {
  color: string;
  text: string;
}

export interface ITask {
  taskId: string;
  text: string;
  description?: string;
}

export interface ICard {
  cardId: string;
  title: string;
  tasks: ITask[];
  date: string;
}

export interface IBoard {
  boardId: string;
  title: string;
  cards: ICard[];
}

export interface MyInputProps {
  text?: string;
  displayClass?: string;
  editClass?: string;
  placeholder?: string;
  defaultValue?: string;
  buttonText?: string;
}

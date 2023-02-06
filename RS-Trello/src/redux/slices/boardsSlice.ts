import { IBoard } from '../../Interfaces/interfaces';

export type IBoardsState = {
  modalActive: boolean;
  boardArray: IBoard[];
};

export const initialState: IBoardsState = {
  modalActive: false,
  boardArray: [
    {
      boardId: 'board-0',
      title: 'First board',
      cards: [
        {
          cardId: 'card-0',
          title: 'Card 1',
          date: '01.01.2023',
          tasks: [
            {
              taskId: 'task-0',
              text: 'Task 1',
              description: 'Description',
            },
            {
              taskId: 'task-1',
              text: 'Task 2',
              description: 'Description',
            },
            {
              taskId: 'task-2',
              text: 'Task 3',
              description: 'Description',
            },
          ],
        },
        {
          cardId: 'card-2',
          title: 'Card 2',
          date: '15.01.2023',
          tasks: [
            {
              taskId: 'task-3',
              text: 'Task 1',
              description: 'Description',
            },
            {
              taskId: 'task-4',
              text: 'Task 2',
              description: 'Description',
            },
          ],
        },
      ],
    },
  ],
};

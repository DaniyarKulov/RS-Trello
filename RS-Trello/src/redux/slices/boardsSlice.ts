import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBoard, ICard, ITask } from '../../types/types';

type IDeleteBoardAction = {
  boardId: string;
};

type IDeleteCardAction = {
  boardId: string;
  cardId: string;
};

type IDeleteTaskAction = {
  boardId: string;
  cardId: string;
  taskId: string;
};

type ISortAction = {
  boardIndex: number;
  droppableIdStart: string;
  droppableIdEnd: string;
  droppableIndexStart: number;
  droppableIndexEnd: number;
  draggableId: string;
};

type IAddBoardAction = {
  board: IBoard;
};

type IAddTaskAction = {
  boardId: string;
  cardId: string;
  task: ITask;
};

type IAddCardAction = {
  boardId: string;
  card: ICard;
};

export type IBoardsState = {
  modalActive: boolean;
  boardArray: IBoard[];
};

const initialState: IBoardsState = {
  modalActive: false,
  boardArray: [
    {
      boardId: 'board-0',
      title: 'First board',
      cards: [],
    },
  ],
};

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    addBoard: (state: IBoardsState, { payload }: PayloadAction<IAddBoardAction>) => {
      state.boardArray.push(payload.board);
    },

    addCard: (state: IBoardsState, { payload }: PayloadAction<IAddCardAction>) => {
      state.boardArray.map((board) =>
        board.boardId === payload.boardId ? { ...board, cards: board.cards.push(payload.card) } : board
      );
    },

    addTask: (state: IBoardsState, { payload }: PayloadAction<IAddTaskAction>) => {
      state.boardArray.map((board) =>
        board.boardId === payload.boardId
          ? {
              ...board,
              cards: board.cards.map((card: ICard) =>
                card.cardId === payload.cardId ? { ...card, tasks: card.tasks.push(payload.task) } : card
              ),
            }
          : board
      );
    },

    deleteBoard: (state: IBoardsState, { payload }: PayloadAction<IDeleteBoardAction>) => {
      state.boardArray = state.boardArray.filter((board) => board.boardId !== payload.boardId);
    },

    deleteCard: (state: IBoardsState, { payload }: PayloadAction<IDeleteCardAction>) => {
      state.boardArray = state.boardArray.map((board) =>
        board.boardId === payload.boardId
          ? {
              ...board,
              cards: board.cards.filter((card: ICard) => card.cardId !== payload.cardId),
            }
          : board
      );
    },

    deleteTask: (state: IBoardsState, { payload }: PayloadAction<IDeleteTaskAction>) => {
      state.boardArray = state.boardArray.map((board) =>
        board.boardId === payload.boardId
          ? {
              ...board,
              cards: board.cards.map((card: ICard) =>
                card.cardId === payload.cardId
                  ? {
                      ...card,
                      tasks: card.tasks.filter((task: ITask) => task.taskId !== payload.taskId),
                    }
                  : card
              ),
            }
          : board
      );
    },

    sort: (state: IBoardsState, { payload }: PayloadAction<ISortAction>) => {
      if (payload.droppableIdStart === payload.droppableIdEnd) {
        const card: ICard | undefined = state.boardArray[payload.boardIndex].cards.find(
          (card: ICard) => payload.droppableIdStart === card.cardId
        );

        if (card) {
          const list = card.tasks.splice(payload.droppableIndexStart, 1);
          card?.tasks.splice(payload.droppableIndexEnd, 0, ...list);
        }
      }

      if (payload.droppableIdStart !== payload.droppableIdEnd) {
        const cardStart: ICard | undefined = state.boardArray[payload.boardIndex].cards.find(
          (card: ICard) => payload.droppableIdStart === card.cardId
        );
        if (cardStart) {
          const card = cardStart.tasks.splice(payload.droppableIndexStart, 1);
          const cardEnd: ICard | undefined = state.boardArray[payload.boardIndex].cards.find(
            (card: ICard) => payload.droppableIdEnd === card.cardId
          );
          cardEnd?.tasks.splice(payload.droppableIndexEnd, 0, ...card);
        }
      }
    },

    updateTask: (state: IBoardsState, { payload }: PayloadAction<IAddTaskAction>) => {
      state.boardArray = state.boardArray.map((board) =>
        board.boardId === payload.boardId
          ? {
              ...board,
              cards: board.cards.map((card) =>
                card.cardId === payload.cardId
                  ? {
                      ...card,
                      tasks: card.tasks.map((task) => (task.taskId === payload.task.taskId ? payload.task : task)),
                    }
                  : card
              ),
            }
          : board
      );
    },

    setModalActive: (state: IBoardsState, { payload }: PayloadAction<boolean>) => {
      state.modalActive = payload;
    },
  },
});

export const boards = boardsSlice.reducer;
export const { addBoard, deleteBoard, addCard, deleteCard, addTask, deleteTask, updateTask, sort, setModalActive } =
  boardsSlice.actions;

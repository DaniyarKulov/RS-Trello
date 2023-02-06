import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from '../../types/types';

type setModalDataAction = {
  boardId?: string;
  cardId?: string;
  task?: ITask;
};

type modalState = {
  boardId?: string;
  cardId?: string;
  task?: ITask;
};

const initialState = {
  boardId: "board-0",
  cardId: "card-0",
  task: {
    taskId: "task-0",
    text: "task 0",
    description: "description",
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalData: (
      state: modalState,
      { payload }: PayloadAction<setModalDataAction>
    ) => {
      state.boardId = payload.boardId;
      state.cardId = payload.cardId;
      state.task = payload.task;
    },
  },
});

export const modal = modalSlice.reducer;
export const { setModalData } = modalSlice.actions;

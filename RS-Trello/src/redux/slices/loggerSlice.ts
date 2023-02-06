import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILogItem } from "../../types/types";

type loggerState = {
  logArray: ILogItem[];
};

const initialState = {
  logArray: [],
};

const loggerSlice = createSlice({
  name: "logger",
  initialState,
  reducers: {
    addLog: (state: loggerState, { payload }: PayloadAction<ILogItem>) => {
      state.logArray.unshift(payload);
    },
  },
});

export const logger = loggerSlice.reducer;
export const { addLog } = loggerSlice.actions;

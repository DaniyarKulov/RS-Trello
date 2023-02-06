import { logger } from '../slices/loggerSlice';
import { boards } from '../slices/boardsSlice';
import { modal } from '../slices/modalSlice';

const reducer = {
  logger,
  modal,
  boards,
};

export default reducer;

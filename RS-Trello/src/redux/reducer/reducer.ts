import { logger } from '../slices/loggerSlice';
import { boards } from '../slices/boardsSlice';
import { modal } from '../slices/modalSlice';
import { user } from '../slices/userSlice';

const reducer = {
  logger,
  modal,
  boards,
  user,
};

export default reducer;

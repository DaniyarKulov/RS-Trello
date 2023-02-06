import React from 'react';
import { initialState } from '../../redux/slices/boardsSlice';

interface BoardListProps { }

const BoardList: React.FC<BoardListProps> = () => {
  const boards = initialState;
  return (
    <div>
      <h1>Trello:</h1>
      {boards.boardArray.map((board, ind) => (
        // eslint-disable-next-line react/button-has-type
        <button type="button" key={ind}>
          {board.title}
        </button>
      ))}
      <button type="button">Create new board</button>
    </div>
  );
};
export default BoardList;

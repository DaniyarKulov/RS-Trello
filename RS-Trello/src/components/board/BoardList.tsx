import React, { useState } from 'react';
import { IBoard } from '../../types/types';
import Form from '../form/Form';

interface BoardListProps {
  setActiveBoardId: (activeBoardId: string) => void;
  boards: IBoard[]
}

const BoardList: React.FC<BoardListProps> = ({ setActiveBoardId, boards }) => {
  const [formOpen, setFormOpen] = useState<boolean>(false);

  const addButtonHandler = () => {
    setFormOpen(!formOpen);
  };
  const handleChooseBoard = (index: number) => {
    setActiveBoardId(boards[index].boardId);
  };

  return (
    <div>
      <h1>Trello:</h1>
      {boards.map((board, ind) => (
        <button type="button" key={ind} onClick={() => handleChooseBoard(ind)}>
          {board.title}
        </button>
      ))
      }
      <div>
        {formOpen ? (
          <Form {...{ setFormOpen }} />
        ) : (
          <button onClick={addButtonHandler} type="button">Create new board</button>
        )}
      </div>
    </div >
  )
};
export default BoardList;

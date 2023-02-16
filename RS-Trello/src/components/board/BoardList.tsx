import React, { useState } from 'react';
import { useTypedSelector } from '../../hooks/reduxHooks';
import Form from '../form/Form';
import style from './BoardList.module.css'

interface BoardListProps {
  setActiveBoardId: (activeBoardId: string) => void;

}

const BoardList: React.FC<BoardListProps> = ({ setActiveBoardId }) => {
  const [formOpen, setFormOpen] = useState<boolean>(false);
  const boards = useTypedSelector(state => state.boards.boardArray);
  const addButtonHandler = () => {
    setFormOpen(!formOpen);
  };
  const handleChooseBoard = (index: number) => {
    setActiveBoardId(boards[index].boardId);
  };

  return (
    <div className="container">
      <div className={style.board}>
        {boards.map((board, ind) => (
          <button type="button" className={style.boardTitle} key={ind} onClick={() => handleChooseBoard(ind)}>
            {board.title}
          </button>
        ))
        }

        {formOpen ? (
          <Form {...{ setFormOpen }} />
        ) : (
          <button className={style.boardAdd} onClick={addButtonHandler} type="button">Create new board</button>
        )}
      </div>
    </div>

  )
};
export default BoardList;

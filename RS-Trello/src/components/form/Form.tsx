import React, { ChangeEvent, useState } from 'react';
import { v4 } from "uuid";
import { useTypedDispatch } from '../../hooks/reduxHooks';
import { addBoard } from '../../redux/slices/boardsSlice';
import { addLog } from '../../redux/slices/loggerSlice';

interface FormProps {
  setFormOpen: (open: boolean) => void;
}

const Form: React.FC<FormProps> = ({ setFormOpen }) => {
  const [text, setText] = useState<string>("");
  const dispatch = useTypedDispatch();

  const handleOnBlur = () => {
    setFormOpen(false);
  };

  const handleAddBoard = () => {
    if (text) {
      dispatch(
        addBoard({ board: { boardId: v4(), title: text, cards: [] } })
      );
      dispatch(
        addLog({
          logId: v4(),
          logMessage: `Create board: ${text}`,
          logAuthor: "User",
          logTimestamp: String(Date.now()),
        })
      );
    }
    setFormOpen(false);
  };

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        autoFocus
        onBlur={handleOnBlur}
        onChange={handleTextChange}
        placeholder="Enter new board name"
      />
      <button type='button' onMouseDown={handleAddBoard}>Enter</button>
    </div>
  )
};
export default Form;

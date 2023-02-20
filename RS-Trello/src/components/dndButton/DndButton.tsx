import React, { ChangeEvent, useState } from 'react';
import { v4 } from "uuid";
import { useTypedDispatch } from '../../hooks/reduxHooks';
import { addCard, addTask } from '../../redux/slices/boardsSlice';
import { addLog } from '../../redux/slices/loggerSlice';
import btnStyles from './DndButton.module.css'

interface DndButtonProps {
  boardId: string;
  cardId: string;
  setFormOpen: Function;
  card?: boolean;
}

const DndButton: React.FC<DndButtonProps> = ({ setFormOpen, card, cardId, boardId }) => {
  const dispatch = useTypedDispatch();
  const [text, setText] = useState("");
  console.log(setFormOpen)
  const formPlaceholder = card
    ? "Enter card title"
    : "Enter title for this task";
  const buttonTitle = card ? "Add card" : "Add task";

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const addBbuttonHandler = () => {
    if (text) {
      if (card) {
        dispatch(
          addCard({
            boardId,
            card: { cardId: v4(), title: text, tasks: [] },
          })
        );
        dispatch(
          addLog({
            logId: v4(),
            logMessage: `Create card: ${text}`,
            logAuthor: "User",
            logTimestamp: String(Date.now()),
          })
        );
      } else {
        dispatch(
          addTask({
            boardId,
            cardId,
            task: {
              taskId: v4(),
              text: text,
              description: "",
            },
          })
        );
        dispatch(
          addLog({
            logId: v4(),
            logMessage: `Create task: ${text}`,
            logAuthor: "User",
            logTimestamp: String(Date.now()),
          })
        );
      }
    }
  };

  const closeButtonHandler = () => {
    setFormOpen(false);
  };
  return (
    <div>
      <input
        placeholder={formPlaceholder}
        autoFocus
        onBlur={closeButtonHandler}
        onChange={handleTextChange}
        className = {btnStyles.dnbInput}
      />
      <div className={btnStyles.btnContainer} >
        <button className={btnStyles.addDescription} onMouseDown={addBbuttonHandler}>
          {buttonTitle}
        </button>
        <button type="button" className={btnStyles.removeDescription} onClick={closeButtonHandler}>close</button>
      </div>
    </div>
  )
};
export default DndButton;

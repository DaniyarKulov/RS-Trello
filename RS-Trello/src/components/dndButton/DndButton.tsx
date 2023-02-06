import React, { ChangeEvent, useState } from 'react';
import { v4 } from "uuid";
import { useTypedDispatch } from '../../hooks/reduxHooks';
import { addCard, addTask } from '../../redux/slices/boardsSlice';

interface DndButtonProps {
  boardId: string;
  cardId: string;
  setFormOpen: any;
  card?: boolean;
}

const DndButton: React.FC<DndButtonProps> = ({ setFormOpen, card, cardId, boardId }) => {
  const dispatch = useTypedDispatch();
  const [text, setText] = useState("");

  const formPlaceholder = card
    ? "Enter card title"
    : "Enter title for this task";
  const buttonTitle = card ? "Add card" : "Add task";

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const addBbuttonHandler = () => {
    if (text) {
      if (card) {
        dispatch(
          addCard({
            boardId,
            card: { cardId: v4(), title: text, tasks: [], date: String(new Date) },
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
      }
    }
  };

  const closeButtonHandler = () => {
    setFormOpen(false);
  };
  return (
    <div>
      <textarea
        placeholder={formPlaceholder}
        autoFocus
        onBlur={closeButtonHandler}
        onChange={handleTextChange}
      />
      <div >
        <button onMouseDown={addBbuttonHandler}>
          {buttonTitle}
        </button>
        <button type="button" onClick={closeButtonHandler}>close X</button>
      </div>
    </div>
  )
};
export default DndButton;

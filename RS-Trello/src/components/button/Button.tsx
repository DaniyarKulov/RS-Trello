import React, { useState } from 'react';
import DndButton from '../dndButton/DndButton';
import styleBtn from './Button.module.css'
interface ButtonProps {
  boardId: string
  cardId: string;
  card?: boolean;
}

const Button: React.FC<ButtonProps> = ({ card, cardId, boardId }) => {
  const [formOpen, setFormOpen] = useState(false);
  const buttonText = card ? "Add another card" : "Add new task";

  const buttonHandler = () => {
    setFormOpen(true);
  };

  return formOpen ? (
    <DndButton
      setFormOpen={setFormOpen}
      card={card ? true : false}
      boardId={boardId}
      cardId={cardId} />
  ) : (
    <div>
      <button className={styleBtn.btn} onClick={buttonHandler} type="button">{buttonText}</button>
    </div>
  )
};
export default Button;

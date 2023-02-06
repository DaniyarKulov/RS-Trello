import React from 'react';
import { ICard } from '../../Interfaces/interfaces';

interface ButtonProps {
  card: ICard;
}

const Button: React.FC<ButtonProps> = ({ card }) => (
  <div>
    <p>{card.title}</p>
    {card.tasks.map((task) => (
      <div>
        <p>{task.text}</p>
        <p>{task.description}</p>
      </div>
    ))}
    <button type="button">Add</button>
  </div>
);
export default Button;

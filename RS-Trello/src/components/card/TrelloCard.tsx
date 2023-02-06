import React from 'react';
import { ICard } from '../../Interfaces/interfaces';

interface TrelloCardProps {
  card: ICard;
}

const TrelloCard: React.FC<TrelloCardProps> = ({ card }) => (
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
export default TrelloCard;

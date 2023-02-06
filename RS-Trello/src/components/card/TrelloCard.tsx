import React from 'react';
import { ICard } from '../../types/types';
import Task from '../task/Task';

interface TrelloCardProps {
  card: ICard;
}

const TrelloCard: React.FC<TrelloCardProps> = ({ card }) => (
  <div>
    <p>{card.title}</p>
    {card.tasks.map((task, ind) => (
      <div key={ind}>
        <Task
          {...{ name: task.text, description: task.description, id: task.taskId, ind }}
        />
      </div>
    ))}
    <button type="button">Add</button>
  </div>
);
export default TrelloCard;

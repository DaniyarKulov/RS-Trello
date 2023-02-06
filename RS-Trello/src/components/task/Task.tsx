import React from 'react';
import { ICard } from '../../Interfaces/interfaces';
import TrelloCard from '../card/TrelloCard';

interface TaskProps {
  cards: ICard[];
}

const Task: React.FC<TaskProps> = ({ cards }) => (
  <div>
    <p>List</p>
    {cards.map((card) => (
      <TrelloCard {...{ card }} />
    ))}
    <p>button</p>
  </div>
);
export default Task;

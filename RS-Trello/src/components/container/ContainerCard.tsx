import React from 'react';
import { ICard } from '../../Interfaces/interfaces';
import TrelloCard from '../card/TrelloCard';

interface ContainerCardProps {
  cards: ICard[];
}

const ContainerCard: React.FC<ContainerCardProps> = ({ cards }) => (
  <div>
    <p>List</p>
    {cards.map((card) => (
      <TrelloCard {...{ card }} />
    ))}
    <p>button</p>
  </div>
);
export default ContainerCard;

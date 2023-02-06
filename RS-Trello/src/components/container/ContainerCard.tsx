import React from 'react';
import { ICard } from '../../types/types';
import Button from '../button/Button';
import TrelloCard from '../card/TrelloCard';


interface ContainerCardProps {
  cards: ICard[];
  boardId: string;
}

const ContainerCard: React.FC<ContainerCardProps> = ({ cards, boardId }) => (
  <div>
    <p>List</p>
    {cards.map((card, ind) => (
      <TrelloCard key={ind} {...{ card }} />
    ))}
    <Button card boardId={boardId} cardId='' />
  </div>
);
export default ContainerCard;

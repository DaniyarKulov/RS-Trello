import React from 'react';
import { ICard } from '../../types/types';
import Button from '../button/Button';
import TrelloCard from '../card/TrelloCard';
import containerCard from './ContainerCard.module.css';


interface ContainerCardProps {
  cards: Array<ICard>;
  boardId: string;
}

const ContainerCard: React.FC<ContainerCardProps> = ({ cards, boardId }) => (
  <div className={containerCard.wrapper}>
    {cards.map((card) => (
      <TrelloCard key={card.cardId} {...{ card, boardId }} />
    ))}
    <Button card boardId={boardId} cardId='' />
  </div>
);
export default ContainerCard;

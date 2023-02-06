import React from 'react';
import { Droppable } from "react-beautiful-dnd";
import { v4 } from 'uuid';
import { useTypedDispatch } from '../../hooks/reduxHooks';
import { setModalData } from '../../redux/slices/modalSlice';
import { deleteCard, setModalActive } from '../../redux/slices/boardsSlice';
import { addLog } from "../../redux/slices/loggerSlice";
import { ICard, ITask } from '../../types/types';
import Task from '../task/Task';
import Button from '../button/Button';
import trelloCard from './TrelloCard.module.css';

interface TrelloCardProps {
  card: ICard;
  boardId: string
}

interface handleTaskChangeProps {
  boardId: string;
  listId: string;
  taskId: string;
}

const TrelloCard: React.FC<TrelloCardProps> = ({ card, boardId }) => {
  const dispatch = useTypedDispatch();

  const handleTaskChange = (
    boardId: string,
    cardId: string,
    taskId: string,
    task: ITask
  ): void => {
    dispatch(setModalData({ boardId, cardId, task }));
    dispatch(setModalActive(true));
  };

  const handleCardDelete = (cardId: string) => {
    dispatch(deleteCard({ boardId, cardId }));
    dispatch(
      addLog({
        logId: v4(),
        logMessage: `Delete card: ${card.title}`,
        logAuthor: "User",
        logTimestamp: String(Date.now()),
      })
    );
  };

  return (
    <Droppable
      droppableId={card.cardId}>
      {provided => (
        <div
          className={trelloCard.card}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <p>{card.title}</p>
            <p onClick={() => handleCardDelete(card.cardId)}>delete</p>
          </div>
          <div className={trelloCard.tasks}>
            {card.tasks.map((task, ind) => (
              <div key={task.taskId}
                onClick={() =>
                  handleTaskChange(boardId, card.cardId, task.taskId, task)
                }>
                <Task
                  {...{ task, ind }}
                />
              </div>
            ))}
          </div>
          {provided.placeholder}
          <Button {...{ boardId, cardId: card.cardId }} />
        </div>)}
    </Droppable>

  )
};
export default TrelloCard;

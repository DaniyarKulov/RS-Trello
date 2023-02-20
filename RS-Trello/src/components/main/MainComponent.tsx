import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { deleteBoard, sort } from '../../redux/slices/boardsSlice';
import { useTypedDispatch, useTypedSelector } from '../../hooks/reduxHooks';
import BoardList from '../board/BoardList';
import ContainerCard from '../container/ContainerCard';
import { addLog } from '../../redux/slices/loggerSlice';
import { v4 } from 'uuid';
import Edit from '../edit/Edit';

function MainComponent() {
  const dispatch = useTypedDispatch();
  const [activeBoardId, setActiveBoardId] = useState('board-0');
  const modalActive = useTypedSelector((state) => state.boards.modalActive);
  const boards = useTypedSelector((state) => state.boards.boardArray);
  const getActiveBoard = boards.filter((board) => board.boardId === activeBoardId)[0];
  const cards = getActiveBoard.cards;

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;
    const sourceCard = cards.filter((card) => card.cardId === source.droppableId)[0];

    if (!destination) {
      return;
    }

    dispatch(
      sort({
        boardIndex: boards.findIndex((board) => board.boardId === activeBoardId),
        droppableIdStart: source.droppableId,
        droppableIdEnd: destination.droppableId,
        droppableIndexStart: source.index,
        droppableIndexEnd: destination.index,
        draggableId,
      })
    );
    dispatch(
      addLog({
        logId: v4(),
        logMessage: `Move "${sourceCard.tasks.filter((task) => task.taskId === draggableId)[0].text}" from card "${
          sourceCard.title
        }" to card "${cards.filter((card) => card.cardId === destination.droppableId)[0].title}"`,
        logAuthor: 'User',
        logTimestamp: String(Date.now()),
      })
    );
  };

  const handleDeleteBoard = () => {
    if (boards.length > 1) {
      dispatch(deleteBoard({ boardId: getActiveBoard.boardId }));
      dispatch(
        addLog({
          logId: v4(),
          logMessage: `Delete board: ${getActiveBoard.title}`,
          logAuthor: 'User',
          logTimestamp: String(Date.now()),
        })
      );
      const newIndexToSet = () => {
        const indexToBeDeleted = boards.findIndex((board) => board.boardId === activeBoardId);
        return indexToBeDeleted === 0 ? indexToBeDeleted + 1 : indexToBeDeleted - 1;
      };

      setActiveBoardId(boards[newIndexToSet()].boardId);
    } else {
      alert('Minimum board amount is 1');
    }
  };

  return (
    <main className="main">
      <div className="container">
        {modalActive ? <Edit /> : null}
        <BoardList {...{ setActiveBoardId }} />
        <DragDropContext onDragEnd={onDragEnd}>
          <ContainerCard cards={cards} boardId={getActiveBoard.boardId} />
        </DragDropContext>
        <button className="btn" onClick={handleDeleteBoard}>
          Delete this board
        </button>
      </div>
    </main>
    // <main>
    //   {modalActive ? <Edit /> : null}
    //   <BoardList {...{ setActiveBoardId }} />
    //   <div
    //     style={{
    //       display: 'flex',
    //       flexDirection: 'row',
    //       height: '100%',
    //     }}
    //   >
    //     <DragDropContext onDragEnd={onDragEnd}>
    //       <ContainerCard cards={cards} boardId={getActiveBoard.boardId} />
    //     </DragDropContext>
    //     <div>
    //       <button onClick={handleDeleteBoard}>Delete this board</button>
    //     </div>
    //   </div>
    // </main>
  );
}

export default MainComponent;

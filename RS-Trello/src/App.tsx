import { useState } from 'react';
import BoardList from './components/board/BoardList';
import ContainerCard from './components/container/ContainerCard';
import { useTypedSelector } from './hooks/reduxHooks';

function App() {
  const [activeBoardId, setActiveBoardId] = useState('board-0');
  const boards = useTypedSelector((state) => state.boards.boardArray);
  const getActiveBoard = boards.filter((board) => board.boardId === activeBoardId)[0];
  const { cards } = getActiveBoard;
  return (
    <div>
      {/* boards */}
      <BoardList {...{ setActiveBoardId, boards }} />
      <div>
        {/* containers */}
        <ContainerCard {...{ cards, boardId: getActiveBoard.boardId }} />
      </div>
      {/* button */}
    </div>
  );
}

export default App;

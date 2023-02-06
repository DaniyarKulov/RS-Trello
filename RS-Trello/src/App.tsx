import { useState } from 'react';
import BoardList from './components/board/BoardList';
import ContainerCard from './components/container/ContainerCard';
import { initialState } from './redux/slices/boardsSlice';

function App() {
  const [activeBoardId, setActiveBoardId] = useState('board-0');
  const boards = initialState.boardArray;
  const getActiveBoard = boards.filter((board) => board.boardId === activeBoardId)[0];
  const { cards } = getActiveBoard;
  return (
    <div>
      {/* boards */}
      <BoardList />
      <div>
        {/* containers */}
        <ContainerCard {...{ cards }} />
      </div>
    </div>
  );
}

export default App;

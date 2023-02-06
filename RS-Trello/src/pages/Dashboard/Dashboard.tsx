import BoardList from '../../components/list/board/BoardList';
import ContainerList from '../../components/list/container/ContainerList';

function Dashboard() {
  return (
    <div>
      {/* boards */}
      <BoardList title="BoardList" />
      <div>
        {/* containers */}
        <ContainerList title="ContainerList" />
      </div>
      <div>{/* buttons */}</div>
    </div>
  );
}

export default Dashboard;

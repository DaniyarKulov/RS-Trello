import React from 'react';
import boardList from './BoardList.module.css';

interface BoardListProps {
  title: string;
}

const BoardList: React.FC<BoardListProps> = ({ title }) => (
  <div style={boardList.app}>
    <p>{title}</p>;
  </div>
);
export default BoardList;

import React from 'react';
import containerList from './ContainerList.module.css';

interface ContainerListProps {
  title: string;
}

const ContainerList: React.FC<ContainerListProps> = ({ title }) => (
  <div style={containerList.app}>
    <p>{title}</p>;
  </div>
);
export default ContainerList;

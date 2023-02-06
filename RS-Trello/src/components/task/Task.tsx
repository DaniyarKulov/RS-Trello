import React from 'react';

interface TaskProps {
  // index: number;
  // id: string;
  name: string;
  description: string | undefined;
}

const Task: React.FC<TaskProps> = ({
  // index,
  // id,
  name,
  description,
}) => (
  <div>
    <p>{name}</p>
    <p>{description}</p>
  </div>
);
export default Task;

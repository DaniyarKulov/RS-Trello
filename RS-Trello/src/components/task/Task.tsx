import React from 'react';
import { Draggable } from "react-beautiful-dnd";
import { ITask } from '../../types/types';
import taskBox from './Task.module.css';

interface TaskProps {
  ind: number;
  task: ITask
}

const Task: React.FC<TaskProps> = ({
  ind,
  task
}) => (
  <Draggable draggableId={task.taskId} index={ind}>
    {provided => (
      <div
        className={taskBox.row}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}>
        <p className={taskBox.listHeader}>{task.text}</p>
        <p className={taskBox.listHeader}>{task.description}</p>
      </div>
    )}
  </Draggable>

);
export default Task;

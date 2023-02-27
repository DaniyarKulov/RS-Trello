import React, { ChangeEvent, useState } from 'react';
import { v4 } from "uuid";
import { useTypedDispatch, useTypedSelector } from '../../hooks/reduxHooks';
import { deleteTask, setModalActive, updateTask } from '../../redux/slices/boardsSlice';
import { addLog } from '../../redux/slices/loggerSlice';
import editClases from './Edit.module.css';


const Edit: React.FC = () => {
  const dispatch = useTypedDispatch();
  const editingState = useTypedSelector(state => state.modal);
  const [data, setData] = useState(editingState);

  const handleCloseButton = () => {
    dispatch(setModalActive(false));
  };

  const handleUpdate = () => {
    dispatch(
      updateTask({
        boardId: editingState.boardId,
        cardId: editingState.cardId,
        task: data.task,
      })
    );
    dispatch(
      addLog({
        logId: v4(),
        logMessage: `Update task: ${editingState.task.text}`,
        logAuthor: "User",
        logTimestamp: String(Date.now()),
      })
    );
    dispatch(setModalActive(false));
  };
  const handleDelete = () => {
    dispatch(
      deleteTask({
        boardId: editingState.boardId,
        cardId: editingState.cardId,
        taskId: editingState.task.taskId,
      })
    );
    dispatch(
      addLog({
        logId: v4(),
        logMessage: `Delete task: ${editingState.task.text}`,
        logAuthor: "User",
        logTimestamp: String(Date.now()),
      })
    );
    dispatch(setModalActive(false));
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, task: { ...data.task, text: e.target.value } });
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setData({
      ...data,
      task: { ...data.task, description: e.target.value },
    });
  };

  return (
    <div className={editClases.containerDesription}>
      <div className={editClases.descriptionCard}>
        <div className={editClases.header}>
          <div className={editClases.headerText}>{editingState.task.text}</div>
          <button className={editClases.cross} onClick={handleCloseButton}></button>
        </div>
        <div className={editClases.task}>
          <div className={editClases.taskName}>Task name:</div>
          <input
            placeholder='Write the name of the task'
            type="text"
            value={data.task.text}
            onChange={handleNameChange}
            className={editClases.taskInput}
          />
        </div>
        <div className={editClases.descriptionHeader}>Task description</div>
        <textarea
          placeholder='Write a description of the task'
          value={data.task.description}
          onChange={handleDescriptionChange}
          className={editClases.descriptionText}
        />
        <div>
          <button className={editClases.btnUpdate} onClick={handleUpdate}>
            Update task
          </button>
          <button className={editClases.btn} onClick={handleDelete}>
            Delete tasks
          </button>
        </div>
      </div>
    </div>
  )
};
export default Edit;

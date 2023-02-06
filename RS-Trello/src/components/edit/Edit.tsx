import React, { ChangeEvent, useState } from 'react';
import { v4 } from "uuid";
import { useTypedDispatch, useTypedSelector } from '../../hooks/reduxHooks';
import { deleteTask, setModalActive, updateTask } from '../../redux/slices/boardsSlice';
import { addLog } from '../../redux/slices/loggerSlice';


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

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      task: { ...data.task, description: e.target.value },
    });
  };

  return (
    <div>
      <div>
        <p>{editingState.task.text}</p>
        <button onClick={handleCloseButton}>close</button>
      </div>
      <div>Task name</div>
      <input
        type="text"
        value={data.task.text}
        onChange={handleNameChange}
      />
      <div>Task description</div>
      <input
        type="text"
        value={data.task.description}
        onChange={handleDescriptionChange}
      />
      <div>
        <button onClick={handleUpdate}>
          Update task
        </button>
        <button onClick={handleDelete}>
          Delete tasks
        </button>
      </div>
    </div>
  )
};
export default Edit;

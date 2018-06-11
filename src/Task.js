import React from 'react';

// Create task and icon
const Task = (props) => {
  return (
    <li className='task-item'>{props.task.text} <span className='fa fa-trash-o task-remover pull-right' onClick={() => {props.remove(props.task.id)}}></span></li>
  );
}

export default Task;
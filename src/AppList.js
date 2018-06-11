import React from 'react';
import Task from './Task';

// Full List
const AppList = ({tasks,remove}) => {
  // Create for each task
  const taskNode = tasks.map((task) => {
    return (<Task task={task} key={task.id} remove={remove}/>)
  });

  // Return <ul>
  return (<ul className='task-list' id='task-list'>{taskNode}</ul>);
}

export default AppList;
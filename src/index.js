import React from 'react';
import ReactDOM from 'react-dom';
import AppList from './AppList';
import AppHead from './AppHead';
import Loader from './Loader';
import axios from 'axios';

// Global id
window.id = 0;

class TaskApp extends React.Component {
  constructor(prop) {
    // Provide parent class with prop
    super(prop);

    // Set initial state as empty
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    axios.get('../tasks.json')
      .then(response => {
        let tasks = response.data.tasks
        this.setState({data: tasks})
      })
      .catch(function (error) {
        console.log(error)
      });
  }

  componentDidMount() {
    setTimeout(() => {
      document.querySelector('#root').className += 'fullyLoaded'
    }, 2000)
  }

  addTask(val) {
    // Get text and id
    const task = {
      text: val,
      id: window.id++
    }
    
    // Check if empty input
    if (val.length > 0) this.state.data.push(task);
    
    // Append new task
    this.setState({
      data: this.state.data
    });
  }
  
  removeTask(id) {
    // Filter out removed task
    const taskCollection = this.state.data.filter((task) => {
      return (task.id !== id)
    });

    // Update state
    this.setState({
      data: taskCollection
    });
  }

  render() {
    // Render App component
    return (
      <div>
        <AppHead addTask={this.addTask.bind(this)}/>

        <AppList 
          tasks={this.state.data}
          remove={this.removeTask.bind(this)}
        />

        <Loader />
      </div>
    );
  }
}

// Render app to element with ID root
ReactDOM.render(<TaskApp />, document.querySelector('#root'));
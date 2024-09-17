import React, { useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [totalPoints, setTotalPoints] = useState(3982);
  const tasks = [
    { id: 1, title: 'Monthly leaderboard winner', points: 10 },
    { id: 2, title: 'Share With 5 friends!', points: 10 },
    { id: 3, title: 'Earn daily win Big Reward!', points: 10 },
    { id: 4, title: 'Claim 10 Point Every Hour', points: 10 },
    { id: 5, title: 'Weekly Leaderboard Prize', points: 10 },
    { id: 6, title: 'Like the Instagram Post', points: 10 },
    { id: 7, title: 'Like the Instagram Post', points: 10 },
  ];
  const handleCompleteTask = (taskPoints, taskTitle) => {
    setTotalPoints(prevPoints => prevPoints + taskPoints);
    toast.success(`You have completed the task: "${taskTitle}" and gained ${taskPoints} points!`);
  };

  return (
    <div className="task-list-container">
      <header className="task-header">
        <h2 className="gg">Task Details</h2>
        <div className="header-stats">
          <span className="points-earned">{totalPoints}</span>
          <span className="balance">₹28750.00</span>
          <img src="https://via.placeholder.com/40" alt="Top Player" className="player-icon" />
        </div>
      </header>

      <div className="tasks">
        {tasks.map(task => (
          <div key={task.id} className="task-card">
            <img src="https://via.placeholder.com/40" alt="Instagram" className="task-icon" />
            <div className="task-content">
              <h3>{task.title} <span role="img" aria-label="trophy">🏆</span></h3>
              <button
                className="points-button"
                onClick={() => handleCompleteTask(task.points, task.title)}
              >
                {task.points} Points
              </button>
            </div>
          </div>
        ))}
      </div>

      <footer className="footer">
        <div className="footer-content">
          <button className="nav-button"><i className="fas fa-home"></i></button>
          <button className="nav-button"><i className="fas fa-pencil"></i></button>
          <button className="nav-button"><i className="fas fa-plus"></i></button>
          <button className="nav-button"><i className="fas fa-cog"></i></button>
          <button className="nav-button"><i className="fas fa-trophy"></i></button>
        </div>
      </footer>

      {/* Toast container to show messages */}
      <ToastContainer />
    </div>
  );
};

export default App;

import React from "react";
import "./Joke.css";

function Joke({ id, vote, votes, text, locked, toggleLock }) {
  return (
    <div className={`Joke ${locked ? 'Joke-locked' : ''}`}>
      <div className="Joke-votearea">
        <button onClick={() => vote(id, +1)}>
          <i className="fas fa-thumbs-up" />
        </button>

        <button onClick={() => vote(id, -1)}>
          <i className="fas fa-thumbs-down" />
        </button>

        {votes}

        <button 
          onClick={() => toggleLock(id)}
          style={{ marginLeft: '1em' }}
        >
          <i className={`fas ${locked ? 'fa-lock' : 'fa-lock-open'}`} />
        </button>
      </div>

      <div className="Joke-text">{text}</div>
    </div>
  );
}

export default Joke;
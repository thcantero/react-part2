import React, { useState, useEffect } from "react";
import axios from "axios";
import Joke from "./Joke";
import "./JokeList.css";

function JokeList({ numJokesToGet = 5 }) {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load jokes from localStorage on component mount
  useEffect(() => {
    const savedJokes = JSON.parse(localStorage.getItem("jokes"));
    if (savedJokes && savedJokes.length > 0) {
      setJokes(savedJokes);
      setIsLoading(false);
    } else {
      getJokes();
    }
  }, []);

  // Save jokes to localStorage whenever jokes change
  useEffect(() => {
    localStorage.setItem("jokes", JSON.stringify(jokes));
  }, [jokes]);

  const getJokes = async () => {
    try {
      let newJokes = [];
      let seenJokes = new Set(jokes.map(j => j.id));

      while (newJokes.length < numJokesToGet) {
        let res = await axios.get("https://icanhazdadjoke.com/", {
          headers: { Accept: "application/json" }
        });
        let joke = res.data;

        if (!seenJokes.has(joke.id)) {
          seenJokes.add(joke.id);
          newJokes.push({ ...joke, votes: 0, locked: false });
        }
      }

      // Combine existing locked jokes with new jokes
      const lockedJokes = jokes.filter(j => j.locked);
      setJokes([...lockedJokes, ...newJokes]);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  const generateNewJokes = () => {
    setIsLoading(true);
    // Only remove non-locked jokes
    const lockedJokes = jokes.filter(j => j.locked);
    setJokes(lockedJokes);
    getJokes();
  };

  const vote = (id, delta) => {
    setJokes(jokes => 
      jokes.map(j =>
        j.id === id ? { ...j, votes: j.votes + delta } : j
      )
    );
  };

  const resetVotes = () => {
    setJokes(jokes.map(j => ({ ...j, votes: 0 })));
    localStorage.removeItem("jokes");
  };

  const toggleLock = (id) => {
    setJokes(jokes =>
      jokes.map(j =>
        j.id === id ? { ...j, locked: !j.locked } : j
      )
    );
  };

  let sortedJokes = [...jokes].sort((a, b) => b.votes - a.votes);

  if (isLoading) {
    return (
      <div className="loading">
        <i className="fas fa-4x fa-spinner fa-spin" />
      </div>
    );
  }

  return (
    <div className="JokeList">
      <button className="JokeList-getmore" onClick={generateNewJokes}>
        Get New Jokes
      </button>
      <button className="JokeList-reset" onClick={resetVotes}>
        Reset Votes
      </button>

      {sortedJokes.map(j => (
        <Joke
          text={j.joke}
          key={j.id}
          id={j.id}
          votes={j.votes}
          vote={vote}
          locked={j.locked}
          toggleLock={toggleLock}
        />
      ))}
    </div>
  );
}

export default JokeList;
import React, { useState } from "react";
import video from "../data/video.js";
import Header from "./Header";
import Votes from "./Votes";
import Comments from "./Comments";

function App() {
  // console.log("Here's your data:", video);
  const [upVotes, setUpVotes] = useState(video.upvotes);
  const [downVotes, setDownVotes] = useState(video.downvotes);
 

  function handleUpVotesClick(event) {
    // console.log(event.target.value);
    setUpVotes(upVotes + 1);
  }

  function handleDownVotesClick(event) {
    // console.log(event.target.value);
    setDownVotes(downVotes - 1);
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Header
        name={video.title}
        views={video.views}
        createdAt={video.createdAt}
      />
      <Votes
        upVotes={upVotes}
        downVotes={downVotes}
        handleUpVotesClick={handleUpVotesClick}
        handleDownVotesClick={handleDownVotesClick}
      />
      <Comments comments={video.comments} />
    </div>
  );
}

export default App;

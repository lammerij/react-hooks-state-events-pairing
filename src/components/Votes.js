import React from "react";

function Votes({ upVotes, downVotes, handleUpVotesClick, handleDownVotesClick }) {

  return (
    <div>
      <button onClick={handleUpVotesClick}>{upVotes}👍</button>
      <button onClick={handleDownVotesClick}>{downVotes}👎</button>
    </div>
  );
}

export default Votes;

import React, { useState } from "react";

function Comments(props) {
//   console.log(props.comments);
  const listOfUsers = props.comments.map((user) => <h2>{user.user}</h2>);
  const listOfComments = props.comments.map((comment) => (
    <p>{comment.comment}</p>
  ));

  return (
    <div>
      <button>
        Hide Comments
      </button>
      <h1>2 Comments</h1>
      {listOfUsers}
      {listOfComments}
    </div>
  );
}

export default Comments;

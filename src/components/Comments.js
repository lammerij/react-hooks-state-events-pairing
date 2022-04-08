import React, {useState} from "react";

function Comments(props) {
    const[usersOn, setUsersOn] = useState(true)
  const listOfUsers = props.comments.map((user) => {
    return (
      <div>
        <h2>{user.user}</h2> <p>{user.comment}</p>
      </div>
    );
  });

  function handleUserOnClick(){
      setUsersOn((usersOn) => !usersOn)
  }

  return (
    <div>
      <button onClick={handleUserOnClick}>
          {usersOn ? "Hide Comments" : "Show Comments"}</button>
      <h1>2 Comments</h1>
      {listOfUsers}
    </div>
  );
}

export default Comments;

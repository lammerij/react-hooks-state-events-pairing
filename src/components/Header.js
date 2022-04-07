import React from 'react'

function Header(props) {
  return (
    <div>
     <h1>{props.name}</h1>
    <p>{props.views} Views | {props.createdAt}</p>
    </div>
  )
}


export default Header;
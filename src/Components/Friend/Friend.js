import React from 'react'

const Friend = (props) => {
    const {friend} = props
    const {name, email} = friend;
    const friendContainerStyle = {
        border: '1px solid #0d6efd',
        borderRadius: '8px',
        margin: '10px',
        padding: '10px'
    }
    // console.log(friend);
  return (
    <div className='friend-container' style={friendContainerStyle}>
        <h1>Name: {name}</h1>
        <h5>Email: {email}</h5>
        {
            props.children
        }
    </div>
  )
}

export default Friend
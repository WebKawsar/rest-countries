import React from 'react';

const Friend = (props) => {
    const {name, email} = props.friend;

const friendStyle = {
    border: "5px solid purple",
    padding: "20px",
    margin: "20px",
    borderRadius: "20px"
}
    return (
        <div style={friendStyle}>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
        </div>
    );
};

export default Friend;
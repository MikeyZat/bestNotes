import React from 'react';
import '../themes/DeleteButton.css';

const DeleteButton = (props) => {

    let handleClick = () => {
        props.onClick(props.index);
    };

    return (
        <button onClick={handleClick} className="DeleteButton">X</button>
    );

};

export default DeleteButton;

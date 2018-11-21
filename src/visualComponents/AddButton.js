import React from 'react';
import '../themes/AddButton.css';

const AddButton = (props) =>{

    return (
        <button onClick={props.onClick} className="AddButton">Add</button>
    );

};

export default AddButton;

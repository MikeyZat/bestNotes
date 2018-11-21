import React from 'react';
import '../themes/FrameTitle.css';

const FrameTitle = (props) =>{


    return (
        <header className="FrameTitle">
            <h1>things to do:</h1>
            <h3>{props.message}</h3>
        </header>
            );

};

export default FrameTitle;

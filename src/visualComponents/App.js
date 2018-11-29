import React from 'react';
import '../themes/App.css';
import FrameContainer from "../logicalComponents/FrameContainer";

const App = (props) => {

    return (
        <div className="App">
            <FrameContainer userName={props.userName}/>
        </div>
    );

};

export default App;

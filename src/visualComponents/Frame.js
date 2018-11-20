import React from 'react';
import '../themes/Frame.css';
import FrameTitleContainer from "../logicalComponents/FrameTitleContainer";
import AddButtonContainer from "../logicalComponents/AddButtonContainer";
import ThingToDoContainer from "../logicalComponents/ThingToDoContainer";
import Form from "../visualComponents/Form";

const Frame = (props) =>{

    return (
        <section className="Frame">
            <FrameTitleContainer/>
            <ul className="tasksList">
                <ThingToDoContainer/>
                <Form/>
            </ul>
            <AddButtonContainer/>

        </section>
    );

};

export default Frame;

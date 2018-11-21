import React from 'react';
import '../themes/Frame.css';
import FrameTitleContainer from "../logicalComponents/FrameTitleContainer";
import AddButtonContainer from "../logicalComponents/AddButtonContainer";
import Form from "../visualComponents/Form";
import ThingToDoContainer from "../logicalComponents/ThingToDoContainer";

const Frame = (props) =>{

    let notes = props.notes.map((note,index) =>
        <ThingToDoContainer
            key={index.toString()}
            index={index}
            done={note.done}
            task={note.task}
            handleChange={props.handleCheckboxChange}
            deleteNote={props.deleteNote}/>
    );

    return (
        <section className="Frame">
            <FrameTitleContainer/>
            <ul className="tasksList">
                {notes}
                <Form/>
            </ul>
            <AddButtonContainer onClick={props.addNote}/>

        </section>
    );

};

export default Frame;

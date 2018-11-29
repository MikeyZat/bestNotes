import React from 'react';
import '../themes/Frame.css';
import FrameTitleContainer from "../logicalComponents/FrameTitleContainer";
import AddButtonContainer from "../logicalComponents/AddButtonContainer";
import Form from "../visualComponents/Form";
import ThingToDoContainer from "../logicalComponents/ThingToDoContainer";

const Frame = (props) => {
    let rateOfDone = 0;
    let notes = props.notes.map((note, index) => {
        if (note.done)
            rateOfDone++;
        return (
            <ThingToDoContainer
                userName={props.userName}
                key={index.toString()}
                index={index}
                done={note.done}
                task={note.task}
                handleChange={props.handleCheckboxChange}
                deleteNote={props.deleteNote}/>);
    });
    if (props.notes.length > 0)
        rateOfDone /= props.notes.length;
    else
        rateOfDone = -1;

    return (
        <section className="Frame">
            <FrameTitleContainer rateOfDone={rateOfDone}/>
            <ul className="tasksList">
                {notes}
                <Form/>
            </ul>
            <AddButtonContainer onClick={props.addNote}/>

        </section>
    );

};

export default Frame;

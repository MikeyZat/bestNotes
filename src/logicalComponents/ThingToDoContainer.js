import React, { Component } from 'react';
import ThingToDo from '../visualComponents/ThingToDo'
class ThingToDoContainer extends Component {

    // constructor(props){
    //     super(props);
    //
    //     let newName = "task "+props.nr;
    //     this.state={
    //         name:newName
    //     };
    // }

    render() {
        return (
            <ThingToDo
                handleChange={this.props.handleChange}
                done={this.props.done}
                task={this.props.task}
                index={this.props.index}
                deleteNote={this.props.deleteNote}
            />
        );
    }
}

export default ThingToDoContainer;

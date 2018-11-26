import React, { Component } from 'react';
import ThingToDo from '../visualComponents/ThingToDo'
import deleteTask from "../restModules/DeletingData";
import updateTask from "../restModules/UpdatingData";
class ThingToDoContainer extends Component {

    componentDidUpdate(prevProps){
        if(prevProps.done!==this.props.done&&prevProps.task===this.props.task)
            updateTask(this.props.userName,this.props.task,this.props.done)
    }
    componentWillUnmount(){
        deleteTask(this.props.userName,this.props.task);
    }
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

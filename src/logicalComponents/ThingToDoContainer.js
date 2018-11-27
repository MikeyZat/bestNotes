import React, { Component } from 'react';
import ThingToDo from '../visualComponents/ThingToDo';
import updateTask from "../restModules/UpdatingData";
class ThingToDoContainer extends Component {

    componentDidUpdate(prevProps){
        if(prevProps.done!==this.props.done&&prevProps.task===this.props.task)
            updateTask(this.props.userName,this.props.task,this.props.done)
    }
    componentWillUnmount(){
        const URL = "http://localhost:8080/deleteTask?";
        const nameParam = "name=";
        const taskParam = "text=";
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.onreadystatechange = () =>{
            if(xhr.readyState === XMLHttpRequest.DONE){
                console.log(xhr.response);
            }
        };
        xhr.open('DELETE',`${URL}${nameParam}${this.props.userName}&${taskParam}${this.props.task}`,true);
        xhr.send();
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

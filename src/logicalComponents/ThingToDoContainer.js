import React, { Component } from 'react';
import ThingToDo from '../visualComponents/ThingToDo'
class ThingToDoContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            done:false
        };
    }

    render() {
        return (
            <ThingToDo done={this.state.done}/>
        );
    }
}

export default ThingToDoContainer;

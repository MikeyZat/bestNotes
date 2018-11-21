import React, { Component } from 'react';
import AddButton from '../visualComponents/AddButton'
class AddButtonContainer extends Component {

    render() {
        return (
            <AddButton onClick={this.props.onClick}/>
        );
    }
}

export default AddButtonContainer;

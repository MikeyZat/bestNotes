import React, { Component } from 'react';
import DeleteButton from '../visualComponents/DeleteButton'
class DeleteButtonContainer extends Component {
    render() {
        return (
            <DeleteButton onClick={this.props.onClick} index={this.props.index}/>
        );
    }
}

export default DeleteButtonContainer;

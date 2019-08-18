import React, {Component} from 'react';
import ThingToDo from '../visualComponents/ThingToDo';

class ThingToDoContainer extends Component {

    componentDidUpdate(prevProps) {
        if (prevProps.done !== this.props.done && prevProps.task === this.props.task) {
            //updateTask(this.props.userName, this.props.task, this.props.done)
            const xhr = new XMLHttpRequest();
            const URL = 'https://vast-wave-96184.herokuapp.com/api/updateTask';
            const data = JSON.stringify({
                username: this.props.userName,
                text: this.props.task,
                done: this.props.done,
                _id: this.props._id,
            });
            xhr.responseType = 'json';
            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE && xhr.response) {
                    if (xhr.response.ok)
                        console.log("zmieniono pomyślnie");
                }
            };
            xhr.open('PATCH', URL);
            xhr.setRequestHeader('Content-type',
                'application/json');
            xhr.send(data);
        }
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

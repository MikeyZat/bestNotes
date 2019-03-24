import React, {Component} from 'react';
import Frame from '../visualComponents/Frame'

class FrameContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            notes: []
        };

        this.createSound = new Audio('soundOfPaper.mp3');
        this.deleteSound = new Audio('paperTear.mp3');
        this.deleteSound.volume = 0.3;
        this.checkSound = new Audio('checkSound.mp3');
        this.checkSound.volume = 0.5;
    }

    componentDidMount() {

        document.addEventListener("keyup",
            function (event) {
                if (!(typeof event.key === "undefined"))
                    if (event.key.toLowerCase() === "enter")
                        document.getElementsByClassName("AddButton")[0].click();
            },
            false);
    }

    componentWillMount() {
        const URL = "https://flaneczki.pl:8888/getTasks/";
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.response) {
                    let newNotes = [];
                    for (let i = 0; i < xhr.response.length; i++) {
                        console.log(xhr.response[i]);
                        let newNote = {
                            done: xhr.response[i].done,
                            task: xhr.response[i].text
                        };
                        newNotes.push(newNote);

                    }
                    this.setState({
                        notes: newNotes
                    });
                }
            }
        };
        xhr.open('GET', `${URL}${this.props.userName}`, true);
        xhr.send();
    }

    handleCheckboxChange = (event) => {
        let newNotes = this.state.notes.slice(0);
        let input = event.target;
        let index = input.id;
        newNotes[index].done = !newNotes[index].done;
        if (newNotes[index].done)
            this.checkSound.play();
        this.setState({
            notes: newNotes
        });
    };

    addNote = () => {
        let input = document.getElementById("task");
        if (input.value) {
            const xhr = new XMLHttpRequest();
            const URL = 'https://flaneczki.pl:8888/newTask';
            const data = JSON.stringify({
                userName: this.props.userName,
                text: input.value
            });
            xhr.responseType = 'json';
            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE && xhr.response) {
                    console.log("dodano pomyślnie");
                }
            };
            xhr.open('POST', URL);
            xhr.setRequestHeader('Content-type',
                'application/json');
            xhr.send(data);

            this.createSound.play();
            let newNote = {
                done: false,
                task: input.value
            };
            input.value = "";
            let newNotes = this.state.notes.slice(0);
            newNotes.push(newNote);
            this.setState({
                notes: newNotes
            });
        }
    };

    deleteNote = (index) => {
        this.deleteSound.play();
        let newNotes = this.state.notes.slice(0);
        let deletedNote = newNotes.splice(index, 1);

        const URL = "https://flaneczki.pl:8888/deleteTask";
        const data = JSON.stringify({
            userName: this.props.userName,
            text: deletedNote[0].task
        });
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.response) {
                console.log(xhr.response);
            }
        };
        xhr.open('DELETE', `${URL}`, true);
        xhr.send(data);
        this.setState({
            notes: newNotes
        });
    };

    render() {
        return (
            <Frame
                userName={this.props.userName}
                addNote={this.addNote}
                notes={this.state.notes}
                handleCheckboxChange={this.handleCheckboxChange}
                deleteNote={this.deleteNote}
                logOut={this.props.logOut}/>
        );
    }
}

export default FrameContainer;

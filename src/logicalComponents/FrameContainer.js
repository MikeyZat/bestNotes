import React, { Component } from 'react';
import Frame from '../visualComponents/Frame'
class FrameContainer extends Component {

    constructor(props) {
        super(props);

        this.state={
            notes:[]
        };

        this.handleCheckboxChange=this.handleCheckboxChange.bind(this);
        this.addNote = this.addNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
        this.createSound = new Audio('../soundOfPaper.mp3');
        this.deleteSound = new Audio('../paperTear.mp3');
        this.deleteSound.volume=0.3;
        this.checkSound = new Audio('../checkSound.mp3');
        this.checkSound.volume=0.5;
    }

    handleCheckboxChange(event){
        let newNotes = this.state.notes.slice(0);
        let input =  event.target;
        let index = input.id;
        newNotes[index].done=!newNotes[index].done;
        if(newNotes[index].done)
            this.checkSound.play();
        this.setState({
            notes:newNotes
        });


    }

    addNote(){
        let input = document.getElementById("task");
        if(input.value) {
            this.createSound.play();
            let newNote = {
                done:false,
                task:input.value
            };
            input.value="";
            let newNotes=this.state.notes.slice(0);
            newNotes.push(newNote);
            this.setState({
                notes: newNotes
            });
        }
    }

    deleteNote(index){
        this.deleteSound.play();
        let newNotes = this.state.notes.slice(0);
        newNotes.splice(index,1);
        this.setState({
            notes:newNotes
        });
    }

    render() {
        return (
            <Frame
                addNote={this.addNote}
                notes={this.state.notes}
                handleCheckboxChange={this.handleCheckboxChange}
                deleteNote={this.deleteNote}/>
        );
    }
}

export default FrameContainer;

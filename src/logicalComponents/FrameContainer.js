import React, { Component } from 'react';
import Frame from '../visualComponents/Frame'
import createTask from "../restModules/CreatingData";
import getTasks from "../restModules/GettingData";
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
    componentDidMount(){

        document.addEventListener("keyup",
            function(event){
                if(!(typeof event.key ==="undefined"))
                    if(event.key.toLowerCase()==="enter")
                        document.getElementsByClassName("AddButton")[0].click();
            },
            false);
    }

    componentWillMount(){
        getTasks(this.props.userName);
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.notes.length < this.state.notes.length)
            createTask(this.props.userName,this.state.notes[this.state.notes.length-1].task);

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
                userName={this.props.userName}
                addNote={this.addNote}
                notes={this.state.notes}
                handleCheckboxChange={this.handleCheckboxChange}
                deleteNote={this.deleteNote}/>
        );
    }
}

export default FrameContainer;

import React from 'react';
import '../themes/ThingToDo.css';
import DeleteButtonContainer from '../logicalComponents/DeleteButtonContainer'
const ThingToDo = (props) =>{

    let changeCheck=()=>{
        let input = document.getElementById(props.index);
        input.click();
    };
    let labelStyle={};
    let spanStyle={};
    if(props.done){
        labelStyle={
            textDecoration: "line-through",
            color:"#c2c2a3"
        };
        spanStyle={
            background:"#f5f5f0",
            color:"#33cc33",
            fontWeight:"bold"
        };
        return (
            <li className="ThingToDo">
                <span style={spanStyle} className="customCheck" onClick={changeCheck}>&#x2713;</span>
                <label style={labelStyle} htmlFor={props.index}>{props.task}</label>
                <input type="checkbox" id={props.index} name={props.index} onChange={props.handleChange}/>
                <DeleteButtonContainer onClick={props.deleteNote} index={props.index}/>
            </li>
        );
    }
    return (
        <li className="ThingToDo">
            <span style={spanStyle} className="customCheck" onClick={changeCheck}> </span>
            <label style={labelStyle} htmlFor={props.index}>{props.task}</label>
            <input type="checkbox" id={props.index} name={props.index} onChange={props.handleChange}/>
        </li>
            );

};

export default ThingToDo;

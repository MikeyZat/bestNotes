import React from 'react';
import '../themes/ThingToDo.css';
import DeleteButtonContainer from '../logicalComponents/DeleteButtonContainer'
const ThingToDo = (props) =>{

    let style={};
    if(props.done){
        style={
            textDecoration: "line-through",
            color:"#c2c2a3"
        };
    }
    return (
        <li className="ThingToDo">
            <label style={style} htmlFor="thing1">The setting Siema nara Siema nara Siema nara Siema nara Siema nara Siema nara Siema nara Siema nara Siema nara </label>
            <input type="checkbox" id="thing1" name="thing1"/>
            <DeleteButtonContainer/>
        </li>
            );

};

export default ThingToDo;

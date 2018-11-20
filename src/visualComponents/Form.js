import React from 'react';
import '../themes/Form.css';

const Form = (props) =>{

    return (
        <li className="Form">
            <label htmlFor="task">Enter new task: </label>
            <input type="text" id="task" name="task" />
        </li>
    );

};

export default Form;

import React from 'react';
import '../themes/LoginPage.css';

const LoginPage = (props) =>{

    let handleSubmit=(e)=>{
        e.preventDefault();
        let name = document.getElementById("nick").value;
        props.onSubmit(name);
    };
    let style ={};
    if (props.error){
        style = {
            color:"red"
        };
    }

    return (
        <form className="LoginForm" onSubmit={handleSubmit}>
            <label style = {style} htmlFor="nick">{props.message}</label>
            <input type="text" name="nick" id="nick" placeholder="name"/>
            <input type="submit" value="submit"/>
        </form>
    );

};

export default LoginPage;

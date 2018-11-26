import React, { Component } from 'react';
import App from '../visualComponents/App';
import LoginPage from '../visualComponents/LoginPage';
import checkUser from "../restModules/CheckingUser";
class AppContainer extends Component {

    constructor(props){
        super(props);
        this.state={
            logged:false,
            user:"",
            loginMessage:"Who's there? Insert your name:",
            error:false
        };
        this.logIn=this.logIn.bind(this);
    }

    logIn(name){
        if(name && checkUser(name)){
            this.setState({
                logged:true,
                user:name,
                error:false,
                loginMessage:"Who's there? Insert your name:"
            });
        }else{
            this.setState({
                loginMessage:"I haven't found that account! Try again: ",
                error:true
            });
        }
    }


    render() {

        if (this.state.logged) {
            return (
                <App userName={this.state.user}/>
            );
        }else{
            return(
                <LoginPage error={this.state.error} message={this.state.loginMessage} onSubmit={this.logIn}/>
            )
        }
    }
}

export default AppContainer;

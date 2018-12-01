import React, {Component} from 'react';
import App from '../visualComponents/App';
import LoginPage from '../visualComponents/LoginPage';

class AppContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logged: false,
            user: "",
            loginMessage: "Who's there? Insert your name:",
            error: false
        };
        this.logIn = this.logIn.bind(this);
    }

    logIn(name) {
        if (!name) {
            this.setState({
                loginMessage: "I haven't found that account! Try again: ",
                error: true
            });
        }
        const URL = "http://bestnotesapi-env.qbmgq6ev8j.eu-west-1.elasticbeanstalk.com/isName";
        const param = "?name=";
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.response) {
                    this.setState({
                        logged: true,
                        user: name.toLowerCase(),
                        error: false,
                        loginMessage: "Who's there? Insert your name:"
                    });
                } else {
                    this.setState({
                        loginMessage: "I haven't found that account! Try again: ",
                        error: true
                    });
                }
            }
        };
        xhr.open('GET', `${URL}${param}${name}`, true);
        xhr.send();

    }


    render() {

        if (this.state.logged) {
            return (
                <App userName={this.state.user}/>
            );
        } else {
            return (
                <LoginPage error={this.state.error} message={this.state.loginMessage} onSubmit={this.logIn}/>
            )
        }
    }
}

export default AppContainer;

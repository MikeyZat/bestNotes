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
    }

    componentDidMount(){
        if(localStorage.user){
            this.setState({
                logged: true,
                user: localStorage.user.toLowerCase(),
                error: false,
                loginMessage: "Logged successfully"
            });
        }
    }



    logIn = (name) => {
        if (!name) {
            this.setState({
                loginMessage: "I haven't found that account! Try again: ",
                error: true
            });
        } else {
            this.setState({
                logged: true,
                user: name.toLowerCase(),
                error: false,
                loginMessage: "Logged successfully"
            });
            localStorage.user = name.toLowerCase();
        }
    };

    logOut = () =>{
        delete localStorage.user;
        this.setState({
            logged:false,
            user:"",
            error:false,
            loginMessage:"Who's there? Insert your name:"
        })
    };


    render() {

        if (this.state.logged) {
            return (
                <App
                    userName={this.state.user}
                    logOut={this.logOut}/>
            );
        } else {
            return (
                <LoginPage
                    error={this.state.error}
                    message={this.state.loginMessage}
                    onSubmit={this.logIn}/>
            )
        }
    }
}

export default AppContainer;

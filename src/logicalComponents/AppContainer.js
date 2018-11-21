import React, { Component } from 'react';
import App from '../visualComponents/App'
class AppContainer extends Component {

    componentDidMount(){
        document.addEventListener("keyup",
            function(event){
                if(event.key.toLowerCase()==="enter")
                    document.getElementsByClassName("AddButton")[0].click();
            },
            false);
    }
    render() {
        return (
            <App/>
        );
    }
}

export default AppContainer;

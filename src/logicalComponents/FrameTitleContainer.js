import React, {Component} from 'react';
import FrameTitle from '../visualComponents/FrameTitle'

class FrameTitleContainer extends Component {
    render() {
        let message = "";
        if (this.props.rateOfDone === -1) {
            message = "Hi, what must you do today?"
        } else if (this.props.rateOfDone === 0) {
            message = "Let's get down to work!";
        } else if (this.props.rateOfDone < 0.3) {
            message = "Keep it going!";
        } else if (this.props.rateOfDone < 0.4) {
            message = "You're on a good way!";
        } else if (this.props.rateOfDone < 0.6) {
            message = "You're halfway there!";
        } else if (this.props.rateOfDone < 1) {
            message = "Almost finished!";
        } else if (this.props.rateOfDone === 1) {
            message = "Finished! I'm proud of you!"
        }


        return (
            <FrameTitle message={message}/>
        );
    }
}

export default FrameTitleContainer;

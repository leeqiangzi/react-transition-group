import React, {Component} from 'react';
import CSSTransitionDemo from "./transition/CSSTransitionDemo";
import SwitchTransitionDemo from "./transition/SwitchTransitionDemo";

class App extends Component {
    render() {
        return (
            <div>
                <CSSTransitionDemo/>
                <SwitchTransitionDemo/>
            </div>
        );
    }
}

export default App;

import React, {Component} from 'react';
import CSSTransitionDemo from "./transition/CSSTransitionDemo";
import SwitchTransitionDemo from "./transition/SwitchTransitionDemo";
import TransitonGroupDemo from "./transition/TransitonGroupDemo";

class App extends Component {
    render() {
        return (
            <div>
                {/*<CSSTransitionDemo/>*/}
                {/*<SwitchTransitionDemo/>*/}
                <TransitonGroupDemo/>
            </div>
        );
    }
}

export default App;

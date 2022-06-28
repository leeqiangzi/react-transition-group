import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import './TransitonGroup.css'

class TransitonGroupDemo extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            names: ['qiang', 'zi', 'haha'],
        }
    }

    render() {
        return (
            <TransitionGroup>
                {
                    this.state.names.map((item, index) => {
                        return (
                            <CSSTransition key={index} timeout={500} classNames={'item'}>
                                <div>{item}</div>
                            </CSSTransition>
                        );
                    })
                }
                <button onClick={e => this.addName()}>+name</button>
            </TransitionGroup>
        );
    }

    addName() {
        this.setState({
            names: [...this.state.names, 'codewhy']
        })
    }
}

TransitonGroupDemo.propTypes = {};

export default TransitonGroupDemo;

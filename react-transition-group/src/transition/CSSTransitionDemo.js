import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';
import {Avatar, Card} from 'antd';
import {CSSTransition} from "react-transition-group";

const {Meta} = Card;

class CssTransitionDemo extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isShow: true
        }
    }

    render() {
        return (
            <div>
                {this._renderCssTransition()}
                <button onClick={e => this._changeCardState()}>显示/隐藏</button>
            </div>
        );
    }

    _changeCardState() {
        const {isShow = true} = this.state;
        this.setState({
            isShow: !isShow,
        })
    }

    _renderCssTransition() {
        const {isShow = true} = this.state;
        return (
            <CSSTransition in={isShow} classNames={'card'} timeout={300}>
                <Card style={{width: 300}}
                      cover={
                          <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>
                      }
                      actions={[
                          <SettingOutlined key="setting"/>,
                          <EditOutlined key="edit"/>,
                          <EllipsisOutlined key="ellipsis"/>,
                      ]}>
                    <Meta avatar={<Avatar src="https://joeschmoe.io/api/v1/random"/>}
                          title="Card title"
                          description="This is the description"/>
                </Card>
            </CSSTransition>
        );
    }
}

CssTransitionDemo.propTypes = {};

export default CssTransitionDemo;

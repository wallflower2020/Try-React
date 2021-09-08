import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import './Header.scss'

// const selectedStyle = {
//     backgroundColor: 'red',
//     color: 'slategray',
// }

class Header extends Component {
    handleOut() {
        this.props.history.push('./home')
    }
    handleOutt() {
        this.props.history.push('./detail')
    }

    componentDidMount() {
        console.log(this.props)
    }

    render () {
        return (
            <div className="header">
                <div className="goHome" onClick={this.handleOut.bind(this)}>
                    首页
                </div>
                <div className="goDetail" onClick={this.handleOutt.bind(this)}>
                    详情
                </div>
                <div className="goLogin">
                    登录
                </div>
                <div className="goCollecte">
                    收集
                </div>
            </div>
        )
    }
}

export default withRouter(Header)
import React, { Component } from 'react';
import {Header} from '../../components';
import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";
import "./Collecte.scss";

class Collecte extends Component {
    render () {
        return (
            <div className="page">
                <Header/>
                收集页
                <h1>antd version: {version}</h1>
                <DatePicker />
                <Button type="primary" style={{ marginLeft: 8 }}>
                Primary Button
                </Button>
            </div>
        )
    }
}

export default Collecte

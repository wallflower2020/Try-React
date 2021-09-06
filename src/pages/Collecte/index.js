import React, { Component } from 'react';
import {Header} from '../../components';
import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';
import PropTypes from 'prop-types';
import { getProData, togSelectPro, editPro } from '../../store/Collecte/action';

// class Collecte extends Component {
//     render () {
//         return (
//             <div className="page">
//                 <Header/>
//                 收集页
//                 <h1>antd version: {version}</h1>
//                 <DatePicker />
//                 <Button type="primary" style={{ marginLeft: 8 }}>
//                 Primary Button
//                 </Button>
//             </div>
//         )
//     }
// }

// export default Collecte

class Collecte extends Component {
    static propTypes = {
        // 设定proData必须是object集合类型
        proData: PropTypes.object.isRequired,
        // 设定以下三个属性值必须是函数类型.
        getProData: PropTypes.func.isRequired,
        togSelectPro: PropTypes.func.isRequired,
        editPro: PropTypes.func.isRequired
    }
    shouldComponentUpdate (nextProps, nextState) {
        return !is(fromJS ( this.props), fromJS (nextProps)) || !is(fromJS (this.state), fromJS (nextState))
    }

    componentDidMount () {
        if (!this.props.proData.dataList.length) {
            let a = this.props.getProData();
            console.log(a)
        }
    }

    handleEdit = (index, num) => {
        let currentNum = this.props.proData.dataList[index].selectNum + num;
        if (currentNum < 0 ) {
            return
        }
        this.props.editPro (index, currentNum); 
    }
    render () {
        return (
            <div>
                <Header/>
                收集页
                {
                    this.props.proData.dataList.map((item, index) => {
                        return <div className="pro-item-edit" key={index}>
                                <span onClick={this.handleEdit.bind(this, index, -1)}> - </span>
                                <span className="pro-num"> 当前数字为: {item.selectNum} </span>
                                <span onClick={this.handleEdit.bind(this, index, 1)}> + </span>
                               </div>
                    })
                }
            </div>
        )
    }
}

// 建立连接,声明数据信息及操作方法. 以及自调用对象(当前需要与数据源建立连接的类对象)
export default connect (state => (
    { proData: state.proData }
), {
    getProData,
    togSelectPro,
    editPro
})(Collecte)

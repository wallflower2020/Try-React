import React, { Component } from 'react';
import {Header} from '../../components';
import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';
import PropTypes from 'prop-types';
import { getProData, togSelectPro, editPro } from '../../store/Collecte/action'

class Detail extends Component {
    static propTypes = {
        proData: PropTypes.object.isRequired,
        getProData: PropTypes.func.isRequired,
        togSelectPro: PropTypes.func.isRequired,
        editPro: PropTypes.func.isRequired
    }
    shouldComponentUpdate (nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
    }
    componentDidMount () {
        if (!this.props.proData.dataList.lenght) {
            this.props.getProData()
        }
    }
    render () {
        return (
            <div>
                <Header/>
                详情页
                {
                    this.props.proData.dataList.map((item, index) => {
                        return <div className="pro-item-edit" key={index}>
                                <span className="pro-num"> 当前数字为： {item.selectNum} </span>
                               </div>
                    })
                }
            </div>
        )
    }
}

// class Detail extends Component {
//     render () {
//         return (
//             <div>
//                 <Header/>
//                 详情页
//             </div>
//         )
//     }
// }

export default connect(state => (
    {proData: state.proData}
), {
    getProData,
    togSelectPro,
    editPro
})(Detail)

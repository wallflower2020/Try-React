import * as pro from './action-type';
import Immutable from 'immutable';

let defaultState = {
    dataList: []
}

export const proData = (state = defaultState, action) => {
    let immuDataList;
    let immuItem;
    switch (action.type) {
        case pro.GETPRODUCTION:
            return {...state, ...action}
        case pro.TOGGLESELECT:
            immuDataList = Immutable.List(state.dataList)
            immuItem = Immutable.Map(state.dataList[action.index])
            immuItem = immuItem.set('selectStatus', !immuItem.get('selectStatus'))
            immuDataList = immuDataList.set(action.index, immuItem)
            return {...state, ...{dataList: immuDataList.toJS()}}
        case pro.EDITPRODUCTION:
            immuDataList = Immutable.List(state.dataList)
            immuItem = Immutable.Map(state.dataList[action.index])
            immuItem = immuItem.set('selectNum', action.selectNum)
            immuDataList = immuDataList.set(action.index, immuItem)
            return {...state, ...{dataList: immuDataList.toJS()}}
        case pro.CLEARSELECTED:
            immuDataList = Immutable.fromJS (state.dataList);
            for (let i = 0; i < state.dataList.length; i++) {
                immuDataList = immuDataList.update (i, item => {
                    item = item.set('selectStatus', false);
                    item = item.set('selectNum', 0);
                    return item;
                })
            }
            return {...state, ...{dataList: immuDataList.toJS()}};
        default:
            return state;
    }
}
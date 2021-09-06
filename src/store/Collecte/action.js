import * as pro from './action-type'


export const getProData = () => {
    return {
        type: pro.GETPRODUCTION,
        dataList: [ {selectNum: 1}, {selectNum: 2}, {selectNum: 3} ]
    }
}

export const togSelectPro = index => {
    return {
        type: pro.TOGGLESELECT,
        index
    }
}

export const editPro = (index, selectNum) => {
    return {
        type: pro.EDITPRODUCTION,
        index,
        selectNum
    }
}

export const clearSelect =() => {
    return {
        type: pro.CLEARSELECTED
    }
}
import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
//NavLink作为跳转路由标签，如常用的侧边栏跳转高亮效果就可以使用这个标签
import './Header.scss'

const selectedStyle = {
    backgroundColor: 'red',
    color: 'slategray'
}

class Header extends Component {
    render () {
        return (
            <nav>
                <NavLink to = '/home' activeStyle = { selectedStyle }>首页</NavLink>
                <NavLink to = '/Detail' activeStyle = { selectedStyle }>详情</NavLink>
                <NavLink to = '/Login' activeStyle = { selectedStyle }>登录</NavLink>
                <NavLink to = '/Collecte' activeStyle = { selectedStyle }>收集</NavLink>
            </nav>
        )
    }
}

export default Header
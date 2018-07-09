import React from 'react';
import {Layout,Menu,Icon}from 'antd';
const {Sider} = Layout;

//左侧导航条组件
class Nav extends React.Component{
	constructor(props){
		super(props);
		this.state={
			
		}
	}
	render(){
		return(
			<Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
				<div className="title">WeFGOWK信息录入</div>
				<Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
					{
						this.props.menuItemList.map((item,index)=>
							<Menu.Item key={index}>
								<Icon type="user"/>
								<span className="nav-text">{item}</span>
							</Menu.Item>
						)
					}
				</Menu>
			</Sider>
		);
	}
}
export default Nav;
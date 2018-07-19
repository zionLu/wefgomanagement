import React from 'react';
import {Layout,Menu,Icon}from 'antd';
import {NavLink}from 'react-router-dom';
const {Sider} = Layout;

//左侧导航条组件
class Nav extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			// menuItemList:['英灵','礼装','素材','衣服'],
			menuItemList:[{
				name:'英灵',
				url:'/hero',
			},{
				name:'礼装',
				url:'/gift'
			},{
				name:'素材',
				url:'/material'
			},{
				name:'衣服',
				url:'/clothes'
			}],
		}
	}
	render(){
		return(
			<Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
				<div className="title">WeFGOWK信息录入</div>
				<Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
					{
						this.state.menuItemList.map((item,index)=>
							<Menu.Item key={index}>
								<NavLink to={item.url}>
									<Icon type="user"/>
									<span className="nav-text">{item.name}</span>
								</NavLink>
							</Menu.Item>
						)
					}
				</Menu>
			</Sider>
		);
	}
}
export default Nav;
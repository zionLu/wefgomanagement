import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Layout}from 'antd';
import 'antd/dist/antd.css';
import Nav from './components/Nav.js';
import HeroTable from './components/HeroTable.js'
const {Header,Content,Footer} = Layout;


//整个面板组件
class MainPanel extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			menuItemList:['英灵','礼装','素材','衣服'],
			value:"狗屎，累爆",
		}
	}
	render() {
		return (
			<Layout>
				{/* <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
					<div className="title">WeFGOWK信息录入</div>
					<Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
						<Menu.Item key="1">
							<Icon type="user" />
							<span className="nav-text">nav 1</span>
						</Menu.Item>
						<Menu.Item key="2">
							<Icon type="video-camera" />
							<span className="nav-text">nav 2</span>
						</Menu.Item>
						<Menu.Item key="3">
							<Icon type="upload" />
							<span className="nav-text">nav 3</span>
						</Menu.Item>
						<Menu.Item key="4">
							<Icon type="bar-chart" />
							<span className="nav-text">nav 4</span>
						</Menu.Item>
						<Menu.Item key="5">
							<Icon type="cloud-o" />
							<span className="nav-text">nav 5</span>
						</Menu.Item>
						<Menu.Item key="6">
							<Icon type="appstore-o" />
							<span className="nav-text">nav 6</span>
						</Menu.Item>
						<Menu.Item key="7">
							<Icon type="team" />
							<span className="nav-text">nav 7</span>
						</Menu.Item>
						<Menu.Item key="8">
							<Icon type="shop" />
							<span className="nav-text">nav 8</span>
						</Menu.Item>
						<Menu.SubMenu
						key="sub1"
						title={<span><Icon type="user" /><span>User</span></span>}
						>
							<Menu.Item key="9">Tom</Menu.Item>
							<Menu.Item key="10">Bill</Menu.Item>
							<Menu.Item key="11">Alex</Menu.Item>
						</Menu.SubMenu>
					</Menu>
				</Sider> */}
				<Nav menuItemList={this.state.menuItemList}></Nav>
				<Layout style={{ marginLeft: 200 }}>
					<Header style={{ background: '#fff', padding: 0 }} />
					<Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
						<div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
							<HeroTable></HeroTable>
						</div>
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						Author ZionLu
					</Footer>
				</Layout>
		  	</Layout>
		);
	}
}



  
  // ========================================
  
ReactDOM.render(
	<MainPanel />,
	document.getElementById('root')
);
  
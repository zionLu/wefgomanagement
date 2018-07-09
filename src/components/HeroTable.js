import React from 'react';
import {Table}from 'antd';

//左侧导航条组件
class HeroTable extends React.Component{
	constructor(props){
		super(props);
		this.state={
			heroList:[
				{
					key:1,
					avatar:'x',
					id:'001',
					name:'test测试'
				}
			],
			columns:[
				{
					title:'头像',
					dataIndex:'avatar',
					key:'avatar',
				},
				{
					title:'编号',
					dataIndex:'id',
					key:'id'
				},
				{
					title:'名称',
					dataIndex:'name',
					key:'name',
				},
				{
					title:'CV',
					dataIndex:'CV',
					key:'CV',
				},
				{
					title:'画师',
					dataIndex:'painter',
					key:'painter',
				},
				{
					title:'职介',
					dataIndex:'class',
					key:'class',
				},
				{
					title:'稀有度',
					dataIndex:'rarity',
					key:'rarity',
				},
				{
					title:'特性',
				},
				{
					title:'保有技能',
				},
				{
					title:'卡组',
				},
				{
					title:''
				}
			]
		}
	}
	render(){
		return(
			<Table columns={this.state.columns} dataSource={this.state.heroList} ></Table>
		);
	}
}
export default HeroTable;
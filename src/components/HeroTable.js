import React from 'react';
import {Table,Button}from 'antd';

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
					fixed:'left',
					align:'center',
				},
				{
					title:'编号',
					dataIndex:'id',
					key:'id',
					fixed:'left',
					align:'center',
				},
				{
					title:'名称',
					dataIndex:'name',
					key:'name',
					fixed:'left',
					align:'center',
				},
				{
					title:'CV',
					dataIndex:'CV',
					key:'CV',
					align:'center',
				},
				{
					title:'画师',
					dataIndex:'painter',
					key:'painter',
					align:'center',
				},
				{
					title:'职介',
					dataIndex:'class',
					key:'class',
					align:'center',
				},
				{
					title:'稀有度',
					dataIndex:'rarity',
					key:'rarity',
					align:'center',
				},
				{
					title:'特性',
					align:'center',
				},
				{
					title:'保有技能',
					align:'center',
				},
				{
					title:'卡组',
					align:'center',
				},
				{
                    title: '操作',
                    key: 'operation',
                    fixed: 'right',
					width: 180,
					align:'center',
                    render: () => <span><Button size="small" type="primary">编辑</Button>&nbsp;&nbsp;&nbsp;<Button size="small" type="danger">删除</Button></span>,
                },
			]
		}
	}
	render(){
		return(
			<div>
				<div className="TableMenu">
					<Button type="primary">增加</Button>
				</div>
				<Table columns={this.state.columns} dataSource={this.state.heroList} ></Table>
			</div>
		);
	}
}
export default HeroTable;
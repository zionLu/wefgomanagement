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
				},
				{
					title:'编号',
					dataIndex:'id',
					key:'id',
					fixed:'left',
				},
				{
					title:'名称',
					dataIndex:'name',
					key:'name',
					fixed:'left',
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
                    title: '操作',
                    key: 'operation',
                    fixed: 'right',
                    width: 100,
                    render: () => <span><a>编辑</a>|<a>删除</a></span>,
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
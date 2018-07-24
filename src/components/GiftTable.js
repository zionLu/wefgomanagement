import React from 'react'
import {Table,Button}from 'antd'
import GiftPanel from './GiftPanel.js'

export default class GiftTable extends React.Component{
    constructor(props){
		super(props);
		this.state={
			giftList:[
				{
					key:1,
					avatar:'x',
					id:'001',
                    name:'test测试',
					painter:'测试',
					description:'测试',    
					isActivityGift:'测试',
					activityEffect:'测试',
                    rarity:'测试',
                    skill:'测试',
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
					title:'画师',
					dataIndex:'painter',
					key:'painter',
				},
				{
					title:'是否活动礼装',
					dataIndex:'isActivityGift',
					key:'isActivityGift',
				},
				{
                    title:'活动效果',
                    dataIndex:'activityEffect',
                    key:'activityEffect',
				},
				{
					title:'稀有度',
					dataIndex:'rarity',
					key:'rarity',
				},
				{
                    title:'技能',
                    dataIndex:'skill',
                    key:'skill'
				},
                {
                    title: '操作',
                    key: 'operation',
                    fixed: 'right',
                    width: 100,
                    render: () => <span><a>编辑</a>|<a>删除</a></span>,
                },
			],
			panelVisible:false,
		}
	}
	handleAdd=()=>{
        this.setState({
            panelVisible:true
        })
    }
    panelCancel(){
        // console.log(this)
        this.setState({
            panelVisible:false
        })
    }
	render(){
		return(
			<div>
				<div className="TableMenu">
					<Button type="primary" onClick={this.handleAdd}>增加</Button>
				</div>
				<Table columns={this.state.columns} dataSource={this.state.giftList} ></Table>
				<GiftPanel visible={this.state.panelVisible} handleCancel={()=>this.panelCancel()}></GiftPanel>
			</div>
		);
	} 
}
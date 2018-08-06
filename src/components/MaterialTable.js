import React from 'react'
import {Table,Button} from 'antd'
import MaterialPanel from './MaterialPanel.js'

export default class MaterialTable extends React.Component{
    constructor(props){
        super(props);
        this.state={
            materialList:[
                {
					key:1,
					avatar:'x',
                    name:'test测试',
                    rarity:'测试',
                    location:'测试',
				}
            ],
            columns:[
                {
					title:'头像',
					dataIndex:'avatar',
                    key:'avatar',
                    align:'center',
				},
				{
					title:'名称',
					dataIndex:'name',
                    key:'name',
                    align:'center',
                },
                {
                    title:'稀有度',
					dataIndex:'rarity',
                    key:'rarity',
                    align:'center',
                },
                {
                    title:'掉落地点',
                    dataIndex:'location',
                    key:'location',
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
				<Table columns={this.state.columns} dataSource={this.state.materialList} ></Table>
                <MaterialPanel visible={this.state.panelVisible} handleCancel={()=>this.panelCancel()}></MaterialPanel>
			</div>
        )
    }  
}
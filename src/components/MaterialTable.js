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
                    fixed:'left',
				},
				{
					title:'名称',
					dataIndex:'name',
                    key:'name',
                    fixed:'left',
                },
                {
                    title:'稀有度',
					dataIndex:'rarity',
					key:'rarity',
                },
                {
                    title:'掉落地点',
                    dataIndex:'location',
                    key:'location',
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
				<Table columns={this.state.columns} dataSource={this.state.materialList} ></Table>
                <MaterialPanel visible={this.state.panelVisible} handleCancel={()=>this.panelCancel()}></MaterialPanel>
			</div>
        )
    }  
}
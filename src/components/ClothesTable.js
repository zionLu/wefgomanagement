import React from 'react'
import {Table,Button} from 'antd'
import ClothesPanel from './ClothesPanel.js'

export default class ClothesTable extends React.Component{
    constructor(props){
        super(props)
        this.state={
            clothesList:[
                {
					key:1,
					avatar:'x',
                    name:'test测试',
                    description:'测试',
                    skill1:'测试',
                    skill2:'测试',
                    skill3:'测试',
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
                    title:'描述',
                    dataIndex:'description',
                    key:'descruption',
                    align:'center',
                },
                {
                    title:'1技能',
                    dataIndex:'skill1',
                    key:'skill1',
                    align:'center',
                },
                {
                    title:'2技能',
                    dataIndex:'skill2',
                    key:'skill2',
                    align:'center',
                },
                {
                    title:'3技能',
                    dataIndex:'skill3',
                    key:'skill3',
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
				<Table columns={this.state.columns} dataSource={this.state.clothesList}></Table>
                <ClothesPanel visible={this.state.panelVisible} handleCancel={()=>this.panelCancel()}></ClothesPanel>
			</div>
        )
    }  
}
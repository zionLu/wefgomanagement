import React from 'react'
import {Table,Button} from 'antd'
export default class ClothesTable extends React.Component{
    constructor(props){
        super(props)
        this.state={
            clothesList:[
                {
					key:1,
					avatar:'x',
					id:'001',
                    name:'test测试',
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
                    title:'1技能',
                    dataIndex:'skill1',
                    key:'skill1'
                },
                {
                    title:'2技能',
                    dataIndex:'skill2',
                    key:'skill2',
                },
                {
                    title:'3技能',
                    dataIndex:'skill3',
                    key:'skill3',
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
				<Table columns={this.state.columns} dataSource={this.state.clothesList} ></Table>
			</div>
        )
    }  
}
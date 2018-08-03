import React from 'react';
import { Modal, Input, Form,Upload, Icon, message } from 'antd';
const FormItem=Form.Item;
const {TextArea}=Input;
const InputGroup = Input.Group;
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}
  
function beforeUpload(file) {
    console.log(file.type)
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
        message.error('只可以上传图片文件!');
    }
    return isJPG;
}

class ClothesPl extends React.Component{
    constructor(props){
        super(props);
        this.state={
            avatar:undefined,
            name:'',
            description:'',
            skill1:{
                effect:'',
                value:['','','','','','','','','',''],
                cd:['','','']
            },
            skill2:{
                effect:'',
                value:['','','','','','','','','',''],
                cd:['','','']
            },
            skill3:{
                effect:'',
                value:['','','','','','','','','',''],
                cd:['','','']
            }
        }
    }
    handleAvatarChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ avatarLoading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => this.setState({
                imageUrl,
                avatarLoading: false,
            }));
        }
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        const uploadButton = (
            <div>
                <Icon type={this.state.avatarLoading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return(
            <Modal title="请输入衣服详细信息" 
                visible={this.props.visible}
                onOk={this.handleCommit} 
                onCancel={()=>this.props.handleCancel()}  
                cancelText="取消"
                okText="确认" 
                maskClosable={false}
            >
                <Form layout="vertical" hideRequiredMark>
                    <FormItem label="头像">
                        {getFieldDecorator('avatar', {
                            rules: [{
                                required: true, message: '头像不能为空!',
                            }],
                        })(
                            <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="//jsonplaceholder.typicode.com/posts/"
                                beforeUpload={beforeUpload}
                                onChange={this.handleAvatarChange}
                            >
                                {this.state.avatar ? <img src={this.state.avatar} alt="avatar" /> : uploadButton}
                            </Upload>
                        )}
                    </FormItem>
                    <FormItem label="名称">
                        {getFieldDecorator('name', {
                            rules: [{
                                required: true, message: '礼装名称不能为空!',
                            }],
                        })(
                            <Input placeholder="请输入礼装名称(与游戏严格一致)"/>
                        )}
                    </FormItem>
                    <FormItem label="描述">
                        {getFieldDecorator('description', {
                            rules: [{
                                required: true, message: '请填写礼装描述',
                            }],
                        })(
                            <TextArea placeholder="请填写礼装描述"/>
                        )}
                    </FormItem>
                    <FormItem label="技能1">
                        <FormItem label="技能效果" style={{marginBottom:'0'}}>
                            {getFieldDecorator('value', {
                                rules: [{
                                    required: true, message: '技能效果不能为空!',
                                }],
                            })(
                                <Input placeholder="请输入技能效果(与游戏严格一致)"/>
                            )}
                        </FormItem>
                        <FormItem label="技能数值" style={{marginBottom:'0'}}>
                            <InputGroup compact>
                                {this.state.skill1.value.map((value,index)=><input key={`$value{index}`} style={{width:'10%'}}></input>)}
                            </InputGroup>
                        </FormItem>
                        <FormItem label="技能冷却时间" style={{marginBottom:'0'}}>
                            <InputGroup compact>
                                {this.state.skill1.cd.map((cd,index)=><input key={`$cd{index}`} style={{width:'33.3%'}}></input>)}
                            </InputGroup>
                        </FormItem>
                    </FormItem>
                    <FormItem label="技能2">
                        <FormItem label="技能效果" style={{marginBottom:'0'}}>
                            {getFieldDecorator('value', {
                                rules: [{
                                    required: true, message: '技能效果不能为空!',
                                }],
                            })(
                                <Input placeholder="请输入技能效果(与游戏严格一致)"/>
                            )}
                        </FormItem>
                        <FormItem label="技能数值" style={{marginBottom:'0'}}>
                            <InputGroup compact>
                                {this.state.skill2.value.map((value,index)=><input key={`$value{index}`} style={{width:'10%'}}></input>)}
                            </InputGroup>
                        </FormItem>
                        <FormItem label="技能冷却时间" style={{marginBottom:'0'}}>
                            <InputGroup compact>
                                {this.state.skill2.cd.map((cd,index)=><input key={`$cd{index}`} style={{width:'33.3%'}}></input>)}
                            </InputGroup>
                        </FormItem>
                    </FormItem>
                    <FormItem label="技能3">
                        <FormItem label="技能效果" style={{marginBottom:'0'}}>
                            {getFieldDecorator('value', {
                                rules: [{
                                    required: true, message: '技能效果不能为空!',
                                }],
                            })(
                                <Input placeholder="请输入技能效果(与游戏严格一致)"/>
                            )}
                        </FormItem>
                        <FormItem label="技能数值" style={{marginBottom:'0'}}>
                            <InputGroup compact>
                                {this.state.skill3.value.map((value,index)=><input key={`$value{index}`} style={{width:'10%'}}></input>)}
                            </InputGroup>
                        </FormItem>
                        <FormItem label="技能冷却时间" style={{marginBottom:'0'}}>
                            <InputGroup compact>
                                {this.state.skill3.cd.map((cd,index)=><input key={`$cd{index}`} style={{width:'33.3%'}}></input>)}
                            </InputGroup>
                        </FormItem>
                    </FormItem>
                </Form>
            </Modal>
        )
    }
}
const ClothesPanel = Form.create()(ClothesPl);
export default ClothesPanel
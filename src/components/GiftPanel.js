import React from 'react';
import { Modal, Input, Form,Select,Upload, Icon, message,Radio,Rate,Button } from 'antd';
const FormItem=Form.Item;
const {TextArea}=Input;
const RadioGroup = Radio.Group;
const InputGroup = Input.Group;
const Option = Select.Option;
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

class GiftPl extends React.Component{
    constructor(props){
        super(props)
        this.state={
            avatar:undefined,
            id:'',
            name:'',
            painter:'',
            description:'',
            isActivityGift:'',
            activityEffect:'',
            rarity:'',
            skill:[{
                type:undefined,
                min:undefined,
                man:undefined,
            }],
            photo:undefined,
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
    addSkill=()=>{
        let newSkillList = this.state.skill
        newSkillList.push({
            type:undefined,
            min:undefined,
            man:undefined,
        })
        this.setState({
            skill:newSkillList
        })
    }
    removeSkill=(index)=>{
        let newSkillList = this.state.skill
        newSkillList.splice(index,1)
        this.setState({
            skill:newSkillList
        })
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
            <Modal title="请输入礼装详细信息" 
                visible={this.props.visible}
                onOk={this.handleCommit} 
                onCancel={()=>this.props.handleCancel()}  
                cancelText="取消"
                okText="确认" 
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
                    <FormItem label="编号">
                        {getFieldDecorator('id', {
                            rules: [{
                                required: true, message: '礼装编号不能为空!',
                            }],
                        })(
                            <Input placeholder="请输入礼装编号"/>
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
                    <FormItem label="画师">
                        {getFieldDecorator('painter', {
                            rules: [{
                                required: true, message: '画师不能为空!',
                            }],
                        })(
                            <Input placeholder="请输入画师名字"/>
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
                    <FormItem label="是否活动礼装">
                        {getFieldDecorator('isActivityGift', {
                            rules: [{
                                required: true, message: '请选择是否为活动礼装',
                            }],
                        })(
                            <RadioGroup>
                                <Radio value={1}>是</Radio>
                                <Radio value={0}>否</Radio>
                            </RadioGroup>
                        )}
                    </FormItem>
                    <FormItem label="稀有度">
                        {getFieldDecorator('rarity')(
                            <Rate allowClear={false} />
                        )}
                    </FormItem>
                    <FormItem label="技能效果">
                        <FormItem>
                            {(this.state.skill.map((skill,index)=>
                                <FormItem label={`技能效果${index+1}`} key={`skill${index}`} style={{marginBottom:0}}>
                                    <InputGroup compact>
                                        <Select placeholder="请选择技能类型" style={{width:"28%"}}>
                                            <Option value="0">示例1</Option>
                                            <Option value="1">示例2</Option>
                                        </Select>
                                        <Input style={{width:"28%"}} placeholder="未满破效果数值"></Input>
                                        <Input style={{width:"28%"}} placeholder="满破效果数值"></Input>
                                        {this.state.skill.length >= 1 ? (
                                            <Button  type="danger" style={{width:"16%"}} onClick={()=>this.removeSkill(index)}>删除</Button>
                                        ) : null}
                                    </InputGroup>
                                    
                                </FormItem>
                            ))}
                            <Button type="dashed" onClick={this.addSkill} style={{ width: '100%',marginTop:30 }}>
                                <Icon type="plus" /> 添加技能效果
                            </Button>
                        </FormItem>
                    </FormItem>
                </Form>
            </Modal>
        )
    }
}
const GiftPanel = Form.create()(GiftPl);
export default GiftPanel
import React from 'react';
import { Modal, Input, Form,Select,Upload, Icon, message,Radio,Rate,Button } from 'antd';
const FormItem=Form.Item;
const {TextArea}=Input;
const RadioGroup = Radio.Group;
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
            skill:[],
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
                        {getFieldDecorator('rarity', {
                            rules: [{
                                required: true, message: '礼装稀有度不能为空!',
                            }],
                        })(
                            <Rate allowClear={false} />
                        )}
                    </FormItem>
                    <FormItem label="技能效果">
                        <FormItem>
                            <Button type="dashed" onClick={this.add} style={{ width: '100%' }}>
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
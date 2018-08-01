import React from 'react';
import { Modal, Input, Form,Select,Upload, Icon, message } from 'antd';
const FormItem=Form.Item;
const {Option,OptGroup} = Select;
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

class MaterialPl extends React.Component{
    constructor(props){
        super(props)
        this.state={
            avatar:undefined,
            name:'',
            rarity:'',
            location:'',
            avatarLoading:false
        }
    }
    handleCommit=()=>{
        //提交
    }
    handleNameChange=(name)=>{
        this.setState({
            name
        })
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
            <Modal title="请输入素材详细信息" 
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
                                required: true, message: '素材名称不能为空!',
                            }],
                        })(
                            <Input placeholder="请输入素材名称(与游戏严格一致)"/>
                        )}
                    </FormItem>
                    <FormItem label="稀有度">
                        {getFieldDecorator('rarity', {
                            rules: [{
                                required: true, message: '素材稀有度不能为空!',
                            }],
                        })(
                            <Select style={{ width: 150 }} placeholder="请选择素材稀有度">
                                <Option value='0'>铜</Option>
                                <Option value='1'>银</Option>
                                <Option value='2'>金</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem label="掉落地点">
                        {getFieldDecorator('location', {
                            rules: [{
                                required: true, message: '素材掉落地点不能为空!',
                            }],
                        })(
                            <Select
                                mode="multiple"
                                placeholder="请选择素材掉落地点"
                            >
                                <OptGroup label="周回修炼场">
                                    <OptGroup label="周1·枪之修炼场">
                                        <Option value='111'>周1·枪之修炼场·初级</Option>
                                        <Option value='112'>周1·枪之修炼场·中级</Option>
                                        <Option value='113'>周1·枪之修炼场·上级</Option>
                                        <Option value='114'>周1·枪之修炼场·超级</Option>
                                    </OptGroup>
                                    <OptGroup label="周1·枪之修炼场">
                                        <Option value='121'>周1·枪之修炼场·初级</Option>
                                        <Option value='122'>周1·枪之修炼场·中级</Option>
                                        <Option value='123'>周1·枪之修炼场·上级</Option>
                                        <Option value='124'>周1·枪之修炼场·超级</Option>
                                    </OptGroup>
                                    <OptGroup label="周1·枪之修炼场">
                                        <Option value='131'>周1·枪之修炼场·初级</Option>
                                        <Option value='132'>周1·枪之修炼场·中级</Option>
                                        <Option value='133'>周1·枪之修炼场·上级</Option>
                                        <Option value='134'>周1·枪之修炼场·超级</Option>
                                    </OptGroup>
                                    <OptGroup label="周1·枪之修炼场">
                                        <Option value='141'>周1·枪之修炼场·初级</Option>
                                        <Option value='142'>周1·枪之修炼场·中级</Option>
                                        <Option value='143'>周1·枪之修炼场·上级</Option>
                                        <Option value='144'>周1·枪之修炼场·超级</Option>
                                    </OptGroup>
                                    <OptGroup label="周1·枪之修炼场">
                                        <Option value='151'>周1·枪之修炼场·初级</Option>
                                        <Option value='152'>周1·枪之修炼场·中级</Option>
                                        <Option value='153'>周1·枪之修炼场·上级</Option>
                                        <Option value='154'>周1·枪之修炼场·超级</Option>
                                    </OptGroup>
                                    <OptGroup label="周1·枪之修炼场">
                                        <Option value='161'>周1·枪之修炼场·初级</Option>
                                        <Option value='162'>周1·枪之修炼场·中级</Option>
                                        <Option value='163'>周1·枪之修炼场·上级</Option>
                                        <Option value='164'>周1·枪之修炼场·超级</Option>
                                    </OptGroup>
                                    <OptGroup label="周1·枪之修炼场">
                                        <Option value='171'>周1·枪之修炼场·初级</Option>
                                        <Option value='172'>周1·枪之修炼场·中级</Option>
                                        <Option value='173'>周1·枪之修炼场·上级</Option>
                                        <Option value='174'>周1·枪之修炼场·超级</Option>
                                    </OptGroup>
                                </OptGroup>
                                <OptGroup label="章节掉落">
                                    <OptGroup label="第1部">
                                        <OptGroup label="序章">
                                            <Option value='201'>某地图</Option>
                                        </OptGroup>
                                        <OptGroup label="第一章">
                                            <Option value='211'>某地图</Option>
                                        </OptGroup>
                                        <OptGroup label="第二章">
                                            <Option value='221'>某地图</Option>
                                        </OptGroup>
                                        <OptGroup label="第三章">
                                            <Option value='231'>某地图</Option>
                                        </OptGroup>
                                        <OptGroup label="第四章">
                                            <Option value='241'>某地图</Option>
                                        </OptGroup>
                                        <OptGroup label="第五章">
                                            <Option value='251'>某地图</Option>
                                        </OptGroup>
                                        <OptGroup label="第六章">
                                            <Option value='261'>某地图</Option>
                                        </OptGroup>
                                        <OptGroup label="第七章">
                                            <Option value='271'>某地图</Option>
                                        </OptGroup>
                                    </OptGroup>
                                    <OptGroup label="第1.5部">
                                        <OptGroup label="第一章">
                                            <Option value='311'>某地图</Option>
                                        </OptGroup>
                                        <OptGroup label="第二章">
                                            <Option value='321'>某地图</Option>
                                        </OptGroup>
                                        <OptGroup label="第三章">
                                            <Option value='331'>某地图</Option>
                                        </OptGroup>
                                        <OptGroup label="第四章">
                                            <Option value='341'>某地图</Option>
                                        </OptGroup>
                                    </OptGroup>
                                </OptGroup>
                                <OptGroup label="特殊">
                                    <Option value='91'>QP,每场掉落</Option>
                                    <Option value='92'>活动掉落</Option>
                                    <Option value='93'>剧情通关获得</Option>
                                    <Option value='94'>活动商店或任务奖励</Option>
                                </OptGroup>
                            </Select>
                        )}
                    </FormItem>
                </Form>
            </Modal>
        )
    }
}

const MaterialPanel = Form.create()(MaterialPl);
export default MaterialPanel
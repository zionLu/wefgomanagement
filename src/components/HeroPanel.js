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

class HeroPl extends React.Component{
    constructor(props){
        super(props)
        this.state={
            avatar:undefined,
            id:'',
			name:'',
			cv:'',
			painter:'',
			area:'',
			source:'',
			sex:'',
			height:'',
			weight:'',
			class:'',
            rarity:'',
            card:'',
			camp:'',
			property:'',
			characteristic:'',
			keepSkill:'',
			baseHP:'',
			baseATK:'',
			maxBreakHP:'',
			maxBreakATK:'',
			maxLevelHP:'',
			maxLevelATK:'',
			maxCupHP:'',
			maxCupATK:'',
			dieRate:'',
			createStarRate:'',
			critWeight:'',
			busterHIT:'',
			quickHIT:'',
			artsHIT:'',
			extraHIT:'',
			busterNP:'',
			quickNP:'',
			artsNP:'',
			extraNP:'',
			hoguNP:'',
			hitNP:'',
			skill1:'',
			skill2:'',
			skill3:'',
            hogu:'',
            

            
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
    // addSkill=()=>{
    //     let newSkillList = this.state.skill
    //     newSkillList.push({
    //         type:undefined,
    //         min:undefined,
    //         man:undefined,
    //     })
    //     this.setState({
    //         skill:newSkillList
    //     })
    // }
    // removeSkill=(index)=>{
    //     let newSkillList = this.state.skill
    //     newSkillList.splice(index,1)
    //     this.setState({
    //         skill:newSkillList
    //     })
    // }
    render(){
        const { getFieldDecorator } = this.props.form;
        const uploadButton = (
            <div>
                <Icon type={this.state.avatarLoading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return(
            <Modal title="请输入英灵详细信息" 
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
                    <FormItem label="编号">
                        {getFieldDecorator('id', {
                            rules: [{
                                required: true, message: '英灵编号不能为空!',
                            }],
                        })(
                            <Input placeholder="请输入英灵编号"/>
                        )}
                    </FormItem>
                    <FormItem label="姓名">
                        {getFieldDecorator('name', {
                            rules: [{
                                required: true, message: '英灵姓名不能为空!',
                            }],
                        })(
                            <Input placeholder="请输入英灵姓名(与游戏严格一致)"/>
                        )}
                    </FormItem>
                    <FormItem label="CV">
                        {getFieldDecorator('cv', {
                            rules: [{
                                required: true, message: 'CV不能为空!',
                            }],
                        })(
                            <Input placeholder="请输入CV名字"/>
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
                    <FormItem label="地域">
                        {getFieldDecorator('area', {
                            rules: [{
                                required: true, message: '地域不能为空!',
                            }],
                        })(
                            <Input placeholder="请输入英灵出自的地域(日本，欧洲等)"/>
                        )}
                    </FormItem>
                    <FormItem label="出处">
                        {getFieldDecorator('source', {
                            rules: [{
                                required: true, message: '出处不能为空!',
                            }],
                        })(
                            <Input placeholder="请输入英灵出处(神话,历史等)"/>
                        )}
                    </FormItem>
                    <FormItem label="性别">
                        {getFieldDecorator('sex', {
                            rules: [{
                                required: true, message: '请选择英灵性别',
                            }],
                        })(
                            <RadioGroup>
                                <Radio value={1}>男</Radio>
                                <Radio value={0}>女</Radio>
                            </RadioGroup>
                        )}
                    </FormItem>
                    <FormItem label="身高">
                        {getFieldDecorator('height', {
                            rules: [{
                                required: true, message: '请填写身高!',
                            }],
                        })(
                            <Input placeholder="请填写身高,单位转化为m"/>
                        )}
                    </FormItem>
                    <FormItem label="体重">
                        {getFieldDecorator('source', {
                            rules: [{
                                required: true, message: '请填写体重!',
                            }],
                        })(
                            <Input placeholder="请填写体重,单位转化为kg"/>
                        )}
                    </FormItem>
                    <FormItem label="职介">
                        {getFieldDecorator('class', {
                            rules: [{
                                required: true, message: '职介不能为空',
                            }],
                        })(
                            <Select placeholder="请选择英灵职介">
                                <Option value="Shilder">Shilder 盾兵</Option>
                                <Option value="Saber">Saber 剑兵</Option>
                                <Option value="Lancer">Lancer 枪兵</Option>
                                <Option value="Archer">Archer 弓兵</Option>
                                <Option value="Rider">Rider 骑兵</Option>
                                <Option value="assassin">assassin 刺客(暗匿者)</Option>
                                <Option value="Caster">Caster 魔术师</Option>
                                <Option value="Basaker">Basaker 狂战士</Option>
                                <Option value="Ruler">Ruler 裁定者</Option>
                                <Option value="Avanger">Avanger 复仇者</Option>
                                <Option value="MoonCancer">Moon Cancer</Option>
                                <Option value="Eltergo">Eltergo</Option>
                                <Option value="Foreigner">Foreigner 外来者</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem label="稀有度">
                        {getFieldDecorator('rarity')(
                            <Rate allowClear={false} />
                        )}
                    </FormItem>
                    <FormItem label="卡组">
                        <InputGroup compact>
                            <Select placeholder="请选择红卡数量" style={{width:"33.3%"}}>
                                <Option value="0">1张</Option>
                                <Option value="1">2张</Option>
                                <Option value="2">3张</Option>
                            </Select>
                            <Select placeholder="请选择绿卡数量" style={{width:"33.3%"}}>
                                <Option value="0">1张</Option>
                                <Option value="1">2张</Option>
                                <Option value="2">3张</Option>
                            </Select>
                            <Select placeholder="请选择蓝卡数量" style={{width:"33.3%"}}>
                                <Option value="0">1张</Option>
                                <Option value="1">2张</Option>
                                <Option value="2">3张</Option>
                            </Select>
                        </InputGroup>
                    </FormItem>
                    <FormItem label="阵营(天地人星)">
                        {getFieldDecorator('camp', {
                            rules: [{
                                required: true, message: '请选择英灵阵营',
                            }],
                        })(
                            <RadioGroup>
                                <Radio value={0}>天</Radio>
                                <Radio value={1}>地</Radio>
                                <Radio value={2}>人</Radio>
                                <Radio value={3}>星</Radio>
                            </RadioGroup>
                        )}
                    </FormItem>
                    <FormItem label="属性(DND九宫格)">
                        {getFieldDecorator('property', {
                            rules: [{
                                required: true, message: '请选择英灵属性',
                            }],
                        })(
                            <RadioGroup>
                                <Radio value={0}>秩序·善</Radio>
                                <Radio value={1}>秩序·中庸</Radio>
                                <Radio value={2}>秩序·恶</Radio>
                                <Radio value={3}>中立·善</Radio>
                                <Radio value={4}>中立·中庸</Radio>
                                <Radio value={5}>中立·恶</Radio>
                                <Radio value={6}>混沌·善</Radio>
                                <Radio value={7}>混沌·中庸</Radio>
                                <Radio value={8}>混沌·恶</Radio>
                            </RadioGroup>
                        )}
                    </FormItem>
                    {/* <FormItem label="技能效果">
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
                    </FormItem> */}
                </Form>
            </Modal>
        )
    }
}
const HeroPanel = Form.create()(HeroPl);
export default HeroPanel
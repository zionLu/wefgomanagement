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

class clothesPl extends React.Component{
    constructor(props){
        super(props);
        
    }
}
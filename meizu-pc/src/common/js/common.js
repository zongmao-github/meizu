import Cookie from 'js-cookie'

import {JSEncrypt} from 'jsencrypt'
import el from "element-ui/src/locale/lang/el";
import ca from "element-ui/src/locale/lang/ca";

export const apiUrl = 'http://localhost/api'

//加密
export function encryptedData(publicKey, data) {
    let encryptor = new JSEncrypt();
    encryptor.setPublicKey(publicKey);
    return encryptor.encrypt(data);
}

//解密
export function decryptData(privateKey, data) {
    let decrypt = new JSEncrypt();
    decrypt.setPrivateKey(privateKey);
    return decrypt.decrypt(data);
}

//对表单进行验证(值，类型，是否必填，回调，是否必填，提示)
let phoneNumber = (rule,value,callback)=>{
    let myReg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
    if(!myReg.test(value)){callback(new Error('请输入正确的手机号'))
    }else{
        callback()
    }
};

export function formValidator(value, type, callback, isRequired, tips) {
    if (!value) {
        if (isRequired) {
            callback(new Error('请输入' + tips));
            return;
        } else {
            callback();
            return;
        }
    }
    let myReg = '';
    switch (type) {
        case 'zipCode'://邮编
            myReg = /^\d{6}$/;
            break;
        case 'phoneNumber'://手机号码
            myReg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
            break;
        case 'isIntNumber':
            myReg = /^[1-9]\d*$/;
            break;
        case 'isNumber':
            myReg = /^[]\d*$/;
            break;
    }
    if (!myReg.test(value)) {
        callback(new Error('请输入正确的' + tips));
        return;
    } else {
        callback();
        return;
    }
}
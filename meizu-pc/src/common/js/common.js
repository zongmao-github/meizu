import Cookie from 'js-cookie'

import {JSEncrypt} from 'jsencrypt'

export const apiUrl = 'http://localhost'

//加密
export function encryptedData(publicKey, data){
    let encryptor = new JSEncrypt();
    encryptor.setPublicKey(publicKey);
    return encryptor.encrypt(data);
}

//解密
export function decryptData(privateKey, data){
    let decrypt = new JSEncrypt();
    decrypt.setPrivateKey(privateKey);
    return decrypt.decrypt(data);
}
import JSEncrypt from 'jsencrypt/bin/jsencrypt.min'

// 仅保留公钥：用于加密登录密码后传输给后端。
// 私钥必须只在后端保存，严禁出现于前端源码/构建产物（此前私钥硬编码在此处，任何人可解密，属高危漏洞）。
// 密钥对生成 http://web.chacuo.net/netrsakeypair
const publicKey = 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKoR8mX0rGKLqzcWmOzbfj64K8ZIgOdH\n' +
  'nzkXSOVOZbFu/TJhZ7rFAN+eaGkl3C4buccQd/EjEsj9ir7ijT7h96MCAwEAAQ=='

// 加密（登录密码等敏感字段在传输前用公钥加密，后端用私钥解密）
export function encrypt(txt) {
  const encryptor = new JSEncrypt()
  encryptor.setPublicKey(publicKey) // 设置公钥
  return encryptor.encrypt(txt) // 对数据进行加密
}

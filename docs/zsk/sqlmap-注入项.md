```
基本选项：
-h, --help: 显示基本的帮助信息并退出。
-hh: 显示高级的帮助信息并退出。
--version: 显示程序的版本号并退出。
-v VERBOSE: 设置详细程度级别，范围从 0 到 6，默认是 1。

目标：
-u URL, --url=URL: 指定目标 URL。
-g GOOGLEDORK: 处理 Google dork 结果作为目标 URL。

请求：
--data=DATA: 发送的 POST 数据字符串。
--cookie=COOKIE: HTTP Cookie 头的值。
--random-agent: 使用随机选择的 HTTP User-Agent 头值。
--proxy=PROXY: 使用代理连接到目标 URL。
--tor: 使用 Tor 匿名网络。
--check-tor: 检查 Tor 是否被正确使用。

注入：
-p TESTPARAMETER: 测试的参数。
--dbms=DBMS: 强制后端数据库管理系统为提供的值。

检测：
--level=LEVEL: 执行测试的级别（1-5，默认是 1）。
--risk=RISK: 执行测试的风险级别（1-3，默认是 1）。

技术：
--technique=TECH..: 要使用的 SQL 注入技术（默认是 "BEUSTQ"）。

枚举：
-a, --all: 检索所有信息。
-b, --banner: 检索数据库管理系统的 banner。
--current-user: 检索数据库管理系统的当前用户。
--current-db: 检索当前数据库的名称（此参数描述被截断，所以完整功能可能还包括更多内容）。

-u URL, --url=URL   目标URL（例如："http://www.site.com/vuln.php?id=1"）  
-d DIRECT           用于直接数据库连接的连接字符串  
-l LOGFILE          从Burp或WebScarab代理日志文件解析目标  
-m BULKFILE         扫描文本文件中提供的多个目标  
-r REQUESTFILE      从文件中加载HTTP请求  
-g GOOGLEDORK       处理Google Dork结果作为目标URL  
-c CONFIGFILE       从配置INI文件中加载选项

-A AGENT, --user-agent=AGENT  设置HTTP User-Agent头信息的值  
-H HEADER, --header=HEADER    添加额外的HTTP头信息（例如："X-Forwarded-For: 127.0.0.1"）  
--method=METHOD               强制使用指定的HTTP方法（例如：PUT）  
--data=DATA                   通过POST发送的数据字符串（例如："id=1"）  
--param-del=PARAM_DELIMITER  用于分隔参数值的字符（例如：&）  
--cookie=COOKIE               设置HTTP Cookie头信息的值（例如："PHPSESSID=a8d127e.."）  
--cookie-del=COOKIE_DELIMITER  用于分隔cookie值的字符（例如：;）  
--live-cookies=LIVE_COOKIES  用于加载最新值的实时cookies文件  
--load-cookies=LOAD_COOKIES  包含以Netscape/wget格式编写的cookies的文件  
--drop-set-cookie             忽略响应中的Set-Cookie头信息  
--mobile                      通过HTTP User-Agent头信息模拟智能手机  
--random-agent                使用随机选择的HTTP User-Agent头信息值  
--host=HOST                   设置HTTP Host头信息的值  
--referer=REFERER             设置HTTP Referer头信息的值  
--headers=HEADERS             添加额外的头信息（例如："Accept-Language: fr\nETag: 123"）  
--auth-type=AUTH_TYPE         HTTP认证类型（Basic, Digest, Bearer, ...）  
--auth-cred=AUTH_CREDENTIALS  HTTP认证凭据（用户名:密码）  
--auth-file=AUTH_FILE         HTTP认证PEM证书/私钥文件  
--abort-code=ABORT_CODE       在遇到（有问题的）HTTP错误代码时中止（例如：401）  
--ignore-code=IGNORE_CODE     忽略（有问题的）HTTP错误代码（例如：401）  
--ignore-proxy                忽略系统默认的代理设置  
--ignore-redirects            忽略重定向尝试  
--ignore-timeouts             忽略连接超时  
--proxy=PROXY                 使用代理连接到目标URL
--proxy-cred=PROXYCRED        设置代理的身份验证凭据（格式：用户名:密码）  
--proxy-file=PROXYFILE        从文件中加载代理列表  
--proxy-freq=PROXYFREQ        从给定列表中更换代理之间的请求次数  
--tor                         使用Tor匿名网络  
--tor-port=TORPORT            设置非默认的Tor代理端口  
--tor-type=TORTYPE            设置Tor代理类型（HTTP、SOCKS4或SOCKS5（默认））  
--check-tor                   检查Tor是否正确使用  
--delay=DELAY                 每个HTTP请求之间的延迟（秒）  
--timeout=TIMEOUT             连接超时前的等待时间（默认30秒）  
--retries=RETRIES             连接超时时的重试次数（默认3次）  
--retry-on=RETRYON            当内容匹配正则表达式时重试请求（例如："drop"）  
--randomize=RPARAM            随机改变给定参数的值  
--safe-url=SAFEURL            在测试期间频繁访问的URL地址  
--safe-post=SAFEPOST          向安全URL发送的POST数据  
--safe-req=SAFEREQ            从文件中加载安全的HTTP请求  
--safe-freq=SAFEFREQ          在访问安全URL之间的常规请求频率  
--skip-urlencode              跳过有效负载数据的URL编码  
--csrf-token=CSRFTOKEN        用于存放反CSRF令牌的参数  
--csrf-url=CSRFURL            提取反CSRF令牌的URL地址  
--csrf-method=CSRFMETHOD      在访问反CSRF令牌页面时使用的HTTP方法  
--csrf-data=CSRFDATA          在访问反CSRF令牌页面时发送的POST数据  
--csrf-retries=CSRFRETRIES    反CSRF令牌检索的重试次数（默认0次）  
--force-ssl                   强制使用SSL/HTTPS  
--chunked                     使用HTTP分块传输编码（POST）请求  
--hpp                         使用HTTP参数污染方法  
--eval=EVALCODE               在请求之前评估提供的Python代码（例如："import hashlib;id2=hashlib.md5(id).hexdigest()"）

-o                  启用所有优化开关  
--predict-output    预测常见查询的输出  
--keep-alive        使用持久的HTTP(s)连接  
--null-connection   在不获取实际HTTP响应体的情况下检索页面长度  
--threads=THREADS   并发HTTP(s)请求的最大数量（默认为1）

-p TESTPARAMETER    要测试的参数  
--skip=SKIP         跳过给定参数的测试  
--skip-static       跳过测试非动态参数  
--param-exclude=..  正则表达式，用于从测试中排除参数（例如："ses"）  
--param-filter=P..  按位置选择可测试的参数（例如："POST"）  
--dbms=DBMS         强制后端DBMS为提供的值  
--dbms-cred=DBMS..  DBMS身份验证凭据（用户名:密码）  
--os=OS             强制后端DBMS操作系统为提供的值  
--invalid-bignum    使用大数来使值无效  
--invalid-logical   使用逻辑运算来使值无效  
--invalid-string    使用随机字符串来使值无效  
--no-cast           关闭负载转换机制  
--no-escape         关闭字符串转义机制  
--prefix=PREFIX     注入负载前缀字符串  
--suffix=SUFFIX     注入负载后缀字符串  
--tamper=TAMPER     使用给定的脚本来篡改注入数据

--level=LEVEL       要执行的测试级别（1-5，默认为1）  
--risk=RISK         要执行测试的风险等级（1-3，默认为1）  
--string=STRING     当查询评估为True时，要匹配的字符串  
--not-string=NOT..  当查询评估为False时，要匹配的字符串  
--regexp=REGEXP     当查询评估为True时，要匹配的正则表达式  
--code=CODE         当查询评估为True时，要匹配的HTTP状态码  
--smart             仅当启发式结果为正时，才执行详尽的测试  
--text-only         仅基于文本内容比较页面  
--titles            仅基于标题比较页面

--technique=TECH..  要使用的SQL注入技术（默认为"BEUSTQ"）  
--time-sec=TIMESEC  DBMS响应的延迟时间（秒）（默认为5）  
--union-cols=UCOLS  用于UNION查询SQL注入的测试列范围  
--union-char=UCHAR  用于暴 力 破 解列数的字符  
--union-from=UFROM  UNION查询SQL注入中FROM部分使用的表  
--union-values=U..  UNION查询SQL注入中使用的列值  
--dns-domain=DNS..  DNS泄露攻击中使用的域名  
--second-url=SEC..  搜索二阶响应的结果页面URL  
--second-req=SEC..  从文件中加载二阶HTTP请求

-f, --fingerprint 执行详尽的DBMS版本指纹检测

--common-tables     检查常见表的存在性  
--common-columns    检查常见列的存在性  
--common-files      检查常见文件的存在性

--udf-inject        注入自定义用户定义函数  
--shared-lib=SHLIB  共享库的本地路径

--file-read=FILE..  从后端DBMS文件系统中读取文件  
--file-write=FIL..  在后端DBMS文件系统中写入本地文件  
--file-dest=FILE..  后端DBMS要写入的绝对文件路径

-a, --all             检索所有内容  
-b, --banner          检索DBMS横幅（版本信息）  
--current-user        检索DBMS当前用户  
--current-db          检索DBMS当前数据库  
--hostname            检索DBMS服务器主机名  
--is-dba              检测DBMS当前用户是否为DBA  
--users               枚举DBMS用户  
--passwords           枚举DBMS用户密码哈希  
--privileges          枚举DBMS用户权限  
--roles               枚举DBMS用户角色  
--dbs                 枚举DBMS数据库  
--tables              枚举DBMS数据库表  
--columns             枚举DBMS数据库表列  
--schema              枚举DBMS模式  
--count               检索表的条目数量  
--dump                导出DBMS数据库表条目  
--dump-all            导出所有DBMS数据库表的条目  
--search              搜索列、表和/或数据库名  
--comments            在枚举期间检查DBMS注释  
--statements          检索在DBMS上运行的SQL语句  
-D DB                 要枚举的DBMS数据库  
-T TBL                要枚举的DBMS数据库表  
-C COL                要枚举的DBMS数据库表列  
-X EXCLUDE            不枚举的DBMS数据库标识符  
-U USER               要枚举的DBMS用户  
--exclude-sysdbs      在枚举表时排除DBMS系统数据库  
--pivot-column=P..    透视列名  
--where=DUMPWHERE     在导出表时使用WHERE条件  
--start=LIMITSTART    要检索的第一个表条目  
--stop=LIMITSTOP      要检索的最后一个表条目  
--first=FIRSTCHAR     要检索的查询输出单词的第一个字符
--last=LASTCHAR       检索查询输出单词的最后一个字符
--sql-query=SQLQ..    执行指定的SQL语句
--sql-shell           进入交互式SQL shell
--sql-file=SQLFILE    从指定的文件(s)中执行SQL语句

--os-cmd=OSCMD      执行操作系统命令  
--os-shell          进入交互式操作系统shell  
--os-pwn            提示进入OOB shell、Meterpreter或VNC  
--os-smbrelay       一键提示进入OOB shell、Meterpreter或VNC  
--os-bof            利用存储过程缓冲区溢出进行攻击  
--priv-esc          提升数据库进程用户权限  
--msf-path=MSFPATH  Metasploit Framework安装的本地路径  
--tmp-path=TMPPATH  远程临时文件目录的绝对路径

--reg-read          读取Windows注册表键值  
--reg-add           写入Windows注册表键值数据  
--reg-del           删除Windows注册表键值  
--reg-key=REGKEY    Windows注册表键  
--reg-value=REGVAL  Windows注册表键值  
--reg-data=REGDATA  Windows注册表键值数据  
--reg-type=REGTYPE  Windows注册表键值类型

-s SESSIONFILE      从存储的（.sqlite）文件中加载会话  
-t TRAFFICFILE      将所有HTTP流量记录到文本文件中  
--abort-on-empty    在结果为空时中止数据检索  
--answers=ANSWERS   设置预定义的答案（例如 "quit=N,follow=N"）  
--base64=BASE64P..  包含Base64编码数据的参数  
--base64-safe       使用URL和文件名安全的Base64字母表（RFC 4648）  
--batch             从不询问用户输入，使用默认行为  
--binary-fields=..  具有二进制值的结果字段（例如 "digest"）  
--check-internet    在评估目标之前检查互联网连接  
--cleanup           从DBMS中清除sqlmap特定的UDF和表  
--crawl=CRAWLDEPTH  从目标URL开始爬取网站  
--crawl-exclude=..  用于从爬取中排除页面的正则表达式（例如 "logout"）  
--csv-del=CSVDEL    CSV输出中使用的分隔字符（默认为","）  
--charset=CHARSET   盲注字符集（例如 "0123456789abcdef"）  
--dump-file=DUMP..  将转储数据保存到自定义文件  
--dump-format=DU..  转储数据的格式（CSV（默认）、HTML或SQLITE）  
--encoding=ENCOD..  用于数据检索的字符编码（例如 GBK）  
--eta               显示每个输出的预计到达时间  
--flush-session     刷新当前目标的会话文件  
--forms             解析并测试目标URL上的表单  
--fresh-queries    忽略会话文件中存储的查询结果  
--gpage=GOOGLEPAGE  使用指定页码上的Google dork结果  
--har=HARFILE       将所有HTTP流量记录到HAR文件中  
--hex               在数据检索期间使用十六进制转换  
--output-dir=OUT..  自定义输出目录路径  
--parse-errors      解析并显示响应中的DBMS错误消息  
--preprocess=PRE..  使用给定的脚本进行预处理（请求）
--postprocess=PO..  使用给定的脚本进行后处理（响应）  
--repair            重新转储含有未知字符标记（?）的条目  
--save=SAVECONFIG   将选项保存到配置文件（INI格式）  
--scope=SCOPE       用于过滤目标的正则表达式  
--skip-heuristics   跳过漏洞的启发式检测  
--skip-waf          跳过WAF/IPS保护的启发式检测  
--table-prefix=T..  用于临时表的前缀（默认为 "sqlmap"）  
--test-filter=TE..  通过载荷和/或标题选择测试（例如 ROW）  
--test-skip=TEST..  通过载荷和/或标题跳过测试（例如 BENCHMARK）  
--time-limit=TIM..  在指定秒数内运行（例如 3600）  
--web-root=WEBROOT  Web服务器文档根目录（例如 "/var/www"）

-z MNEMONICS        使用简短的助记符（例如 "flu,bat,ban,tec=EU"）  
--alert=ALERT       当发现SQL注入时，运行主机操作系统命令  
--beep              在提问时和/或发现漏洞时发出蜂鸣声  
--dependencies      检查缺失的（可选）sqlmap依赖项  
--disable-coloring  禁用控制台输出的颜色  
--list-tampers      显示可用的篡改脚本列表  
--no-logging        禁用日志记录到文件  
--offline            在离线模式下工作（仅使用会话数据）  
--purge             安全地从sqlmap数据目录中删除所有内容  
--results-file=R..  在多个目标模式下CSV结果文件的位置  
--shell             提示交互式sqlmap shell  
--tmp-dir=TMPDIR    用于存储临时文件的本地目录  
--unstable          为不稳定的连接调整选项  
--update            更新sqlmap  
--wizard            为初学者用户提供的简单向导界面
```


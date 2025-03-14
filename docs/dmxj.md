# Java完整项目结构

```
project-root/
│
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   ├── com/
│   │   │   │   └── example/
│   │   │   │       ├── config/         // 配置类
│   │   │   │       ├── controller/     // 控制器
│   │   │   │       ├── dao/            // 数据访问层
│   │   │   │       ├── service/         // 服务层
│   │   │   │       ├── entity/         // 实体类
│   │   │   │       ├── interceptor/     // 拦截器
│   │   │   │       ├── filter/          // 过滤器
│   │   │   │       ├── utils/           // 工具类
│   │   │   │       ├── dto/             // 数据传输对象
│   │   │   │       ├── vo/              // 视图对象
│   │   │   │       ├── constant/        // 常量
│   │   │   │       ├── aspect/          // 切面
│   │   │   │       ├── middleware/      // 中间件
│   │   │   │       └── scheduler/       // 定时任务
│   │   │   └── resources/               // 资源文件
│   │   └── test/                        // 测试代码
│   │
│   └── pom.xml or build.gradle          // 项目配置文件
│
└── README.md                             // 项目说明文件
```



## JAVA目录（基础构造）

src：存储源代码的目录。

lib：存储项目的依赖库。

resources：存储项目资源文件，如配置文件、图片等。

test：存储项目的测试代码。

annotation：放置项目自定义注解；

controller/：存放控制器，接收从前端传来的参数，对访问控制进行转发、各类基本参数校验或者不复用的业务简单处理等；

dao/：数据访问层，与数据库进行交互，负责数据库操作，在Mybaits框架中存放自定义的Mapper接口；

entity/：存放实体类；

interceptor/：拦截器；

service/：存放服务类，负责业务模块逻辑处理。Service层中有两种类，一是Service，用来声明接口；二是ServiceImpl，作为实现类实现接口中的方法；

utils/：存放工具类；

dto/：存放数据传输对象（DataTransfer Object），如请求参数和返回结果；

vo/：视图对象（ViewObject）用于封装客户端请求的数据，防止部分数据泄漏，保证数据安全

constant/：存放常量；

filter/：存放过滤器

onfig/：存放配置文件，如数据库连接配置、应用程序配置等。

middleware/：用于存放中间件，处理请求与响应的逻辑。

aspect/：用于存放切面编程相关的类，通常用于AOP（面向切面编程）。

scheduler/：用于存放定时任务相关的类。

repository/：用于持久化层的接口，通常与DAO类似，但可与Spring Data等框架结合使用。



## 危险函数和类

### 1. SQL相关

- 危险函数/方法

  - `executeQuery()`
  - `executeUpdate()`

- 漏洞

  - **SQL注入**：攻击者通过构造恶意SQL语句，操控数据库。

- 防范措施

  - 使用参数化查询或ORM框架。

- 示例

  ```
  不安全的SQL执行
  String query = "SELECT * FROM users WHERE username = '" + username + "'";
  ResultSet rs = statement.executeQuery(query);
  
  // 安全的参数化查询
  PreparedStatement pstmt = connection.prepareStatement("SELECT * FROM users WHERE username = ?");
  pstmt.setString(1, username);
  ResultSet rs = pstmt.executeQuery();
  ```



### 2. 文件操作

- 危险类/方法

  - `FileInputStream`
  - `FileReader`

- 漏洞

  - **路径遍历**：攻击者可以访问系统敏感文件。

- 防范措施

  - 验证用户输入的路径，限制可访问的目录。

- 示例

  ```
  // 不安全的文件读取
  FileInputStream fis = new FileInputStream("/path/to/file/" + userInput);
  
  // 安全的文件读取
  String safePath = "/path/to/file/";
  if (userInput.matches("[a-zA-Z0-9]+")) { // 验证输入
      FileInputStream fis = new FileInputStream(safePath + userInput);
  }
  ```

### 3. 反序列化

- 危险类/方法

  - `ObjectInputStream`

- 漏洞

  - **反序列化攻击**：攻击者利用反序列化漏洞执行任意代码。

- 防范措施

  - 避免反序列化不可信的数据，使用安全序列化框架。

- 示例

  ```
  // 不安全的反序列化
  ObjectInputStream ois = new ObjectInputStream(new FileInputStream("object.dat"));
  MyObject obj = (MyObject) ois.readObject(); // 可被攻击者控制
  
  // 安全的反序列化
  ObjectInputStream ois = new ObjectInputStream(new FileInputStream("object.dat")) {
      @Override
      protected Class<?> resolveClass(ObjectStreamClass desc) throws IOException, ClassNotFoundException {
          // 只允许特定类
          if (!"com.example.MyObject".equals(desc.getName())) {
              throw new InvalidClassException("Unauthorized deserialization attempt");
          }
          return super.resolveClass(desc);
      }
  };
  ```

### 4. 输入处理

- 危险函数/方法

  - `eval()`
  - `exec()`

- 漏洞

  - **代码注入**：攻击者可以执行任意代码。

- 防范措施

  - 避免使用，采用安全的替代方法。

- 示例

  ```
  // 不安全的eval使用
  var result = eval(userInput);
  
  // 安全的替代
  // 使用函数或条件语句替代eval
  ```

### 5. 输出编码

- 风险

  - 直接输出用户输入的数据。

- 漏洞

  - **XSS（跨站脚本攻击）**：攻击者注入恶意脚本。

- 防范措施

  - 使用输出编码，确保用户输入经过适当处理。

- 示例

  ```
  <!-- 不安全的输出 -->
  <div><?php echo $_GET['userInput']; ?></div>
  
  <!-- 安全的输出 -->
  <div><?php echo htmlspecialchars($_GET['userInput']); ?></div>
  ```

### 6. 不安全的API

- 危险函数/方法

  - `Runtime.exec()`

- 漏洞

  - **命令注入**：攻击者可以执行系统命令。

- 防范措施

  - 使用安全API，限制输入参数。

- 示例

  ```
  // 不安全的命令执行
  Runtime.getRuntime().exec("cmd.exe /c " + userInput);
  
  // 安全的命令执行
  ProcessBuilder pb = new ProcessBuilder("command", "arg1", "arg2");
  ```

### 7. 会话管理

- 风险

  - 不安全的会话处理。

- 漏洞

  - **会话劫持**：攻击者盗取用户会话信息。

- 防范措施

  - 始终使用HTTPS，正确管理会话密钥。

- 示例

  ```
  // 不安全的会话处理
  session.setAttribute("user", user);
  
  // 安全的会话处理
  response.setHeader("Set-Cookie", "sessionId=" + sessionId + "; HttpOnly; Secure");
  ```

# h1
## h2
### h3
#### h4
##### h5
###### h6

**强调语法** 非强调语法

百度链接 > [das](https://www.baidu.com)  
换行  

段落换行

段落换行

>引用  
> 
>Dorothy followed her through many of the beautiful rooms in her castle.

1. 列表
2. Second item
3. Third item
    1. Indented item
    2. Indented item
    3. First item
       1. 1-1
       2. 2-2
       3. 3-3
4. Fourth item  

分割线
 ***  

 ---

 ___

```angular2html
引用？？？？
```
## Git commit specification reference

- `feat` add new functions
- `fix` Fix issues/bugs
- `perf` Optimize performance
- `style` Change the code style without affecting the running result
- `refactor` Re-factor code
- `revert` Undo changes
- `test` Test related, does not involve changes to business code
- `docs` Documentation and Annotation
- `chore` Updating dependencies/modifying scaffolding configuration, etc.
- `workflow` Work flow Improvements
- `ci` CICD
- `types` Type definition
- `wip` In development


![图片](https://markdown.com.cn)  


### 目录规范化
```
.
├── config                  // 配置文件
├── controllers             // 系统控制器
│   ├── admin               // 管理员（独立版管理员）
│   ├── mall                // 商城管理
│   └── api                 // 小程序接口
├── core                    // 系统文件
├── helpers                 // 公共函数、助手类
├── models                  // 系统模型
├── plugins                 // 插件
│   └── demo                // 示例插件
│       ├── assets          // 插件静态文件（css、js）
│       ├── controllers     // 插件控制器
│       ├── models          // 插件模型
│       └── views           // 插件视图
├── runtime                 // 运行临时目录
│   ├── HTML
│   ├── URI
│   ├── cache
│   ├── debug
│   ├── gii-2.0.15.1
│   └── logs
├── validators              // 公共验证器
├── vendor
├── views                   // 系统视图
│   ├── error
│   ├── layouts
│   └── site
└── web
    └── assets
        └── plugins
```

------

# 转义字符
<div>
    <p>
        <span>HTML标签</span>
    </p>
</div>

   
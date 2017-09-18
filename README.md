# RNNative


react-native 中的flex布局属性查询

  http://reactnative.cn/docs/0.48/layout-props.html

react-native 中的flex布局简单讲解

  http://www.jianshu.com/p/8333db87d86c
  
环境安装：

 1、建议安装homebrew
 
 2、brew install node
 
    安装完node后建议设置npm镜像以加速后面的过程（或使用科学上网工具）。注意：不要使用cnpm！cnpm安装的模块路径比较奇怪，packager不能正常识别！
    
    npm config set registry https://registry.npm.taobao.org --global
    
    npm config set disturl https://npm.taobao.org/dist --global
    
 3、Yarn、React Native的命令行工具（react-native-cli）
 
    Yarn是Facebook提供的替代npm的工具，可以加速node模块的下载。React Native的命令行工具用于执行创建、初始化、更新项目、运行打包服务（packager）等任务。
    
    npm install -g yarn react-native-cli
    
    安装完yarn后同理也要设置镜像源：
    
    yarn config set registry https://registry.npm.taobao.org --global
    yarn config set disturl https://npm.taobao.org/dist --global
    
    
  4、安装 Watchman
  
    brew install watchman
    
  5、安装Flow
  
    brew install flow
  
  6、由于RN 0.45之后要安装第三方库boostrap，所以我们先使用0.44.3来编写用例
  
    react-native init MyApp --version 0.44.3
    
    注意后面的版本号必须精确到两个小数点
    
    如果是纯RN项目，运行命令
    
    react-native init MyApp
    
    cd MyApp
    
    react-native run-ios
    
    
  
iOS + react native

1、切换到react native的文件夹下面，例如此项目就是RNComponent目录下面，运行 react-native start 来启动服务
2、正常运行xcode就ok了

常见错误类型

http://www.jianshu.com/p/98c8f2a970eb

VS 插件

https://www.zhihu.com/question/58165388

名称	简述
Auto Close Tag	自动闭合HTML标签
Auto Import	Typescript自动import提示
Auto Rename Tag	修改HTML标签时，自动修改匹配的标签
Beautify css/sass/scss/less	css/sass/less格式化
Better Comments	编写更加人性化的注释
Bookmarks	添加行书签
Can I Use	HTML5、CSS3、SVG的浏览器兼容性检查
Code Runner	运行选中代码段（支持大量语言，包括Node）
Code Spellchecker	单词拼写检查
CodeBing	在VSCode中弹出浏览器并搜索，可编辑搜索引擎
Color Highlight	颜色值在代码中高亮显示
Color Info	小窗口显示颜色值，rgb,hsl,cmyk,hex等等
Color Picker	拾色器
Document This	注释文档生成
ESLint	ESLint插件，高亮提示
EditorConfig for VS Code	EditorConfig插件
Emoji	在代码中输入emoji
File Peek	根据路径字符串，快速定位到文件
Font-awesome codes for html	FontAwesome提示代码段
Git Blame	在状态栏显示当前行的Git信息
Git History(git log)	查看git log
GitLens	显示文件最近的commit和作者，显示当前行commit信息
Guides	高亮缩进基准线
Gulp Snippets	Gulp代码段
HTML CSS Class Completion	CSS class提示
HTML CSS Support	css提示（支持vue）
HTMLHint	HTML格式提示
Indenticator	缩进高亮
IntelliSense for css class names	css class输入提示
JavaScript (ES6) code snippets	ES6语法代码段
JavaScript Standard Style	Standard风格
Less IntelliSense	less变量与混合提示
Lodash	Lodash代码段
MochaSnippets	Mocha代码段
Node modules resolve	快速导航到Node模块
Code Outline	展示代码结构树
Output Colorizer	彩色输出信息
Partial Diff	对比两段代码或文件
Path Autocomplete	路径完成提示
Path Intellisense	另一个路径完成提示
PostCss Sorting	css排序
Prettify JSON	格式化JSON
Project Manager	快速切换项目
Quokka.js	不需要手动运行，行内显示变量结果
REST Client	发送REST风格的HTTP请求
React Native Storybooks	storybook预览插件，支持react
React Playground	为编辑器提供一个react组件运行环境，方便调试
React Standard Style code snippets	react standar风格代码块
Sass	sass插件
Settings Sync	VSCode设置同步到Gist
Sort Typescript Imports	typescript的import排序
Sort lines	排序选中行
String Manipulation	字符串转换处理（驼峰、大写开头、下划线等等）
Syncing	vscode设置同步到gist
TODO Parser	Todo管理
TS/JS postfix completion	ts/js前缀提示
TSLint	TypeScript语法检查
Test Spec Generator	测试用例生成（支持chai、should、jasmine）
TypeScript Import	TS自动import
TypeSearch	TS声明文件搜索
Types auto installer	自动安装@types声明依赖
VSCode Great Icons	文件图标拓展
Version Lens	package.json文件显示模块当前版本和最新版本
View Node Package	快速打开选中模块的主页和代码仓库
VueHelper	Vue2代码段（包括Vue2 api、vue-router2、vuex2）
filesize	状态栏显示当前文件大小
ftp-sync	同步文件到ftp
gitignore	.gitignore文件语法
htmltagwrap	快捷包裹html标签
language-stylus	Stylus语法高亮和提示
markdownlint	Markdown格式提示
npm Intellisense	导入模块时，提示已安装模块名称
npm	运行npm命令
stylelint	css/sass/less代码风格
vetur	目前比较好的Vue语法高亮
vscode-database	操作数据库，支持mysql和postgres
vscode-icons	文件图标，方便定位文件
vscode-random	随机字符串生成器
vscode-styled-components	styled-components高亮支持
vscode-styled-jsx	styled-jsx高亮支持

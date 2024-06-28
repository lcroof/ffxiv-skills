# ffxiv-skills

### 安装环境
## 安装git
```
https://git-scm.com/download/win
无脑下一步
```

## 安装node.js
```
https://nodejs.org/zh-cn/download/prebuilt-installer
选择预构建安装程序，使用Windows 64位 v18.20.3(LTS) 版本下载安装
```

## 安装vscode
什么你还不会百度安装vscode？

## 下载本项目
```
打开cmd，进入一个好文件夹下面
输入git clone https://gitee.com/lcroof/ffxiv-skills.git
```

## 配置git和vscode
```
先去gitee注册一个帐号
git config --global user.name "你的帐号名"
git config --global user.email "你的邮箱地址"
```

## vscode无法执行命令解决方案
```
管理员身份运行PowerShell,输入Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned,然后输入Y确认
```

### 安装方式
```
先加载npm淘宝镜像，再使用npm安装pnpm
npm config set registry https://registry.npmmirror.com
npm install -g pnpm@8.15.0
pnpm config set registry https://registry.npmmirror.com
pnpm install
```

### 启动页面
```
pnpm run serve

默认地址为http://localhost:8080/
```
### 开发注意事项
```
请自己新建一个gitee帐号
帐号或者邮箱名发给作者，作者会视情况发放开发者权限
获取开发者权限后新建一个分支，之后就在这个分支上修改和提交
在开始新修改之前，请在终端中输入git pull origin master对本地代码进行合并
完成所有修改后请提交Pull Request，然后指定专人审核测试
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

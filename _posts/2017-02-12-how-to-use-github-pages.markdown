---
layout: post
title:  "使用jekyll 建立 github.io Pages!"
date:   2017-02-12 13:18:19 +0800
categories: jekyll update
---

环境：Ubuntu 16.04


### 1 安装 jekyll
> sudo apt-get upgrade gem
> sudo gem install jekyll

### 2 安装rdiscount
> sudo gem install rdiscount
> 如果编译失败，需要安装ruby-dev ( 扩展库是需要编译安装，没有dev就找不到ruby的库，所以要安装dev版本的ruby)
> sudo apt-get install ruby-dev
     
### 3 初始化blog
> jekyll new github_blog

### 4 运行blog
> jekyll serve
查看 http://127.0.0.1:4000

### 5 修改个人信息
> _config.yml
> about.md
> index.html
### 6 提交到github
> 新建 .gitignore
添加 _site/*
git init
git add .
git commit -m "blog init"
git remote add origin xxxx.git
git push origin master
此刻可查看 xxx.github.io 是否能访问

### 7 写文章
- 新建文章放在./_posts 文件夹中
- 文件命名需要使用yyyy-mm-dd-xxxx-xx-xxx.xxx格式，支持markdown, html, textile (建议使用markdown)
- 以下--- 之间的部分勿删除，layout 勿改，其他可改动
> ---
> layout: post
> title:  "使用 github + jekyll 搭建个人博客"
> date:   2016-07-24 21:41:45 +0800
> categories: share
> ---

### 8 remarkable
可以使用本地编辑器: 
https://remarkableapp.github.io


Note. 之前域名做过解析到自己买的域名，结果改回来后一直不行，最后删除本地cookie 解决问题。




# ssm-mpa-ui
基于[七象](https://github.com/dantegarden/my-vuejs-skye-cli)开发的vue-mpa前端框架

### 项目介绍

### 技术栈
- vue 2.5
- vue-router
- vuex
- axios
- Element-ui 2.4.11

### 安装教程

#### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:7004
npm run dev

# build for production with minification sit env
npm run build:sit 

# build for production with minification prod env
npm run build:prod

# build for production and view the bundle analyzer report
npm run anlayz
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

###代理配置
执行打包命令后，生成dist，修改nginx.conf时可参考如下配置
```
server {
		listen       9006;
    server_name  localhost;
		
		location /ssm {
			proxy_next_upstream http_502 http_504 error timeout invalid_header;
			proxy_pass   http://127.0.0.1:8080;
			# 真实的客户端IP
			proxy_set_header   X-Real-IP        $remote_addr;
			# 请求头中Host信息
			proxy_set_header   Host             $host;
			# 代理路由信息，此处取IP有安全隐患
			proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
			# 真实的用户访问协议
			proxy_set_header   X-Forwarded-Proto $scheme;
		}
		
    location / {
			add_header Access-Control-Allow-Origin *;
		  add_header Access-Control-Allow-Credentials true;
		  add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
			add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Accept,Content-Type,Authorization';

      root   D:/workspace/node/ssm-mpa-ui/dist;
      try_files $uri $uri/ @router;
			index index.html;
    }
		
		location @router {
			rewrite ^.*$ /index.html last;
		}
	}
```

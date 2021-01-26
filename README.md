# React-Next
React-Next

### SSR 优点
1. 搭建轻松
2. 自带数据同步
3. 丰富的插件 自己形成生态
4. 灵活配置

### 手动配置
### 自动配置: åcreate-next-app

### Router.events.on('')
routeChangeStart
routeChangeComplete
beforeHistoryChange
routeChangeError
hashChangeStart
hashChangeComplete


###  Lazy Loading  模块:moment  组件:

## 模块 可以使用const moment = await import('moment')
## 组件 import dymic from 'next/dymic'
## const one = dymic import ('/')

### 自定义Head 更加油耗的SEO
1. import Head from 'next/head'
2. <Head>
       <title>唐明--- 前端</title>
       <meta charSet='utf-8'></meta>
   </Head>


### 再next.js 框架下实用antDesignUI组件库
1. yarn add @zeit/next-css
2. babel-plugin-import 
3. {
    "presets":["next/babel"],  //Next.js的总配置文件，相当于继承了它本身的所有配置
    "plugins":[     //增加新的插件，这个插件就是让antd可以按需引入，包括CSS
        [
            "import",
            {
                "libraryName":"antd",
                "style":"css" 
            }
        ]
    ]
}

### next.js打包问题
1. _app.js
2. import App from 'next/app'

import 'antd/dist/antd.css'

export default App

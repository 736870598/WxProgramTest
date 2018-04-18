
### 微信小程序开发要求

#### 一、	前端：

前端开发所涉及到的技术主要有：js 、css

前端开发主要在微信提供的专门用于小程序开发的ide中进行开发。下载页面：https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html?t=2018413 

微信小程序的前端页面主要是由微信自己封装的组件构成，官方对每个组件都进行详细的说明介绍，具体介绍地址：
https://developers.weixin.qq.com/miniprogram/dev/component/

前端开发相对来说比较简单，而且微信还为小程序开放了很多常用的功能，比如调用设备硬件功能，获取位置信息，地图服务，调用相册等等很多功能。具体介绍地址：
https://developers.weixin.qq.com/miniprogram/dev/api/ 


#### 二、	后端：

微信小程序对后端开发没有限制要求，前端展示的数据通过网络接口请求与后端交互，但是微信小程序对访问接口的域名有一定要求：

1、请求的服务器域名必须在小程序后中进行配置，配置时需要注意
2、域名只支持 https和 wss 协议； 
3、域名不能使用 IP 地址或 localhost，且不能带端口号； 
4、域名必须经过 ICP 备案；
5、对于每个接口，分别可以配置最多 20 个域名

比如：我在小程序中想通过 https://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel=13880812813
这个接口查询信息，那么域名https://tcc.taobao.com必须要符合小程序的要求，并且配置在该小程序对应的后台中。


#### 三、一个快速入门的视频教程
  https://www.imooc.com/video/16905 

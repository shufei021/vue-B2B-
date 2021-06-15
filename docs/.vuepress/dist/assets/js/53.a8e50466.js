(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{459:function(t,s,e){"use strict";e.r(s);var l=e(57),r=Object(l.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"fiddler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fiddler"}},[t._v("#")]),t._v(" Fiddler")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[e("strong",[t._v("Fiddler")]),t._v("是一个HTTP调试抓包工具。它通过代理的方式获取程序http通讯的数据，可以用其检测网页和服务器的交互情况，Fiddler可以帮您记录，调试Microsoft Internet Explorer与Web应用程序的交互，找到Web程序运行性能的瓶颈，还有如查看向Web服务器发送cookies的内容")])]),t._v(" "),e("h2",{attrs:{id:"fiddler的简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fiddler的简介"}},[t._v("#")]),t._v(" Fiddler的简介")]),t._v(" "),e("ul",[e("li",[t._v("Fiddler是位于客户端和服务器端之间的代理，也是目前最常用的抓包工具之一 。它能够记录客户端和服务器之间的所有 请求，可以针对特定的请求，分析请求数据、设置断点、调试web应用、修改请求的数据，甚至可以修改服务器返回的数据，功能非常强大，是web调试的利器。")]),t._v(" "),e("li",[t._v("看到这么多的应用，是不是就迫不及待的想要开始你的抓包之旅呢，不要急，俗话说的好："),e("strong",[t._v("工欲善其事，必先利其器")]),t._v("，我们先来安装Fiddler吧。")])]),t._v(" "),e("h2",{attrs:{id:"fiddler的下载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fiddler的下载"}},[t._v("#")]),t._v(" Fiddler的下载")]),t._v(" "),e("ul",[e("li",[t._v("打开官网，官网下载地址是https://www.telerik.com/download/fiddler")]),t._v(" "),e("li",[t._v("打开以后选择你的相关信息如下图：\n"),e("img",{attrs:{src:"https://img-blog.csdn.net/2018082908383965?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3ljaGd5eW4=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:"下载"}})]),t._v(" "),e("li",[t._v("然后点击Download按钮开始下载")])]),t._v(" "),e("h2",{attrs:{id:"fiddler的安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fiddler的安装"}},[t._v("#")]),t._v(" Fiddler的安装")]),t._v(" "),e("ul",[e("li",[t._v("下载完成后双击安装包，如下图：\n"),e("img",{attrs:{src:"https://img-blog.csdn.net/2018082908480581?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3ljaGd5eW4=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:"下载1"}})]),t._v(" "),e("li",[t._v("点击"),e("strong",[t._v("I Agree")]),t._v("按钮，然后选择你想要存放的安装目录，如果不需要修改，使用默认的即可。\n"),e("img",{attrs:{src:"https://img-blog.csdn.net/20180829091839395?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3ljaGd5eW4=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:"下载2"}})]),t._v(" "),e("li",[t._v("点击"),e("strong",[t._v("Install")]),t._v("按钮，等待一会时间后即可安装成功。\n"),e("img",{attrs:{src:"https://img-blog.csdn.net/20180829085633399?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3ljaGd5eW4=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:"下载3"}})]),t._v(" "),e("li",[t._v("点击"),e("strong",[t._v("Close")]),t._v("按钮")]),t._v(" "),e("li",[t._v("到这里我们就初步安装成功了")])]),t._v(" "),e("h2",{attrs:{id:"fiddler的配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fiddler的配置"}},[t._v("#")]),t._v(" Fiddler的配置")]),t._v(" "),e("h3",{attrs:{id:"电脑端监听"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#电脑端监听"}},[t._v("#")]),t._v(" 电脑端监听")]),t._v(" "),e("ul",[e("li",[t._v("我们双击打开软件，进入到如下的一个界面，然后点击某一个请求，你会发现请求的内容是一堆明显不对的文字，然后该请求的左边是一个锁的样式，联想到https加密，你会发现原因可能是没有配置Fiddler。然后解释一下右边的默认返回内容，第一句是**“这是一个CONNECT隧道，加密的HTTPS流量通过该隧道流动。”**，就证实了我们的猜测，果然是因为https加密的原因。\n"),e("img",{attrs:{src:"https://img-blog.csdn.net/20180829091800974?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3ljaGd5eW4=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:"配置1"}})]),t._v(" "),e("li",[t._v("那么如何配置FIddler来解析这些加密的请求呢？方法一是查官网的安装文档，二是看提示，软件公司还是很人性化的在返回内容里面提示了需要在哪里设置，就是第二行那一句：\n"),e("strong",[t._v('"enable the Tools > Options > HTTPS > Decrypt HTTPS traffic option."')])]),t._v(" "),e("li",[t._v("我们按照提示来进行设置，先在左上角的工具栏里面找到"),e("strong",[t._v("Tools")]),t._v("，然后依次选择"),e("strong",[t._v("Options、HTTPS **，然后勾选**Decrypt HTTPS traffic")]),t._v("选项，勾选后安装证书。\n"),e("img",{attrs:{src:"https://img-blog.csdn.net/2018082909343775?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3ljaGd5eW4=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:"配置2"}})]),t._v(" "),e("li",[e("strong",[t._v("安装证书两种方法：")]),t._v(" "),e("ul",[e("li",[t._v("勾选后点击右边的Actions按钮选择**“Trust Root Certificate”**选项，然后全部选择是就行了。")]),t._v(" "),e("li",[t._v("勾选后点击右边的Actions按钮选择第二个选项将证书导出到桌面，然后再在对应的浏览器里面添加即可。")])])]),t._v(" "),e("li",[t._v("然后我们再打开一个新的网页(例如百度)，查看请求\n"),e("img",{attrs:{src:"https://img-blog.csdn.net/20180829100204240?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3ljaGd5eW4=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:"这里写图片描述"}})]),t._v(" "),e("li",[t._v("至此，已经可以监听PC端浏览器的请求了。")])]),t._v(" "),e("h3",{attrs:{id:"手机端监听"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#手机端监听"}},[t._v("#")]),t._v(" 手机端监听")]),t._v(" "),e("h4",{attrs:{id:"安卓手机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安卓手机"}},[t._v("#")]),t._v(" 安卓手机")]),t._v(" "),e("p",[t._v("但是如果你想要对手机上的app进行抓包怎么办呢，那么你还需要进行以下操作：")]),t._v(" "),e("ul",[e("li",[t._v("首先你的Fiddler所在的电脑和手机必须处在同一个局域网内(即连着同一个路由器)。")]),t._v(" "),e("li",[t._v("查看你的本机IP地址，在Fiddler的右上角有一个Online按钮，点击一下会显示你的IP信息")]),t._v(" "),e("li",[t._v("配置连接信息："),e("strong",[t._v("Tools > Options >Connections")]),t._v("\n- 端口默认是"),e("strong",[t._v("8888")]),t._v("，你可以进行修改。\n- 勾选"),e("strong",[t._v("Allow remote computers to connect")]),t._v("选项，然后重启Fiddler，再次打开时会弹出一个信息，选择ok即可。\n"),e("img",{attrs:{src:"https://img-blog.csdn.net/2018082910394225?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3ljaGd5eW4=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:"配置"}})]),t._v(" "),e("li",[t._v("打开你的手机，找到你所连接的WIFI，长按选择修改网络，输入密码后往下拖动，然后勾选"),e("strong",[t._v("显示高级选项")]),t._v("，然后在代理一栏选择手动，再将你先前查看的IP地址和端口号输入进去，然后保存。\n"),e("img",{attrs:{src:"https://img-blog.csdn.net/20180829104301162?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3ljaGd5eW4=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:"这里写图片描述"}})]),t._v(" "),e("li",[t._v("最后安装手机证书，在手机浏览器一栏输入电脑的IP地址和端口号\n这里我是"),e("strong",[t._v("192.168.1.157:8888")]),t._v("\n进入一个网页，点击最下面那个"),e("strong",[t._v("FiddlerRoot certificate")]),t._v("下载证书，下载成功后在设置里面安装，安装步骤："),e("strong",[t._v("打开高级设置->安全->从SD卡安装证书->找到证书文件->点击后为证书命名点击确定即可安装成功")]),t._v("\n(我的手机是华为的，具体过程请根据实际机型百度查找，关键词是"),e("strong",[t._v("从SD卡安装证书")]),t._v(")")]),t._v(" "),e("li",[t._v("测试一下，比如在手机上打开抖音app，找到评论的那一个请求。\n"),e("img",{attrs:{src:"https://img-blog.csdn.net/20180829105524521?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3ljaGd5eW4=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:"抖音"}})]),t._v(" "),e("li",[t._v("可以看到我们已经成功的找到了评论所对应的那个请求")])]),t._v(" "),e("p",[e("strong",[t._v("到这里就已经大功告成了")])]),t._v(" "),e("p",[t._v("参考地址："),e("a",{attrs:{href:"https://blog.csdn.net/ychgyyn/article/details/82154433",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/ychgyyn/article/details/82154433"),e("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);
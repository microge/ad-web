<template>
    <div class="footer wow fadeInUp">
        <div class="rowFluid">
            <div class="span12">
            <div class="container">
                <div class="footer_content">
                <div class="span4 col-xm-12">
                    <div class="footer_list">
                    <div class="span6">
                        <div class="bottom_logo"> <img :src="picData[0]" alt="微信服务号二维码" /></div>
                    </div>
                    <div class="span6 col-xm-12">
                        <div class="quick_navigation">
                        <div class="quick_navigation_title">快速导航</div>
                        <ul>
                            <li> <a href="/" title="首页">首页</a> </li>
                            <li> <a href="/" title="解决方案">解决方案</a> </li>
                            <li> <a href="/" title="关于我们">关于我们</a> </li>
                            <li> <a href="/" title="客户案例">客户案例</a> </li>
                            <li> <a href="/" title="建站方案">建站方案</a> </li>
                            <li> <a href="/" title="新闻资讯">新闻资讯</a> </li>
                            <li> <a href="/" title="技术支持">技术支持</a> </li>
                            <li> <a href="/" title="联系我们">联系我们</a> </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="span4 col-xm-6 col-xs-12">
                    <div class="footer_list">
                    <div class="footer_link">
                        <div class="footer_link_title">友情链接</div>
                        <ul id="frientLinks">
                            <li><a href='https://www.microge.cn/' target='_blank'>微歌科技</a> </li>
                            <li><a href='https://www.microge.cn/' target='_blank'>万旭纺织</a> </li>
                            <li><a href='https://www.microge.cn/' target='_blank'>万旭科技</a> </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div class="span4 col-xm-6 col-xs-12">
                    <div class="footer_list">
                    <div class="footer_cotact">
                        <div class="footer_cotact_title">联系方式</div>
                        <ul>
                        <li><span class="footer_cotact_type">地址：</span><span class="footer_cotact_content">xxxx</span></li>
                        <li><span class="footer_cotact_type">电话：</span><span class="footer_cotact_content"><a href="tel:xxxx" class="call">xxxx</a></span></li>
                        <li><span class="footer_cotact_type">网址：</span><span class="footer_cotact_content"><a href="#" title="官网">xxxxxxx</a></span></li>
                        <li><span class="footer_cotact_type">邮箱：</span><span class="footer_cotact_content">xxxxxx@163.com</span></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="copyright">Copyright &copy; 2019-2029  版权所有 青ICP备326231234565号 </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            picData: [
                require('../../assets/logo.png')
            ]
        }
    }
}
</script>
<style scoped>
.footer {
    background: url(../../assets/images/0371.jpg) center top repeat;
    text-align: left;
}
.footer_content {
	padding: 100px 0;
	overflow: hidden;
	margin-left: -70px;
}
.footer_list {
	margin-left: 70px;
}
.quick_navigation_title, .footer_link_title, .footer_cotact_title {
	color: #D9D9DA;
	font-size: 16px;
	margin-bottom: 15px;
}
.quick_navigation {
	padding-left: 50px;
}
.quick_navigation ul li a {
	display: block;
	margin-bottom: 10px;
	color: #8A8A8A;
	font-size: 13px;
}
.quick_navigation ul li a:hover {
	color: #fff;
}
.footer_link ul li {
	float: left;
}
.footer_link ul li a {
	display: block;
	margin: 0 1px 1px 0;
	background: #292929;
	color: #8A8A8A;
	font-size: 13px;
	padding: 5px 16px;
}
.footer_link ul li a:hover {
	color: #fff;
	background: #222;
}
.footer_cotact {
	color: #8A8A8A;
	font-size: 13px;
}
.footer_cotact .footer_cotact_type {
	width: 15%;
	display: block;
	float: left;
}
.footer_cotact .footer_cotact_content {
	width: 85%;
	display: block;
	float: left;
}
.footer_cotact ul li {
	margin-bottom: 10px;
	overflow: hidden;
}
.footer_cotact ul li a {
	color: #8A8A8A;
}
.footer .copyright {
	text-align: center;
	padding: 8px 10px;
	color: #8a8a8a;
	background: #000;
	font-size: 12px;
}
</style>
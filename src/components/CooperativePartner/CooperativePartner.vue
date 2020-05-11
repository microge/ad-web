
<template>
    <div>
        <div class="partners">
            <div class="rowFluid">
                <div class="span12">
                <div class="container">
                    <div class="all_title1 wow fadeInUp">
                        <h3 class="title">合作伙伴</h3>
                        <div class="text">COOPERATIVE PARTNER</div>
                    </div>
                    <div class="rowFluid">
                        <div class="partners_content"> 
                            <a href="#" class="partners_content_list wow fadeInUp" data-wow-delay="0.2s" target="_blank"> <img :src="picData[0]" alt="阿里云" /> </a> 
                            <a href="#" class="partners_content_list wow fadeInUp" data-wow-delay="0.4s" target="_blank"> <img :src="picData[1]" alt="驻云" /> </a> 
                            <a href="#" class="partners_content_list wow fadeInUp" data-wow-delay="0.6s" target="_blank"> <img :src="picData[2]" alt="麦田设计" /> </a> 
                            <a href="#" class="partners_content_list wow fadeInUp" data-wow-delay="0.8s" target="_blank"> <img :src="picData[3]" alt="博艺通展览" /> </a> 
                            <a href="#" class="partners_content_list wow fadeInUp" data-wow-delay="1s" target="_blank"> <img :src="picData[4]" alt="高斌钟表" /> </a> 
                            <a href="#this" class="partners_content_list wow fadeInUp" data-wow-delay="1.2s" target="_blank"> <img :src="picData[5]" alt="仙作电商" /> </a> 
                            <a href="#this" class="partners_content_list wow fadeInUp" data-wow-delay="1.4s" target="_blank"> <img :src="picData[6]" alt="纳威体育" /> </a> 
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div class="join_in">
            <div class="rowFluid">
                <div class="span12">
                <div class="container">
                    <div class="join_in_title wow fadeInUp">选择xxx网络，<span>让你的企业快速迈向互联网+时代</span></div>
                    <div class="join_in_text wow fadeInLeft">选择对的服务商能让您更快更好的迈进互联网+时代</div>
                    <a href="http://wpa.qq.com/msgrd?v=3&uin=3294345656&site=qq&menu=yes " class="all_button join_in_button wow fadeInUp" target="_blank">点击咨询</a> </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            picData: [
                require('../../assets/images/026.png'),
                require('../../assets/images/027.png'),
                require('../../assets/images/028_1.png'),
                require('../../assets/images/029.png'),
                require('../../assets/images/030.png'),
                require('../../assets/images/0311.png'),
                require('../../assets/images/0322.png'),
            ]
        }
    }
}
</script>
<style scoped>
.all_title1 {
	margin-bottom: 50px;
	text-align: center;
}
.all_title1 .title {
	font-size: 35px;
	color: #333;
}
.all_title1 .text {
	color: #818181;
}
.all_button {
	display: inline-block;
	background: #3B9FF2;
	border: solid 1px #3B9FF2;
	color: #fff;
	padding: 6px 30px;
	border-radius: 3px;
	overflow: hidden;
}
.all_button:hover {
	background: #fff;
	background: transparent;
	color: #3B9FF2;
}
.partners {
	padding: 100px 0;
}
.partners_content {
	text-align: center;
}
.partners_content_list {
	display: inline-block;
	margin: 20px 10px;
	transform: translate3d(0, 0, 0);
	-webkit-transform: translate3d(0, 0, 0);
	transition: 0.3s all;
	-webkit-transition: 0.3s all;
}
.partners_content_list:hover {
	box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
	transform: translate3d(0, -5px, 0);
	-webkit-transform: translate3d(0, -5px, 0);
}
.join_in {
	padding: 100px 0;
	background: url(../../assets/images/033.jpg) center top repeat;
	text-align: center;
}
.join_in_title {
	font-size: 36px;
	color: #fff;
}
.join_in_title span {
	color: #31b5ff;
}
.join_in_text {
	color: #e3e3e3;
	font-size: 18px;
	margin: 15px 0 50px 0;
}
.join_in_button {
	padding: 8px 60px;
}
</style>
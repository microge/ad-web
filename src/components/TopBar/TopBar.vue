import Product from '@/components/Product/Product.vue';
<template>
<div class="top-bar">
  <div class="top-slide">
    <el-carousel height="650px" :autoplay="true" :interval="5000" indicator-position="none">
      <el-carousel-item v-for="(item, index) of content" :key="index">
        <div v-bind:class="item.class">
          <div class="container">
            <div class="col-md-8">
              <h3>{{item.h3}}</h3>
              <h4>{{item.h4}}</h4>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="top-concat">
    <div class="container">
      <ul>
        <li>
          <a href="tel:86 13806879161">
            <div class="txt-icon iconfont icon-Call"></div>
            <div class="txt-fr">
              <p class="txt-title">Service line</p>
              <p>+86 13806879161</p>
            </div>
          </a>
        </li>
        <li>
          <a href="https://wzfa.en.alibaba.com/?spm=a2700.icbuShop.88.28.3f6d3831yNYFES" target="_blank">
            <div class="txt-icon iconfont icon-alibaba f24"></div>
            <div class="txt-fr">
              <p class="txt-title">Alibaba</p>
              <p>We are in Alibaba</p>
            </div>
          </a>
        </li>
        <li>
          <a href="https://wzfa.en.alibaba.com/productlist.html?spm=a2700.icbuShop.88.30.7d4f18819p3f5P" target="_blank">
            <div class="txt-icon iconfont icon-zhuangxiushangjia-"></div>
            <div class="txt-fr">
              <p class="txt-title">Product</p>
              <p>Faao's All Products</p>
            </div>
          </a>
        </li>
        <li>
          <a href="mailto:fuao@fuaocn.com">
            <div class="txt-icon iconfont icon-message f24"></div>
            <div class="txt-fr">
              <p class="txt-title">E-mail:</p>
              <p>fuao@fuaocn.com</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="top-bg">
    <div class="container">
      <div class="logo">
        <!-- <h1><img src="../../assets/images/01/logo.png" alt="FAAO"></h1> -->
        <h1>MICROGE</h1>
      </div>
      <!-- <div class="col-md-8">
        <h3>Your Perfect Breakfast</h3>
        <h1>The best dinning quality can be here too!</h1>
        <a href="/" class="section-btn btn btn-default smoothScroll">Discover menu</a>
        <el-button type="danger">危险按钮</el-button>
      </div> -->
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "TopBar",
  data() {
    return {
      content: [
        {
          class: "slide-bg slide-bg1",
          h3: "Your Perfect Breakfast",
          h4: "The best dinning quality can be here too!"
        },
        {
          class: "slide-bg slide-bg2",
          h3: "Your Perfect Breakfast1",
          h4: "The best dinning quality can be here too!1"
        },
        {
          class: "slide-bg slide-bg3",
          h3: "Your Perfect Breakfast2",
          h4: "The best dinning quality can be here too!2"
        },
      ]
    };
  },
  methods: {
    outLook() {
      this.isDisplay = !this.isDisplay;
      this.iconfont = !this.iconfont;
    }
  }
}
</script>
<style scoped>
.caption {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  background-color: rgba(20,20,20,0.2);
  height: 100%;
  color: #fff;
  cursor: e-resize;
}
.top-bar {
  height: 650px;
  position: relative;
}
.top-bg {
  z-index: 999999;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}
.top-slide {
  width: 100%;
  position: absolute;
  height: 650px;
}
.slide-bg {
  width: 100%;
  background-image: url(../../assets/images/03/slider-image1.jpg);
  background-position: 50% 70%;
  background-repeat: no-repeat;
  background-attachment: local;
  background-size: cover;
  height: 650px;
}
.slide-bg .container {
  padding-top: 150px;
}
.slide-bg .container h4 {
  width: 50%;
  font-size: 2.3em;
  color: #fff;
}
.slide-bg1 {
  background-image: url(../../assets/images/03/slider-image1.jpg);
}
.slide-bg2 {
  background-image: url(../../assets/images/03/slider-image2.jpg);
}
.slide-bg3 {
  background-image: url(../../assets/images/03/slider-image3.jpg);
}
.top-concat {
  z-index: 99999;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 100px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
}
.top-concat ul {
  display: flex;
  justify-content: center;
}
.top-concat li {
  /* float: left; */
  width: 25%;
  padding: 20px 0;
}
.top-concat .txt-title {
  font-size: 16px;
  font-weight: bold;
}
.txt-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #fff;
  float: left;
  color: #ce3232;
  font-size: 30px;
  line-height: 60px;
  text-align: center;
}
.f20 {
  font-size: 24px;
}
.txt-fr {
  margin-left: 20px;
  float: left;
}
.txt-fr p {
  line-height: 30px;
}
.txt-fr p:last-child {
  line-height: 24px;
}
.top-concat li:hover .txt-icon {
  background: #ce3232;
  color: #fff;
}
.btn {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
.btn-default {
  color: #333;
  background-color: #fff;
  border-color: #ccc;
}
.section-btn {
  background: #ce3232;
  border-radius: 0;
  border: 0;
  color: #f9f9f9;
  font-size: inherit;
  font-weight: normal;
  padding: 10px 25px;
  transition: 0.5s 0.2s;
}
.col-md-8 {
  width: 66.66666667%;
}
.container {
  position: relative;
  min-height: 218px;
}
.container h3 {
  color: #f9f9f9;
  font-size: 1em;
  line-height: inherit;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
}
.container h1 {
  color: #ffffff;
  font-size: 3em;
  line-height: 1.5em;
  font-weight: bold;
  background: #333;
}
.container h1 img {
  width: 150px;
  height: 64.25px;
  vertical-align: top;
}
.top-concat .container {
  min-height: 100px;
}
.top-concat a {
  color: #fff;
}
.logo {
  position: absolute;
  top: 20px;
  left: 0;
}
.logo h1 {
  font-size: 2em;
  color: #ff5d56;
  text-shadow: 1px 1px 0px #999;
}
@media screen and (max-width: 1024px) {
  .slide-bg .container {
    padding-top: 80px;
  }
  .logo {
    left: 10px;
  }
  .col-md-8 {
    width: 100%;
  }
  .top-concat ul {
    flex-wrap: wrap;
  }
  .top-concat li {
    width: 50%;
  }
  .top-concat li .txt-icon{
    margin-left: 20px;
  }
}
@media screen and (max-width: 768px) {
  .col-md-8 {
    width: 100%;
  }
}
@media screen and (max-width: 411px) {
  .col-md-8 {
    width: 100%;
  }
}
@media screen and (max-width: 375px) {
  .col-md-8 {
    width: 100%;
  }
}
</style>

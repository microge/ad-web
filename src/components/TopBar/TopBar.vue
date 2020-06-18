<template>
<div class="top-bg">
  <div class="caption">
    <div class="container">
      <div class="logo">
        <h1><img src="../../assets/images/01/logo.png" alt="FAAO"></h1>
      </div>
      <!-- <div class="col-md-8">
        <h3>Your Perfect Breakfast</h3>
        <h1>The best dinning quality can be here too!</h1>
        <a href="/" class="section-btn btn btn-default smoothScroll">Discover menu</a>
        <el-button type="danger">危险按钮</el-button>
      </div> -->
    </div>
  </div>
  <div class="top-concat">
    <div class="container">
      <ul>
        <li>
          <div class="txt-icon iconfont icon-Call"></div>
          <div class="txt-fr">
            <p class="txt-title">Service line</p>
            <p>+86 13806879161</p>
          </div>
        </li>
        <li>
          <div class="txt-icon iconfont icon-facebook f24"></div>
          <div class="txt-fr">
            <p class="txt-title">Feedback</p>
            <p>Leave us a message</p>
          </div>
        </li>
        <li>
          <div class="txt-icon iconfont icon-clouddownload"></div>
          <div class="txt-fr">
            <p class="txt-title">Download</p>
            <p>Download the product brochure</p>
          </div>
        </li>
        <li>
          <div class="txt-icon iconfont icon-message f24"></div>
          <div class="txt-fr">
            <p class="txt-title">E-mail:</p>
            <p>fuao@fuaocn.com</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div> 
</template>
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
.top-bg {
  width: 100%;
  background-image: url(../../assets/images/01/bg.jpg);
  background-position: 50% 70%;
  background-repeat: no-repeat;
  background-attachment: local;
  background-size: cover;
  height: 650px;
  position: relative;
}
.top-concat {
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
.logo {
  position: absolute;
  top: -200px;
  left: 0;
}
.logo h1 {
  font-size: 2em;
  color: #ff5d56;
  text-shadow: 1px 1px 0px #999;
}
@media screen and (max-width: 1024px) {
  .logo {
    left: 20px;
    top: -200px;
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
  .logo {
    top: -200px;
  }
  .col-md-8 {
    width: 100%;
  }
}
@media screen and (max-width: 411px) {
  .logo {
    top: -180px;
  }
  .col-md-8 {
    width: 100%;
  }
}
@media screen and (max-width: 375px) {
  .logo {
    top: -180px;
  }
  .col-md-8 {
    width: 100%;
  }
}
</style>

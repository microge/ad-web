<template>
<div class="top-bg">
  <div class="caption">
    <div class="container">
      <div class="logo">
        <h1>Microge</h1>
      </div>
      <div class="col-md-8">
        <h3>Your Perfect Breakfast</h3>
        <h1>The best dinning quality can be here too!</h1>
        <a href="/" class="section-btn btn btn-default smoothScroll">Discover menu</a>
        <!-- <el-button type="danger">危险按钮</el-button> -->
      </div>
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
  background-image: url(../../assets/images/03/slider-image1.jpg);
  background-position: inherit;
  background-repeat: no-repeat;
  background-attachment: local;
  background-size: cover;
  height: 650px;
}
.btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
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
}
.container h3 {
    color: #f9f9f9;
    font-size: 14px;
    line-height: inherit;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 0;
}
.container h1 {
  color: #ffffff;
  padding-bottom: 30px;
  font-size: 3em;
  line-height: 50px;
  font-weight: bold;
}
.logo {
  position: absolute;
  top: -200px;
  left: 0;
}
.logo h1 {
  font-size: 3em;
  font-family: 'Rototo Slab', serif;
  color: #ff5d56;
  text-shadow: 1px 1px 0px #999;
}
</style>

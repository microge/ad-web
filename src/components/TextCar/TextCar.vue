<template>
  <div class="items-wrap" data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
    <el-carousel height="300px" :autoplay="false">
        <el-carousel-item v-for="(item, index) of content" :key="index">
            <div class="container">
            <h3>{{ item.caption }}</h3>
            <p>{{ item.desc }}</p>
            </div>
        </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: "TextCar",
  data() {
    return {
      content: [
        {
          caption: "big data",
          desc:
            "This goal through the main line of document partners and other applications, to achieve the construction enterprise process standards controllable project remote management of multiple effective coordination needs.This goal through the main line of document partners and other applications, to achieve the construction enterprise process standards"
        },
        {
          caption: "cloud computing",
          desc:
            "This goal through the main line of document partners and other applications, to achieve the construction enterprise process standards controllable project remote management of multiple effective coordination needs.This goal through the main line of document partners and other applications"
        },
        {
          caption: "artificial intelligence (AI)",
          desc:
            "This goal through the main line of document partners and other applications, to achieve the construction enterprise process standards controllable project remote management of multiple effective coordination needs.This goal through the main line of document "
        }
      ]
    };
  }
};
</script>
<style scoped>
.items-wrap {
    padding: 50px 0;
    height: 300px;
  background: url(../../assets/images/03/testimonial-bg.jpg) center center no-repeat;
    background-size: cover;
    position: relative;
}
.overlay {
    background: rgba(0,0,0,0.5);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.items-wrap h3 {
    color: #fff;
    text-align: center;
    font-size: 2em;
    padding-bottom: 40px;
}
.items-wrap p {
    text-align: center;
    color: #9e9d9d;
    font-size: 20px;
    line-height: 35px;
}
</style>



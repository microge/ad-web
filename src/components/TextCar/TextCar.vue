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
          caption: "Can your factory print our brand on the product?",
          desc:
            "Our factory can laser print customer’s logo on the product with the permission from customers. Customers need to provide us a logo usage authorization letter to allow."
        },
        {
          caption: "Does your factory have the design and development capabilities, we need the customized products?",
          desc:
            "The staffs in our R&D department are well experienced in the faucet industry, with more than 5 to 10 years experience. Every year, we will launch 2 to 3 new series to keep out customers in a competitive stage.  "
        },
        {
          caption: "How is your production management and quality control system?",
          desc:
            "FARLO develops process - oriented QMS to identify and meet needs of customer requirement and expectation in an effective and efficient manner to achieve competitive advantage. All our product process follows up ISO9001: income quality checking, in process quality checking, final product quality checking. The strict implementation of ISO9001 assures to provide error – free products to our customers. We will show you these in our workshop during your visiting.mple."
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
  background: url(../../assets/images/01/bg1.jpg) center center
    no-repeat;
  background-size: cover;
  position: relative;
}
.overlay {
  background: rgba(0, 0, 0, 0.5);
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



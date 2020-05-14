<template>
  <div class="n3">
    <h1 class="n3-title">{{title}}</h1>
    <p class="n3-info">{{info}}</p>
    <div class="n3-content">
      <ul>
        <li v-for="(item,index) of content" :key="index">
          <div class="n3-bg" :style="{backgroundImage:'url('+item.imgUrl+')'}">
            <div class="n3-masking">
              <p class="n3-caption">{{item.caption}}</p>
              <p class="n3-desc">{{item.desc}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "n3",
  data() {
    return {
      currentEnter: null,
      currentLeave: null,
      title: "PRODUCT",
      info: "Product picture display, description",
      content: [
        {
          imgUrl: require("../../assets/images/03/team-image1.jpg"),
          caption: "big data",
          desc:
            "This goal through the main line of document partners and other applications, to achieve the construction enterprise process standards controllable project remote management of multiple effective coordination needs.This goal through the main line of document partners and other applications, to achieve the construction enterprise process standards"
        },
        {
          imgUrl: require("../../assets/images/03/team-image3.jpg"),
          caption: "cloud computing",
          desc:
            "This goal through the main line of document partners and other applications, to achieve the construction enterprise process standards controllable project remote management of multiple effective coordination needs.This goal through the main line of document partners and other applications"
        },
        {
          imgUrl: require("../../assets/images/03/team-image2.jpg"),
          caption: "artificial intelligence (AI)",
          desc:
            "This goal through the main line of document partners and other applications, to achieve the construction enterprise process standards controllable project remote management of multiple effective coordination needs.This goal through the main line of document "
        },
        {
          imgUrl: require("../../assets/images/03/team-image1.jpg"),
          caption: "data processing",
          desc:
            "This goal through the main line of document partners and other applications, to achieve the construction enterprise process standards controllable project remote management of multiple effective coordination needs.This goal through the main line of document partners and other "
        },
        {
          imgUrl: require("../../assets/images/03/team-image2.jpg"),
          caption: "data processing",
          desc:
            "This goal through the main line of document partners and other applications, to achieve the construction enterprise process standards controllable project remote management of multiple effective coordination needs.This goal through the main line of document partners and other applications, to achieve"
        },
        {
          imgUrl: require("../../assets/images/03/team-image3.jpg"),
          caption: "artificial intelligence (AI)",
          desc:
            "This goal through the main line of document partners and other applications, to achieve the construction enterprise process standards controllable project remote management of multiple effective coordination needs.This goal through the main line of."
        },
        {
          imgUrl: require("../../assets/images/03/team-image2.jpg"),
          caption: "cloud computing",
          desc:
            "This goal through the main line of document partners and other applications, to achieve the construction enterprise process standards controllable project remote management of multiple effective coordination needs.This goal through the main oordination needs."
        },
        {
          imgUrl: require("../../assets/images/03/team-image1.jpg"),
          caption: "big data",
          desc:
            "This goal through the main line of document partners and other applications, to achieve the construction enterprise process standards controllable project remote management of multiple effective coordination needs.This goal through the main line of document partners and other applications, to achieve the construction enterprise."
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.n3 {
  background: #f9f9f9;
  text-align: center;
  padding: 3em 0;
}
.n3-title {
  color: #353535;
  font-size: 2em;
  padding-bottom: 10px;
}
.n3-info {
  color: #bfbdbd;
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 0;
}
.n3-bg {
  position: relative;
  /* width: 286px; */
  width: 100%;
  height: 400px;
  display: block;
  margin: auto;
  background-size: cover;
  background-position: 0 0;
  overflow: hidden;
}
.n3-masking {
  position: absolute;
  /* width: 286px; */
  width: 100%;
  height: 400px;
  transform: translateY(350px);
  background-color: rgba(0, 0, 0, 0.7);
  transition: 0.3s ease-in;
}
.n3-bg :hover {
  transform: translateY(0px);
  transition: 0.3s ease-in;
}
.n3-content::after {
  content: "";
  clear: both;
  display: block;
}

.n3-content ul {
  overflow: hidden;
  margin: 20px auto;
  width: 1280px;
}
.n3-content ul li {
  float: left;
  width: 286px;
  margin: 0 6px 12px;
}
.n3-caption {
  position: relative;
  display: inline-block;
  font-size: 18px;
  color: #ffffff;
  line-height: 25px;
  margin-top: 15px;
  margin-bottom: 10px;
}
.n3-desc {
  position: relative;
  display: inline-block;
  font-size: 14px;
  color: #ffffff;
  line-height: 25px;
  margin: 10px 20px;
}
@media screen and (max-width: 1300px) {
  .n3-content ul {
    width: 1280px;
  }
  .n3-bg {
    height: 400px;
  }
  .n3-masking {
    height: 400px;
  }
  .n3-content ul li {
    width: 308px;
  }
}
@media screen and (max-width: 1199px) {
  .n3-content ul {
    width: 1000px;
  }
  .n3-content ul li {
    width: 238px;
  }
  .n3-bg {
    height: 308px;
  }
  .n3-masking {
    height: 308px;
    transform: translateY(250px);
  }
}
@media screen and (max-width: 960px) {
  .n3-content ul {
    width: 800px;
  }
  .n3-content ul li {
    width: 376px;
  }
  .n3-bg {
    height: 488px;
  }
  .n3-masking {
    height: 488px;
    transform: translateY(430px);
  }
}
@media screen and (max-width: 768px) {
  .n3-content ul {
    width: 700px;
  }
  .n3-content ul li {
    width: 326px;
    margin: 0 12px 12px
  }
  .n3-bg {
    height: 422px;
  }
  .n3-masking {
    height: 422px;
    transform: translateY(365px);
  }
}
@media screen and (max-width: 478px) {
  .n3-content ul {
    width: 375px;
  }
  .n3-content ul li {
    width: 325px;
    margin: 0 25px 12px;
  }
  .n3-bg {
    height: 422px;
  }
  .n3-masking {
    height: 422px;
    transform: translateY(365px);
  }
}
@media screen and (max-width: 375px) {
  .n3-content ul {
    width: 375px;
  }
  .n3-content ul li {
    width: 325px;
    margin: 0 25px 12px;
  }
  .n3-bg {
    height: 422px;
  }
  .n3-masking {
    height: 422px;
    transform: translateY(365px);
  }
}
</style>



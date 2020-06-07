<template>
  <div class="n6">
    <h1 class="n3-title">{{title}}</h1>
    <p class="n3-info">{{info}}</p>
    <div class="n6-content">
      <ul>
        <li v-for="(item,index) of content" :key="index">
          <div
            class="n6-card"
            :class="{current:currentIndex===index}"
            @mouseenter="showCard(index)"
          >
            <div v-show="currentIndex!==index">
              <div class="n6-bgimg" :style="{backgroundImage:'url('+item.imgUrl+')'}">
                <h4 class="n6-caption">{{item.title}}</h4>
                <div class="n6-mask"></div>
                <h4 class="n6-caption">{{item.title}}</h4>
              </div>
              <div>
                <p>{{item.caption}}</p>
              </div>
            </div>
            <div v-show="currentIndex===index">
              <div class="current-bg" :style="{backgroundImage:'url('+item.imgUrl+')'}">
                <div class="n6-current-mask"></div>
                <h4 class="n6-current-caption">{{item.title}}</h4>
                <p class="current-desc">{{item.desc}}</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "n1",
  data() {
    return {
      currentIndex: 0,
      title: "Factory",
      info: "Factory environment warehouse personnel",
      content: [
        {
          title: "Building interior",
          imgUrl: require("../../assets/images/01/ng01.jpg"),
          desc:
            "Total number of personnel: 319 Management personnel: 10 Quality control personnel: 26 sales personnel: 4 production personnel: 245 Purchasing personnel: 7 design personnel: 11 Others: 16"
        },
        {
          title: "Factory information",
          imgUrl: require("../../assets/images/01/ng02.jpg"),
          desc:
            "Factory Address: No. 8, Dazhong Road, Haicheng Industrial Park, Longwan District, Wenzhou city, Zhejiang Province.Type of plant: Lease plant area: 12,000 square meters Validity: 2014-04-29-2051-02-05"
        },
        {
          title: "Building interior",
          imgUrl: require("../../assets/images/01/ng03.jpg"),
          desc:
            "Total number of personnel: 319 Management personnel: 10 Quality control personnel: 26 sales personnel: 4 production personnel: 245 Purchasing personnel: 7 design personnel: 11 Others: 16"
        },
        {
          title: "Building interior",
          imgUrl: require("../../assets/images/01/ng04.jpg"),
          desc:
            "Total number of personnel: 319 Management personnel: 10 Quality control personnel: 26 sales personnel: 4 production personnel: 245 Purchasing personnel: 7 design personnel: 11 Others: 16"
        },
        {
          title: "R&D capability",
          imgUrl: require("../../assets/images/01/ng05.jpg"),
          desc:
            "OEM mode: OEM design outsourcing: No annual average number of new models: 100 Average working years of designers: 3 1-5 years Number of development engineers: 11"
        }
      ]
    };
  },
  methods: {
    showCard(index) {
      this.currentIndex = index;
    }
  }
};
</script>

<style scoped>
.n6 {
  text-align: center;
  background-size: cover;
  position: relative;
  background: #f9f9f9;
  height: 580px;
  padding: 3em 0;
  color: #fff;
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
.n6-content ul {
  display: flex;
  justify-content: center;
  padding: 0;
  margin-top: 60px;
  margin-bottom: 0;
}
.n6-content::after {
  content: "";
  clear: both;
  display: block;
}
.n6-card {
  position: relative;
  width: 236px;
  height: 390px;
  text-align: center;
  transition: opacity, height, margin 0.3s linear;
  overflow: hidden;
}
.n6-caption {
  position: absolute;
  color: #fff;
  z-index: 99;
  left: 0;
  right: 0;
  margin: auto;
  top: 40%;
}
.n6-current-caption {
  position: absolute;
  color: #fff;
  z-index: 99;
  left: 0;
  right: 0;
  margin: auto;
  top: 20%;
}
.n6-current-caption h4 {
  font-size: 16px;
}
.current {
  position: relative;
  width: 280px;
  height: 380px;
  padding: 30px;
  margin-top: -25px;
  background-repeat: repeat;
  overflow: hidden;
}
.current-bg {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0.9;
  background: center;
  background-size: 100% 100%;
}
.n6-bgimg {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0.77;
  background: center;
  background-size: 100% 100%;
}
.n6-caption::after {
  content: " ";
  display: block;
  width: 30px;
  height: 4px;
  background: #ce3232;
  margin: 16px auto 0 auto;
}
.n6-current-caption::after {
  content: " ";
  display: block;
  width: 30px;
  height: 4px;
  background: #ce3232;
  margin: 16px auto 0 auto;
}
.n6-caption-l::after {
  content: " ";
  display: block;
  width: 30px;
  height: 2px;
  background: #ce3232;
  margin: 16px auto 0 auto;
}
.n6-icon-l {
  width: 30px;
}
.n6-mask {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0.3;
  background-image: linear-gradient(-180deg, #080A09 0, #080A09 100%);
}
.current-desc {
  position: absolute;
  margin: 0;
  padding: 200px 30px;
  font-size: 14px;
  line-height: 24px;
}
.n6-current-mask {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0.82;
  background-image: linear-gradient(-180deg, #080A09 0, #080A09 100%);
}
</style>
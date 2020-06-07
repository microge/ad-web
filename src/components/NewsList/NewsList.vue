<template>
  <div id="news-list">
    <h1 class="news-title">{{title}}</h1>
    <p class="news-info">{{info}}</p>
    <div class="container">
      <div class="news-wrap" id="news1">
          <div class="news-right">
            <div class="col-news-top">
              <a href="#news1" class="date-in">
                <img class="img-responsive mix-in" src="../../assets/images/01/pc03.jpg" alt />
                <div class="month-in">
                  <label>
                    <span class="day">10</span>
                    <span class="month">January</span>
                  </label>
                </div>
              </a>
            </div>
          </div>
          <div class="news-left">
            <div class="col-bottom">
              <h6>Come from Germany</h6>
              <p>In a factory packed with kit from Germany and China, slabs of rubber and bags of carbon black are turned into tyres.In a factory packed with kit from Germany and China, slabs of rubber and bags of carbon black are turned into tyres.In a factory packed with kit from Germany and China, slabs of rubber and bags of carbon black are turned into tyres.In a factory packed with kit from Germany and China, slabs of rubber and bags of carbon black are turned into tyres.</p>
              <!-- <a href="#" class="more">MORE</a> -->
            </div>
          </div>
      </div>
      <div class="news-wrap" id="news2">
          <div class="news-right">
            <div class="col-news-top">
              <a href="#news2" class="date-in">
                <img class="img-responsive mix-in" src="../../assets/images/01/pc01.jpg" alt />
                <div class="month-in">
                  <label>
                    <span class="day">15</span>
                    <span class="month">Feb</span>
                  </label>
                </div>
              </a>
            </div>
          </div>
          <div class="news-left">
            <div class="col-bottom">
              <h6>Come from Russia</h6>
              <p>We have a large number of users from Russia, favored by women. We have a large number of users from Russia, favored by women. We have a large number of users from Russia, favored by women. We have a large number of users from Russia, favored by women. users from Russia, favored by women. We have a large number of users from Russia, favored by women. We have a large number of users from Russia, favored by women.</p>
              <!-- <a href="#" class="more">MORE</a> -->
            </div>
          </div>
      </div>
      <div class="news-wrap" id="news3">
          <div class="news-right">
            <div class="col-news-top">
              <a href="#news3" class="date-in">
                <img class="img-responsive mix-in" src="../../assets/images/01/pc02.jpg" alt />
                <div class="month-in">
                  <label>
                    <span class="day">08</span>
                    <span class="month">March</span>
                  </label>
                </div>
              </a>
            </div>
          </div>
          <div class="news-left">
            <div class="col-bottom">
              <h6>Come from Australia</h6>
              <p>I want to pay tribute to the excellent leadership of chairs and co-chairs from three Member States, Australia, Mexico, and Norway. I want to pay tribute to the excellent leadership of chairs and co-chairs from three Member States, Australia, Mexico, and Norway. I want to pay tribute to the excellent leadership of chairs and co-chairs from three Member States, Australia, Mexico, and Norway.</p>
              <!-- <a href="#" class="more">MORE</a> -->
            </div>
          </div>
      </div>
      <div class="news-wrap" v-bind:class="{ dsn: isDisplay}" id="news4">
          <div class="news-right">
            <div class="col-news-top">
              <a href="#news3" class="date-in">
                <img class="img-responsive mix-in" src="../../assets/images/01/pc04.jpg" alt />
                <div class="month-in">
                  <label>
                    <span class="day">08</span>
                    <span class="month">March</span>
                  </label>
                </div>
              </a>
            </div>
          </div>
          <div class="news-left">
            <div class="col-bottom">
              <h6>Come from Australia</h6>
              <p>I want to pay tribute to the excellent leadership of chairs and co-chairs from three Member States, Australia, Mexico, and Norway. I want to pay tribute to the excellent leadership of chairs and co-chairs from three Member States, Australia, Mexico, and Norway. I want to pay tribute to the excellent leadership of chairs and co-chairs from three Member States, Australia, Mexico, and Norway.</p>
              <!-- <a href="#" class="more">MORE</a> -->
            </div>
          </div>
      </div>
      <div class="news-wrap" v-bind:class="{ dsn: isDisplay}" id="news5">
          <div class="news-right">
            <div class="col-news-top">
              <a href="#news3" class="date-in">
                <img class="img-responsive mix-in" src="../../assets/images/01/pc05.jpg" alt />
                <div class="month-in">
                  <label>
                    <span class="day">08</span>
                    <span class="month">March</span>
                  </label>
                </div>
              </a>
            </div>
          </div>
          <div class="news-left">
            <div class="col-bottom">
              <h6>Come from Australia</h6>
              <p>I want to pay tribute to the excellent leadership of chairs and co-chairs from three Member States, Australia, Mexico, and Norway. I want to pay tribute to the excellent leadership of chairs and co-chairs from three Member States, Australia, Mexico, and Norway. I want to pay tribute to the excellent leadership of chairs and co-chairs from three Member States, Australia, Mexico, and Norway.</p>
              <!-- <a href="#" class="more">MORE</a> -->
            </div>
          </div>
      </div>
      <div class="news-wrap" v-bind:class="{ dsn: isDisplay}" id="news6">
          <div class="news-right">
            <div class="col-news-top">
              <a href="#news3" class="date-in">
                <img class="img-responsive mix-in" src="../../assets/images/01/pc06.jpg" alt />
                <div class="month-in">
                  <label>
                    <span class="day">08</span>
                    <span class="month">March</span>
                  </label>
                </div>
              </a>
            </div>
          </div>
          <div class="news-left">
            <div class="col-bottom">
              <h6>Come from Australia</h6>
              <p>I want to pay tribute to the excellent leadership of chairs and co-chairs from three Member States, Australia, Mexico, and Norway. I want to pay tribute to the excellent leadership of chairs and co-chairs from three Member States, Australia, Mexico, and Norway. I want to pay tribute to the excellent leadership of chairs and co-chairs from three Member States, Australia, Mexico, and Norway.</p>
              <!-- <a href="#" class="more">MORE</a> -->
            </div>
          </div>
      </div>
      <div class="news-wrap" v-bind:class="{ dsn: isDisplay}" id="news7">
          <div class="news-right">
            <div class="col-news-top">
              <a href="#news3" class="date-in">
                <img class="img-responsive mix-in" src="../../assets/images/01/pc07.jpg" alt />
                <div class="month-in">
                  <label>
                    <span class="day">08</span>
                    <span class="month">March</span>
                  </label>
                </div>
              </a>
            </div>
          </div>
          <div class="news-left">
            <div class="col-bottom">
              <h6>Come from Australia</h6>
              <p>I want to pay tribute to the excellent leadership of chairs and co-chairs from three Member States, Australia, Mexico, and Norway. I want to pay tribute to the excellent leadership of chairs and co-chairs from three Member States, Australia, Mexico, and Norway. I want to pay tribute to the excellent leadership of chairs and co-chairs from three Member States, Australia, Mexico, and Norway.</p>
              <!-- <a href="#" class="more">MORE</a> -->
            </div>
          </div>
      </div>
      <div class="news-wrap" v-bind:class="{ dsn: isDisplay}" id="news8">
          <div class="news-right">
            <div class="col-news-top">
              <a href="#news3" class="date-in">
                <img class="img-responsive mix-in" src="../../assets/images/01/pc08.jpg" alt />
                <div class="month-in">
                  <label>
                    <span class="day">08</span>
                    <span class="month">March</span>
                  </label>
                </div>
              </a>
            </div>
          </div>
          <div class="news-left">
            <div class="col-bottom">
              <h6>Come from Australia</h6>
              <p>I want to pay tribute to the excellent leadership of chairs and co-chairs from three Member States, Australia, Mexico, and Norway. I want to pay tribute to the excellent leadership of chairs and co-chairs from three Member States, Australia, Mexico, and Norway. I want to pay tribute to the excellent leadership of chairs and co-chairs from three Member States, Australia, Mexico, and Norway.</p>
              <!-- <a href="#" class="more">MORE</a> -->
            </div>
          </div>
      </div>
      <div class="news-wrap" v-bind:class="{ dsn: isDisplay}" id="news9">
          <div class="news-right">
            <div class="col-news-top">
              <a href="#news3" class="date-in">
                <img class="img-responsive mix-in" src="../../assets/images/01/pc09.jpg" alt />
                <div class="month-in">
                  <label>
                    <span class="day">08</span>
                    <span class="month">March</span>
                  </label>
                </div>
              </a>
            </div>
          </div>
          <div class="news-left">
            <div class="col-bottom">
              <h6>Come from Australia</h6>
              <p>I want to pay tribute to the excellent leadership of chairs and co-chairs from three Member States, Australia, Mexico, and Norway. I want to pay tribute to the excellent leadership of chairs and co-chairs from three Member States, Australia, Mexico, and Norway. I want to pay tribute to the excellent leadership of chairs and co-chairs from three Member States, Australia, Mexico, and Norway.</p>
              <!-- <a href="#" class="more">MORE</a> -->
            </div>
          </div>
      </div>
      <div class="arr-down iconfont icon-Arrowdown" v-bind:class="{ 'icon-Arrowup': iconfont}" v-on:click="btnHander"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NewsList",
  data() {
    return {
      title: "OUR costomer",
      info: "welcome to our store",
      isDisplay: true,
      iconfont: false
    };
  },
  methods: {
    btnHander() {
      this.isDisplay = !this.isDisplay;
      this.iconfont = !this.iconfont;
    }
  }
};
</script>
<style scoped>
#news-list {
  padding: 3em 0;
  background: #fff;
}
.news-title {
  color: #353535;
  font-size: 2em;
  padding-bottom: 10px;
  text-align: center;
}
.news-info {
  color: #bfbdbd;
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0 0 2em;
  text-align: center;
}
.news-wrap {
  overflow: hidden;
}
.news-left {
  float: left;
  width: 48%;
  padding-right: 2%;
}
.news-right {
  float: right;
  width: 48%;
  padding-left: 2%;
}
.col-bottom {
  padding: 0 0 0 0;
}
.col-bottom h6 {
  margin: 0;
  font-size: 1.5em;
  color: #000;
}
.col-bottom p {
  margin: 1em 0 0.5em;
  font-size: 1em;
  line-height: 1.5em;
  color: #999;
}
a.more {
  text-decoration: none;
  font-size: 1.3em;
  color: #6cb6b6;
  font-weight: 600;
}
a.more:hover {
  color: #000;
}
.col-news-top .date-in {
    overflow: hidden;
    position: relative;
    display: block;
}
.img-responsive {
    display: block;
    width: 100%;
    height: auto;
}
.col-news-top .date-in .month-in {
    position: absolute;
    height: 100%;
    width: 50%;
    top: 0;
    left: 0;
    background: url(../../assets/images/03/background2.png) repeat;
    text-align: center;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
}
.col-news-top .date-in:hover .month-in {
    width: 100%;
}
.col-news-top .date-in .month-in label {
    display: inline-block;
    font-weight: 800;
    text-transform: uppercase;
    color: #ffffff;
    top: 50%;
    margin-top: -61px;
    position: absolute;
    left: 0;
    right: 0;
}
.col-news-top .date-in .month-in label span {
    display: block;
}
.col-news-top .date-in .month-in label .day {
    font-size: 6em;
    line-height: 90px;
    margin-bottom: 4px;
}
.col-news-top .date-in .month-in label .month {
    font-size: 14px;
    line-height: 14px;
}
@media screen and (max-width: 768px) {
  .news-left {
    float: none;
    width: 100%;
    padding-right: 0;
  }
  .news-right {
    float: none;
    width: 100%;
    padding-left: 0;
  }
  .col-bottom {
    padding: 0 0 2em 0;
  }
}
.arr-down {
  border: 1px solid #efebeb;
  height: 30px;
  font-size: 20px;
  color: #aaa;
  text-align: center;
  margin-top: 20px;
  border-radius: 2px;
}
.arr-down:hover {
  cursor: pointer;
  border-color: #ddd;
}
.dsn {
  display: none;
}
</style>
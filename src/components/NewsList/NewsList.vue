<template>
  <div id="news-list">
    <h1 class="news-title">{{title}}</h1>
    <p class="news-info">{{info}}</p>
    <div class="container">
      <el-row>
        <el-col :span="12">
          <div class="news-left">
            <div class="col-bottom">
              <h6>Claritas est etiam</h6>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem</p>
              <a href="#" class="more">MORE</a>
            </div>
            <div class="col-bottom">
              <h6>Claritas est etiam</h6>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem</p>
              <a href="#" class="more">MORE</a>
            </div>
            <div class="col-bottom">
              <h6>Claritas est etiam</h6>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem</p>
              <a href="#" class="more">MORE</a>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="news-right">
            <div class="col-news-top">
              <a href="#" class="date-in">
                <img class="img-responsive mix-in" src="../../assets/images/03/pc.jpg" alt />
                <div class="month-in">
                  <label>
                    <span class="day">10</span>
                    <span class="month">January</span>
                  </label>
                </div>
              </a>
              <div class="clearfix"></div>
            </div>
            <div class="col-news-top">
              <a href="#" class="date-in">
                <img class="img-responsive mix-in" src="../../assets/images/03/pc1.jpg" alt />
                <div class="month-in">
                  <label>
                    <span class="day">15</span>
                    <span class="month">Feb</span>
                  </label>
                </div>
              </a>
              <div class="clearfix"></div>
            </div>
            <div class="col-news-top">
              <a href="#" class="date-in">
                <img class="img-responsive mix-in" src="../../assets/images/03/pc2.jpg" alt />
                <div class="month-in">
                  <label>
                    <span class="day">08</span>
                    <span class="month">March</span>
                  </label>
                </div>
              </a>
              <div class="clearfix"></div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "NewsList",
  data() {
    return {
      title: "News",
      info: "Since 1999"
    };
  }
};
</script>
<style scoped>
#news-list {
  padding: 100px 0;
  background: #f9f9f9;
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
  margin: 0 0 60px;
  text-align: center;
}
.news-left {
  padding-right: 20px;
}
.news-right {
  padding-left: 20px;
}
.col-bottom {
  padding: 0 0 2em 0;
}
.col-bottom h6 {
  margin: 0;
  font-size: 1.5em;
  color: #000;
}
.col-bottom p {
  margin: 1.2em 0 0.5em;
  font-size: 1em;
  line-height: 1.9em;
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
    max-width: 100%;
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
</style>
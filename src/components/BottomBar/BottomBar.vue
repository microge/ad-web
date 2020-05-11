<template>
  <footer
    id="footer"
    data-stellar-background-ratio="0.5"
    style="background-position: 0% -224.875px;"
  >
    <div class="container">
      <el-row :gutter="40">
        <el-col :span="6">
          <div class="footer-info">
            <div class="section-title">
              <h2
                class="wow fadeInUp animated"
                data-wow-delay="0.2s"
                style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;"
              >Find us</h2>
            </div>
            <address
              class="wow fadeInUp animated"
              data-wow-delay="0.4s"
              style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;"
            >
              <p>
                123 nulla a cursus rhoncus,
                <br />augue sem viverra 10870
                <br />id ultricies sapien
              </p>
            </address>
          </div>
        </el-col>

        <el-col :span="6">
          <div class="footer-info">
            <div class="section-title">
              <h2
                class="wow fadeInUp animated"
                data-wow-delay="0.2s"
                style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;"
              >Reservation</h2>
            </div>
            <address
              class="wow fadeInUp animated"
              data-wow-delay="0.4s"
              style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;"
            >
              <p>090-080-0650 | 090-070-0430</p>
              <p>
                <a href="mailto:info@company.com">info@company.com</a>
              </p>
              <p>LINE: eatery247</p>
            </address>
          </div>
        </el-col>

        <el-col :span="8">
          <div class="footer-info footer-open-hour">
            <div class="section-title">
              <h2
                class="wow fadeInUp animated"
                data-wow-delay="0.2s"
                style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;"
              >Service hotline</h2>
            </div>
            <div
              class="wow fadeInUp animated"
              data-wow-delay="0.4s"
              style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;"
            >
              <p>Monday: Rest</p>
              <div>
                <strong>Tuesday to Friday</strong>
                <p>7:00 AM - 9:00 PM</p>
              </div>
              <div>
                <strong>Saturday - Sunday</strong>
                <p>11:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>
        </el-col>

        <el-col :span="4">
          <ul
            class="wow fadeInUp social-icon animated"
            data-wow-delay="0.4s"
            style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;"
          >
            <li>
              <a href="#" class="iconfont icon-facebook"></a>
            </li>
            <li>
              <a href="#" class="iconfont icon-tuite"></a>
            </li>
            <li>
              <a href="#" class="iconfont icon-linkedin"></a>
            </li>
            <li>
              <a href="#" class="iconfont icon-google"></a>
            </li>
          </ul>

          <div
            class="wow fadeInUp copyright-text animated"
            data-wow-delay="0.8s"
            style="visibility: visible; animation-delay: 0.8s; animation-name: fadeInUp;"
          >
            <p>
              <br />Copyright © 2019 Your Company Name
              <br />
              <br />Design: Microge
            </p>
          </div>
        </el-col>
      </el-row>
    </div>
  </footer>
</template>
<style scoped>
footer {
    border-top: 1px solid rgba(0,0,0,0.05);
    padding: 20px 0;
}
.container {
    padding: 60px 0
}
.social-icon {
    position: relative;
    padding: 0;
    margin: 0;
}
.footer-info, footer .social-icon {
    margin-top: 20px;
}
footer .section-title {
    padding-bottom: 10px;
}
address {
    margin-bottom: 20px;
    font-style: normal;
    line-height: 1.62857143;
}
footer a, footer p {
    color: #909090;
}
.footer-open-hour {
    background: #ce3232;
    background: url(../../assets/images/03/footer-open-hour-bg.jpg) center center no-repeat;
    background-size: cover;
    border-radius: 20px;
    margin-top: 0;
    padding: 40px 0 40px 80px;
    overflow: hidden;
    position: relative;
    z-index: 22;
    right: 20px;
    bottom: 20px;
}
.footer-open-hour::after {
    background: rgba(29,29,29,0.85);
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2222;
}
.section-title h2 {
    margin: 0;
}
.footer-open-hour h2 {
    color: #ffffff;
}
.footer-open-hour p {
    color: #d9d9d9;
    margin-bottom: 10px;
}
.footer-open-hour strong {
    color: #f9f9f9;
}
.social-icon li {
    display: inline-block;
    list-style: none;
    margin-right: 5px;
}
.social-icon li a {
    border-radius: 100px;
    color: #ce3232;
    font-size: 15px;
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-decoration: none;
    text-align: center;
    transition: all 0.4s ease-in-out;
    position: relative;
    display: inline-block;
}
.social-icon li a:hover {
    background: #ce3232;
    color: #ffffff;
}
</style>
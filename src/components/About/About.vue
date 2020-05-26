<template>
<div id="about" data-stellar-background-ratio="0.5" style="background-position: 0% -370px;">
  <div class="container">
    <div class="clearfix">
      <div class="col-md-6">
        <div class="about-info">
          <div class="section-title wow fadeInUp animated" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
            <h4>Read our story</h4>
            <h2>25 years experience in faucet and bathroom accessory. Over 500,000 deliverables per month. Products are exporting to more than 60 countrys.</h2>
          </div>
          <div class="wow fadeInUp animated" data-wow-delay="0.4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">
            <p>Elegantly simple, FAAO Bathroom Accessories' graceful curves and contours flow as beautifully as the faucet's water stream, creating a transitional style that spans a variety of decorating trends. </p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="wow fadeInUp about-image animated" data-wow-delay="0.6s" style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp;">
          <img src="../../assets/images/01/about.jpg" class="img-responsive" alt="">
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
#about {
  position: relative;
  padding: 3em 0;
}
.about-info {
    padding: 0 6em 5em 0;
}
.about-info .section-title {
    padding-bottom: 20px;
}
.col-md-6 {
  float: left;
  width: 50%;
}
.section-title h4 {
    color: #bfbdbd;
    font-size: 10px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-top: 0;
    font-weight: 600;
}
.section-title h2 {
    color: #353535;
    font-size: 2em;
    padding-bottom: 10px;
}
p {
    color: #757575;
    font-size: 14px;
    font-weight: normal;
    line-height: 24px;
}
.about-image img {
    width: 100%;
    display: block;
    max-width: 100%;
    height: auto;
}
@media screen and (max-width: 768px) {
  .col-md-6 {
    width: 100%;
  }
  .about-info {
    padding: 0 0 2em 0;
  }
}
@media screen and (max-width: 478px) {
  .col-md-6 {
    width: 100%;
  }
  .about-info {
    padding: 0 0 2em 0;
  }
}
@media screen and (max-width: 375px) {
  .col-md-6 {
    width: 100%;
  }
  .about-info {
    padding: 0 0 2em 0;
  }
}
</style>

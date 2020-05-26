<template>
  <div id="menu" data-stellar-background-ratio="0.5" style="background-position: 0% -1093.5px;">
    <div class="row">
      <div class="col-md-12 col-sm-12">
        <div
          class="section-title wow fadeInUp animated"
          data-wow-delay="0.1s"
          style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;"
        >
          <h2>Product Categories</h2>
          <h4>Categories &amp; Count</h4>
        </div>
      </div>

      <div class="col-md-4">
        <!-- MENU THUMB -->
        <div class="menu-thumb">
          <img src="../../assets/images/01/product-list01.jpg" class="img-responsive" alt />

          <div class="menu-info">
            <div class="menu-item">
              <h3>Kitchen And Bath Faucet</h3>
              <p>Basin Faucet / Bidet Faucet / Kitchen Faucet / Bathtub faucet / Shower faucet</p>
            </div>
            <div class="menu-price">
              <span>1300</span>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <!-- MENU THUMB -->
        <div class="menu-thumb">
          <img src="../../assets/images/01/product-list02.jpg" class="img-responsive" alt />

          <div class="menu-info">
            <div class="menu-item">
              <h3>Kitchen And Bath Faucet</h3>
              <p>Basin Faucet / Bidet Faucet / Kitchen Faucet / Bathtub faucet / Shower faucet</p>
            </div>
            <div class="menu-price">
              <span>1300</span>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <!-- MENU THUMB -->
        <div class="menu-thumb">
          <img src="../../assets/images/01/product-list03.jpg" class="img-responsive" alt />

          <div class="menu-info">
            <div class="menu-item">
              <h3>Kitchen And Bath Faucet</h3>
              <p>Basin Faucet / Bidet Faucet / Kitchen Faucet / Bathtub faucet / Shower faucet</p>
            </div>
            <div class="menu-price">
              <span>1300</span>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <!-- MENU THUMB -->
        <div class="menu-thumb">
          <img src="../../assets/images/01/product-list04.jpg" class="img-responsive" alt />

          <div class="menu-info">
            <div class="menu-item">
              <h3>Kitchen And Bath Faucet</h3>
              <p>Basin Faucet / Bidet Faucet / Kitchen Faucet / Bathtub faucet / Shower faucet</p>
            </div>
            <div class="menu-price">
              <span>1300</span>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <!-- MENU THUMB -->
        <div class="menu-thumb">
          <img src="../../assets/images/01/product-list05.jpg" class="img-responsive" alt />

          <div class="menu-info">
            <div class="menu-item">
              <h3>Kitchen And Bath Faucet</h3>
              <p>Basin Faucet / Bidet Faucet / Kitchen Faucet / Bathtub faucet / Shower faucet</p>
            </div>
            <div class="menu-price">
              <span>1300</span>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <!-- MENU THUMB -->
        <div class="menu-thumb">
          <img src="../../assets/images/01/product-list06.jpg" class="img-responsive" alt />

          <div class="menu-info">
            <div class="menu-item">
              <h3>Kitchen And Bath Faucet</h3>
              <p>Basin Faucet / Bidet Faucet / Kitchen Faucet / Bathtub faucet / Shower faucet</p>
            </div>
            <div class="menu-price">
              <span>1300</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#menu {
  padding: 3em 0 0;
}
.row {
     overflow: hidden;
}
.section-title {
  text-align: center;
}
.section-title h2 {
  color: #353535;
  font-size: 2em;
  padding-bottom: 10px;
}
.section-title h4 {
  color: #bfbdbd;
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 2em;
}
.col-md-4 {
  float: left;
  width: 33.333333333%;
}
#menu .menu-thumb {
  overflow: hidden;
  position: relative;
  cursor: pointer;
  width: 102%;
}
.menu-thumb img {
  width: 100%;
  transition: 0.5s;
  display: block;
  max-width: 100%;
  height: auto;
}
.menu-thumb:hover img {
  transform: scale(1.15);
}
.menu-thumb .menu-info {
  position: absolute;
  top: 60%;
  left: 0px;
  right: 0px;
  bottom: 0px;
  text-align: left;
  padding: 1.5em 1.5em;
  transition: 0.5s 0.2s;
}
.menu-thumb:hover .menu-info {
  background: rgba(0, 0, 0, 0.8);
}
.menu-info .menu-item {
  float: left;
  width: 70%;
}
.menu-thumb .menu-info h3,
.menu-thumb .menu-info p,
.menu-thumb .menu-info span {
  transform: translateY(100%);
  opacity: 0;
  display: block;
  transition: 0.5s 0.2s;
  color: #ffffff;
  z-index: 2;
  position: relative;
}
.menu-thumb .menu-info h3 {
  margin-top: 0;
}
.menu-thumb .menu-info p {
  color: #d9d9d9;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 1px;
}
.menu-thumb:hover .menu-info h3,
.menu-thumb:hover .menu-info p,
.menu-thumb:hover .menu-info span {
  transform: translateY(0px);
  opacity: 1;
}
@media screen and (max-width: 768px) {
  .col-md-4 {
    width: 50%;
  }
}
@media screen and (max-width: 478px) {
  .col-md-4 {
    width: 100%;
  }
}
@media screen and (max-width: 375px) {
  .col-md-4 {
    width: 100%;
  }
}
</style>

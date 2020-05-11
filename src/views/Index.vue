<template>
  <div class="index">
    <TopBar></TopBar>
    <About></About>
    <Product></Product>
    <ProductList></ProductList>
    <NewsList></NewsList>
    <Classify></Classify>
    <Introduce></Introduce>
    <Development></Development>
    <Corporate></Corporate>
    <Territory></Territory>
    <Cooperative></Cooperative>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
// @ is an alias to /src
// import MainTop from '@/components/MainTop/MainTop.vue'
import TopBar from '@/components/TopBar/TopBar.vue'
import About from '@/components/About/About.vue'
import Classify from '@/components/Classify/Classify.vue'
import Introduce from '@/components/Introduce/Introduce.vue'
import Product from '@/components/Product/Product.vue'
import ProductList from '@/components/ProductList/ProductList.vue'
import NewsList from '@/components/NewsList/NewsList.vue'
import Development from '@/components/Development/Development.vue'
import Corporate from '@/components/Corporate/Corporate.vue'
import Territory from '@/components/Territory/Territory.vue'
import Cooperative from '@/components/CooperativePartner/CooperativePartner.vue'
import FooterBar from '@/components/FooterBar/FooterBar.vue'

export default {
  name: 'Home',
  components: {
    TopBar,
    // MainTop,
    About,
    Classify,
    Introduce,
    Product,
    ProductList,
    NewsList,
    Development,
    Corporate,
    Territory,
    Cooperative,
    FooterBar
  }
}
</script>

<template>
  <div class="n2">
    <h1 class="n2-title">{{title}}</h1>
    <p class="n2-info">{{info}}</p>
    <div class="n2-content">
      
    </div>
  </div>
</template>

<script>
export default {
  name: "n1",
  data() {
    return {
      title: "Video",
      info: "Our company's video"
    }
  }
};
</script>

<style scoped>
.n2 {
  text-align: center;
  background-size: cover;
  position: relative;
  background: #f9f9f9;
  min-height: 580px;
  padding: 3em 0;
  color: #fff;
}
.n2-title {
  color: #353535;
  font-size: 2em;
  padding-bottom: 10px;
}
.n2-info {
  color: #bfbdbd;
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 0;
}

</style>
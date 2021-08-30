<template>
  <div class="hero-container">
    <header>
      <nav>
        <img src="/favicon.ico" alt="logo" />
        <h3>Movie Review</h3>
      </nav>
    </header>
    <Slider />
  </div>
</template>

<script>
import Slider from "./Slider.vue";
export default {
  name: "Header",
  components: {
    Slider,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero-container {
  background-image: url("/bg-image-slider.jpg");
  min-height: 100vh;
  width: 100%;
  position: relative;
}
header {
  position: relative;
  max-width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}
nav {
  display: flex;
  align-items: center;
  padding: 30px 8%;
}
nav img {
  width: 40px;
}

nav h3 {
  color: white;
  font-size: 1.25em;
  padding-left: 7px;
}
</style>

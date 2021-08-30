<template>
  <div class="slider">
    <Carousel
      :autoplay="5000"
      :itemsToShow="2"
      :wrap-around="true"
      :itemsToScroll="1"
      :snapAlign="center"
    >
      <Slide v-for="slide in slides" :key="slide">
        <div class="carousel__item">
          <img :src="slide" alt="" />
          <div class="movie-info">
            <h3>Movie Name</h3>
            <p>Some basic information about the movies</p>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  setup() {
    const slides = [
      "/slider-1-570x364.jpg",
      "/slider-2-570x364.jpg",
      "/slider-3-570x364.jpg",
      "/slider-3-570x364.jpg",
    ];
    return {
      slides,
    };
  },
};
</script>

<style scoped>
.slider {
  padding-top: 70px;
}

.slider .movie-info {
  text-align: start;
  color: white;
  font-weight: 600;
  padding: 20px;
}

.movie-info h3 {
  padding-bottom: 10px;
}
</style>
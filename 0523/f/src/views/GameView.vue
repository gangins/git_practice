<template>
  <div class="big">
    <h2>공포 영화 추천</h2>
    <button @click="recommendMovie">추천 영화 보기</button>
    <div v-if="recommendedMovie">
      <h3>추천 영화: {{ recommendedMovie.title }}</h3>
      <img :src="recommendedMovie.imgq" alt="영화이미지" />
      <button @click="handleTrue">True</button>
      <button @click="handleFalse">False</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [
        {
          title: "겟 아웃",
          img: "공포, 스릴러",
          bool: true,
          imgq: require("@/assets/86772212622_727.jpg"),
        },
        {
          title: "싸이코",
          genre: "스릴러",
          rating: 8.5,
          plot: "정신병원의 살인마와 정신과 의사의 사투",
          bool: false,
        },
        {
          title: "오컬트",
          genre: "공포",
          rating: 6.8,
          plot: "종교적인 집단에 참여한 가족의 공포스러운 경험",
          bool: true,
        },
      ],
      recommendedMovie: null,
    };
  },
  methods: {
    recommendMovie() {
      const randomIndex = Math.floor(Math.random() * this.movies.length);
      this.recommendedMovie = this.movies[randomIndex];
    },
    handleTrue() {
      if (this.recommendedMovie.bool) {
        console.log("True Success");
      } else {
        console.log("True Failure");
      }
    },
    handleFalse() {
      if (!this.recommendedMovie.bool) {
        console.log("False Success");
      } else {
        window.location.href = "http://localhost:8080/4";
      }
    },
  },
};
</script>

<style>
.big {
  height: 100vh;
}
</style>

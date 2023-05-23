<template>
  <div>
    <h1>Article Page</h1>
    <div class="list-group" v-if="articles.length > 0">
      <router-link
        v-for="article in articles"
        :key="article.id"
        :to="{ name: 'ArticleDetailView', params: { id: article.id } }"
        class="list-group-item list-group-item-action"
      >
        <span class="font-weight-bold">작성자:</span> {{ article.user_name }}
        <br />
        {{ article.title }}
      </router-link>
    </div>
    <div v-else>
      <p>게시물이 없습니다.</p>
    </div>

    <br />
    <button class="btn btn-primary" @click.prevent="createArticle">
      글쓰기
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ArticleView",
  computed: {
    ...mapState({
      articles: (state) => state.articleModule.articles,
    }),
  },
  methods: {
    createArticle() {
      // 게시물 생성 로직 구현
      // 필요한 경우 Vuex의 액션을 호출하여 데이터를 저장할 수 있습니다.
    },
  },
  created() {
    // 게시물 목록을 불러오는 로직 구현
    // 필요한 경우 Vuex의 액션을 호출하여 데이터를 가져올 수 있습니다.
  },
};
</script>

<style scoped>
.ArticleView {
  background-color: black;
}
.writer {
  color: white;
}
</style>

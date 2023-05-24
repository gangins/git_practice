<template>
  <div>
    <br />
    <br />
    <br />
    <br />

    <div class="titledetail">{{ article.title }}</div>

    <br />
    <br />
    <p>내용: {{ article.content }}</p>
    <p>작성시간: {{ article.created_at }}</p>

    <div>
      <h3>댓글</h3>
      <ArticleCommentItem
        v-for="comment in articleComment"
        :key="comment.id"
        :comment="comment"
      />
    </div>
  </div>
</template>

<script>
import ArticleCommentItem from "@/components/ArticleCommentItem";

import { mapState } from "vuex";

export default {
  name: "ArticleDetailView",
  components: {
    ArticleCommentItem,
  },
  computed: {
    ...mapState({
      article: (state) => state.articleModule.article,
    }),
    articleComment() {
      return this.article.articlecomment_set;
    },
  },
  methods: {
    getArticleDetail() {
      const articleId = this.$route.params.id;
      this.$store.dispatch("getArticleDetail", articleId);
    },
  },
  created() {
    this.getArticleDetail();
  },
};
</script>

<style>
.titledetail {
  border-top: solid;
  border-bottom: solid;
}
</style>

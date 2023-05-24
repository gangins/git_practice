<template>
  <div>
    <tr class="articlelist">
      <td class="articlerouter">
        <router-link
          :to="{ name: 'ArticleDetailView', params: { id: article.id } }"
        >
          {{ article.title }}
        </router-link>
      </td>

      <td class="articleusername">{{ article.user_name }}</td>
      <td class="articletime">{{ formattedTime }}</td>
    </tr>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "ArticleItem",
  props: {
    article: Object,
  },
  computed: {
    formattedTime() {
      return moment(this.article.created_at).format("HH:mm");
    },
  },
};
</script>

<style>
.articlelist {
  max-width: 1300px;
  width: auto;
  padding: 20px;
  color: #ffffff;
  background-color: gray;
}

.articlerouter {
  color: #ffffff;
  border-bottom: solid;
  width: 700px;
}

.articleusername {
  color: #ffffff;
  border-bottom: solid;
  width: 300px;
  height: 30px;
}

.articletime {
  color: #ffffff;
  border-bottom: solid;
  width: 300px;
  height: 30px;
}
</style>

<template>
  <q-page style="background-color: whitesmoke !important">
    <div
      class="q-pt-lg"
      :style="
        $q.screen.lt.lg
          ? 'padding-left:32px; padding-right: 24px;'
          : 'padding-left:48px; padding-right: 24px;'
      "
    >
      <Stories :stories="stories" />
    </div>
    <div
      class="q-pt-lg"
      :style="$q.screen.lt.lg ? 'padding-left:32px' : 'padding-left:48px'"
      style="padding-right: 32px"
    >
      <PostProfile :postProfile="postProfile" />
    </div>
    <div
      :style="$q.screen.lt.lg ? 'padding-left:32px' : 'padding-left:48px'"
      style="padding-right: 32px"
      v-for="(post, index) in posts"
      :key="index"
      class="q-pt-lg"
      :class="index + 1 === posts.length ? 'q-pb-lg' : ''"
    >
      <ShowPosts :post="post" />
    </div>
  </q-page>
</template>

<script>
// @ is an alias to /src
import Stories from "@/components/Stories.vue";
import PostProfile from "@/components/PostProfile";
import ShowPosts from "@/components/ShowPosts";
import store from "@/store";
import { computed } from "vue";
export default {
  name: "HomeView",
  components: {
    Stories,
    PostProfile,
    ShowPosts,
  },
  setup() {
    const posts = computed(() => store.getters.posts);
    return { stories, postProfile, posts };
  },
};
const stories = [
  {
    name: "Cody",
    imgSrc: "@/assets/images/dog2.jpg",
  },
  {
    name: "Tiger",
    imgSrc: "@/assets/images/story1.jpg",
  },
  {
    name: "Oscar",
    imgSrc: "@/assets/images/story2.jpg",
  },
  {
    name: "Ziggy",
    imgSrc: "@/assets/images/story3.jpg",
  },
];
const postProfile = {
  src: "@/assets/images/dog2.jpg",
};
</script>

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
      :class="index+1 === posts.length ? 'q-pb-lg' : ''"
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

export default {
  name: "HomeView",
  components: {
    Stories,
    PostProfile,
    ShowPosts,
  },
  setup() {
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
const posts = [
  {
    user: "Cody",
    date: "9 hours ago",
    desc: "Hello World!!",
    profileSrc: "@/assets/images/dog2.jpg",
    postSrc: "@/assets/images/hello-world.jpg",
    likes: 4,
    comments: 0,
    shares: 3 
  },
  {
    user: "Jasper",
    date: "16 hours ago",
    desc: "Sometimes, they call me 'Getbackhere.'",
    profileSrc: "@/assets/images/dog7.jpg",
    postSrc: "@/assets/images/getbackhere.jpg",
    likes: 2,
    comments: 0,
    shares: 1 
  },
];
</script>

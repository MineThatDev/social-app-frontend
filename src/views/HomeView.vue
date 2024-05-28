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
      class="q-pt-lg"
      :style="$q.screen.lt.lg ? 'padding-left:32px' : 'padding-left:48px'"
      style="padding-right: 32px"
      v-for="(post, index) in posts"
      :key="index"
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
    name: "Eric Clapton",
    src: "@/assets/images/my-profile.jpg",
  },
  {
    name: "John Cena",
    src: "@/assets/images/my-profile.jpg",
  },
  {
    name: "Nen Kam",
    src: "@/assets/images/my-profile.jpg",
  },
  {
    name: "John Pettruchi",
    src: "@/assets/images/my-profile.jpg",
  },
];
const postProfile = {
  src: "@/assets/images/my-profile.jpg",
};
const posts = [
  {
    user: "Poopan",
    date: "9 hours ago",
    desc: "Hi, Have a good day 5555555555555555555555555555555555555555555555555555555555555555555555555555+",
    profileSrc: "@/assets/images/my-profile.jpg",
    postSrc: "@/assets/images/my-profile.jpg",
  },
  {
    user: "Poogun",
    date: "16 hours ago",
    desc: "Hi, I'am your girlfriend, Please kiss me",
    profileSrc: "@/assets/images/my-profile.jpg",
    postSrc: "@/assets/images/my-profile.jpg",
  },
];
</script>

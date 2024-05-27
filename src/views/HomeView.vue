<template>
  <q-page style="background-color: whitesmoke !important">
    <div class="q-py-lg q-pl-xl q-pr-lg"><Stories :stories="stories" /></div>
  </q-page>
</template>

<script>
// @ is an alias to /src
import Stories from "@/components/Stories.vue";

export default {
  name: "HomeView",
  components: {
    Stories,
  },
  setup() {
    return { stories };
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
</script>

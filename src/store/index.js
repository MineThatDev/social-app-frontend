import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [
      {
        id: 1,
        user: "Cody",
        date: "9 hours ago",
        desc: "Hello World!!",
        profileSrc: "@/assets/images/dog2.jpg",
        postSrc: "@/assets/images/hello-world.jpg",
        likes: 4,
        comments: 0,
        shares: 3,
      },
      {
        id: 2,
        user: "Jasper",
        date: "16 hours ago",
        desc: "Sometimes, they call me 'Getbackhere.'",
        profileSrc: "@/assets/images/dog7.jpg",
        postSrc: "@/assets/images/getbackhere.jpg",
        likes: 2,
        comments: 0,
        shares: 1,
      },
    ],
  },
  getters: {
    posts: (state) => state.posts,
  },
  mutations: {
    setPost(state, post) {
      state.posts.unshift(post);
    },
    deletePost(state, id) {
      state.posts = state.posts.filter((post) => post.id !== id);
    },
  },
  actions: {
    addNewPost({ commit }, post) {
      commit("setPost", post);
    },
    deletePost({ commit }, id) {
      commit("deletePost", id);
    },
  },
});

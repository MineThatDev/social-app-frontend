<template>
  <q-card
    :dark="false"
    class="text-black"
    style="box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.38)"
  >
    <q-card-section class="row justify-between items-center">
      <div style="display: flex; align-items: center">
        <q-avatar
          ><img :src="handleImageSrc(props.post.profileSrc)" alt=""
        /></q-avatar>
        <div
          class="profileDesc fs-12 q-ml-md"
          style="display: flex; flex-direction: column"
        >
          <div class="title font-montserrat-semi-bold">
            {{ props.post.user }}
          </div>
          <div class="date">{{ props.post.date }}</div>
        </div>
      </div>
      <q-icon
        name="more_vert"
        size="20px"
        class="cursor-pointer"
        @click="toggleMoreVert = !toggleMoreVert"
        v-if="props.post.user === 'Cody'"
      >
        <q-card
          ref="target"
          v-if="toggleMoreVert"
          :dark="false"
          style="position: absolute; top: 10px; right: 12px"
        >
          <q-card-section class="q-pa-none">
            <q-btn
              dense
              flat
              no-caps
              style="width: 80px"
              @click="deletePost(props.post.id)"
              ><span class="fs-12 font-montserrat-semi-bold">
                Delete
              </span></q-btn
            >
          </q-card-section>
        </q-card>
      </q-icon>
    </q-card-section>
    <q-card-section class="q-pa-none">
      <div class="fs-12 q-px-md" style="word-break: break-all">
        {{ props.post.desc }}
      </div>
      <div class="q-mt-md q-px-md" v-if="props.post.postSrc">
        <q-img fit :ratio="1" :src="handleImageSrc(props.post.postSrc)"></q-img>
      </div>
    </q-card-section>
    <q-card-section style="padding: 12px 10px 6px 10px">
      <q-btn dense no-caps flat>
        <q-icon name="favorite" size="20px"></q-icon
        ><span style="margin-left: 4px" class="fs-12"
          >{{ props.post.likes }} Likes</span
        >
      </q-btn>
      <q-btn class="q-ml-sm" dense no-caps flat>
        <q-icon name="comments" size="20px"></q-icon
        ><span style="margin-left: 4px" class="fs-12"
          >{{ props.post.comments }} Comments</span
        >
      </q-btn>
      <q-btn class="q-ml-sm" dense no-caps flat>
        <q-icon name="share" size="20px"></q-icon
        ><span style="margin-left: 4px" class="fs-12"
          >{{ props.post.shares }} Shares</span
        >
      </q-btn>
    </q-card-section>
  </q-card>
</template>

<script>
import common from "@/utils/common.js";
import { ref } from "vue";
import store from "@/store";
import { onClickOutside } from "@vueuse/core";
export default {
  props: {
    post: {
      user: "",
      data: "",
      desc: "",
      profileSrc: "",
      postSrc: "",
    },
  },
  setup(props) {
    const { handleImageSrc, showNotification } = common();
    const deletePost = (id) => {
      store.dispatch("deletePost", id);
      showNotification('positive', "Delete successfully!")
    };
    const toggleMoreVert = ref(false);
    const target = ref(null);

    onClickOutside(target, () => (toggleMoreVert.value = false));
    return { props, handleImageSrc, toggleMoreVert, deletePost, target };
  },
};
</script>

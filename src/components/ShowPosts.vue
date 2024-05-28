<template>
  <q-card
    :dark="false"
    class="text-black"
    style="box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.38);"
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
      <q-icon name="more_vert" size="20px" class="cursor-pointer"></q-icon>
    </q-card-section>
    <q-card-section class="q-pa-none">
      <div class="fs-12 q-px-md" style="word-break: break-all">
        {{ props.post.desc }}
      </div>
      <div class="q-mt-md q-px-md">
        <q-img
          height="60%"
          fit
          :src="handleImageSrc(props.post.profileSrc)"
        ></q-img>
      </div>
    </q-card-section>
    <q-card-section style="padding: 12px 10px 6px 10px">
      <q-btn dense no-caps flat>
        <q-icon name="favorite" size="20px"></q-icon
        ><span style="margin-left: 4px" class="fs-12">0 Likes</span>
      </q-btn>
      <q-btn class="q-ml-sm" dense no-caps flat>
        <q-icon name="sms" size="20px"></q-icon
        ><span style="margin-left: 4px" class="fs-12">0 Comments</span>
      </q-btn>
      <q-btn class="q-ml-sm" dense no-caps flat>
        <q-icon name="share" size="20px"></q-icon
        ><span style="margin-left: 4px" class="fs-12">0 Shares</span>
      </q-btn>
    </q-card-section>
  </q-card>
</template>

<script>
import common from "@/utils/common.js";
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
    const { handleImageSrc } = common();
    return { props, handleImageSrc };
  },
};
</script>

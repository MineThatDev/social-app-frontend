<template>
  <q-card
    :dark="false"
    style="box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.38)"
  >
    <q-card-section class="row">
      <div :style="$q.screen.gt.md ? 'width: 10%' : 'width: 100%'">
        <q-avatar
          ><img :src="handleImageSrc(postProfile.src)" alt=""
        /></q-avatar>
      </div>
      <q-input
        type="textarea"
        :style="$q.screen.gt.md ? 'width: 90%' : 'width: 100%'"
        color="dark"
        borderless
        v-model="text"
        label="What's on your mind Cody"
        label-color="dark"
        input-class="text-dark"
        dense
      ></q-input>
    </q-card-section>
    <q-separator inset color="grey" />
    <q-card-actions class="row items-center justify-between q-px-md">
      <div class="row col-8 items-center">
        <q-file
          v-model="files"
          class="text-black"
          borderless
          label="Upload Image"
          label-color="dark"
          dense
          style="width: 148px"
          hide-bottom-space
          use-chips
        >
          <template v-slot:prepend>
            <q-icon
              :name="`img:${handleImageSrc('@/assets/icons/add-image.png')}`"
            />
          </template>
        </q-file>
        <q-file
          class="text-black"
          borderless
          label="Add Picture"
          label-color="dark"
          dense
          style="width: 148px"
          hide-bottom-space
        >
          <template v-slot:prepend>
            <q-icon
              :name="`img:${handleImageSrc('@/assets/icons/add-picture.png')}`"
            />
          </template>
        </q-file>

        <q-file
          class="text-black"
          borderless
          label="Tag Friends"
          label-color="dark"
          dense
          style="width: 148px"
          use-chips
          disable
        >
          <template v-slot:prepend>
            <q-icon :name="`img:${handleImageSrc('@/assets/icons/1.png')}`" />
          </template>
        </q-file>
      </div>

      <div class="col-4 text-right">
        <q-btn dense color="primary" glossy no-caps><span class="fs-12 font-montserrat-semi-bold">Post</span></q-btn>
      </div>
    </q-card-actions>
  </q-card>
</template>

<script>
import common from "@/utils/common.js";
import { ref } from "vue";
export default {
  props: {
    postProfile: {},
  },
  setup(props) {
    const { handleImageSrc } = common();
    const files = ref(null);
    const text = ref("");
    return { props, handleImageSrc, text, files };
  },
};
</script>

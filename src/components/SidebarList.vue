<template>
  <q-list dense>
    <q-item clickable v-ripple class="q-my-sm">
      <q-item-section avatar v-if="props.head.src">
        <q-avatar>
          <img
            style="width: 36px; height: 36px"
            :src="handleImageSrc(props.head.src)"
            alt=""
          />
        </q-avatar>
      </q-item-section>

      <q-item-section class="text-black font-montserrat-semi-bold">{{
        props.head.label
      }}</q-item-section>
    </q-item>
    <q-item
      class="text-black"
      v-for="(item, index) in props.body.items"
      :key="index"
      clickable
      v-ripple
    >
      <q-item-section avatar>
        <q-avatar>
          <img
            style="width: 28px; height: 28px"
            :src="handleImageSrc(item.src)"
            alt=""
          />
        </q-avatar>
      </q-item-section>
      <q-item-section> {{ item.label }}</q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import common from "@/utils/common.js";
export default {
  props: {
    head: {},
    body: {},
  },
  setup(props) {
    const { handleImageSrc } = common();
    return { props, handleImageSrc };
  },
};
</script>

<template>
  <div class="row">
    <div
      class="col-3 q-pr-sm"
      v-for="(item, index) in props.stories"
      :key="index"
    >
      <q-card v-if="index === 0">
        <q-img :src="handleImageSrc(item.src)">
          <div class="absolute-bottom">
            <q-btn
              glossy
              color="primary"
              icon="add"
              round
              size="10px"
              style="position: absolute; top: -14px; left: 10px"
            ></q-btn>
            {{ item.name }}
          </div>
        </q-img>
      </q-card>
      <q-card v-else>
        <q-img :src="handleImageSrc(item.src)">
          <div class="absolute-bottom">{{ item.name }}</div>
        </q-img>
      </q-card>
    </div>
  </div>
</template>

<script>
import common from "@/utils/common.js";
export default {
  props: {
    stories: {},
  },
  name: "HelloWorld",
  setup(props) {
    const { handleImageSrc } = common();
    return { props, handleImageSrc };
  },
};
</script>

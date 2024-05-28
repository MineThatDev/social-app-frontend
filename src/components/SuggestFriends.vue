<template>
  <q-card
    :dark="false"
    style="box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.38);"
  >
    <q-card-section>
      <div class="text-black font-montserrat-semi-bold text-grey">
        Suggestions for you
      </div>
    </q-card-section>

    <q-card-section class="q-pa-sm">
      <div
        v-for="(item, index) in props.users"
        :key="index"
        class="row justify-between items-center"
      >
        <div>
          <q-avatar>
            <img
              :src="handleImageSrc(item.src)"
              style="width: 28px; height: 28px"
            />
          </q-avatar>
          <span class="font-montserrat-semi-bold fs-12">{{ item.name }}</span>
        </div>
        <div>
          <q-btn glossy color="primary" dense no-caps style="min-width: 60px"
            ><span class="fs-12">follow</span></q-btn
          >
          <q-btn
            glossy
            color="negative"
            class="q-ml-sm"
            dense
            no-caps
            style="min-width: 60px"
            ><span class="fs-12">dismiss</span></q-btn
          >
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import common from "@/utils/common.js";
export default {
  props: {
    users: {},
  },
  setup(props) {
    const { handleImageSrc } = common();
    return { handleImageSrc, props };
  },
};
</script>

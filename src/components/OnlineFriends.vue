<template>
  <q-card :dark="false" style="box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.38);" >
    <q-card-section>
      <div class="text-black font-montserrat-semi-bold text-grey">
        Online Friends
      </div>
    </q-card-section>

    <q-card-section class="q-pa-sm">
      <div
        v-for="(item, index) in props.users"
        :key="index"
        class="row items-center"
      >
        <div>
          <q-avatar>
            <q-icon
              style="border-radius: 50%; width: 28px; height: 28px"
              round
              :name="`img:${handleImageSrc(item.src)}`"
            >
              <q-badge color="green" rounded floating />
            </q-icon>
          </q-avatar>
          <span class="font-montserrat-semi-bold fs-12">{{ item.name }}</span>
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

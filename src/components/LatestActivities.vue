<template>
  <q-card class="my-card" :dark="false">
    <q-card-section>
      <div class="text-black font-montserrat-semi-bold text-grey">Latest Activities</div>
    </q-card-section>

    <q-card-section class="q-pa-sm">
      <div
        v-for="(item, index) in props.latestActivities"
        :key="index"
        class="row justify-between items-center"
      >
        <div style="display: flex" class="items-center">
          <q-avatar>
            <img
              :src="handleImageSrc(item.src)"
              style="width: 28px; height: 28px"
            />
          </q-avatar>
          <span class="font-montserrat-semi-bold fs-12">{{ item.name }}&nbsp;</span>

          <div style="width: 80px" class="ellipsis fs-12">{{ item.activity }}</div>
        </div>
        <div class="text-slate-gray fs-12">
          {{ item.date }}
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    latestActivities: {},
  },
  setup(props) {
    const handleImageSrc = (imgSrc) => {
      let condition = "@/assets";
      // if local path
      if (imgSrc ? imgSrc.includes(condition) : "") {
        let newPath = imgSrc.replace(condition, "");
        return require(`@/assets${newPath}`);
        // if No path
      } else if (!imgSrc) {
        //
      }
      // For External Path
      else {
        return imgSrc;
      }
    };
    return { handleImageSrc, props };
  },
};
</script>

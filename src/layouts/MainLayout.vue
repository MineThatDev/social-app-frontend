<template>
  <q-layout view="hHh Lpr lff" class="shadow-2 rounded-borders">
    <q-header
      style="outline: 1px solid lightgray"
      elevated
      :class="$q.dark.isActive ? 'bg-white text-black' : 'bg-black text-white'"
    >
      <q-toolbar class="q-px-lg">
        <q-btn
          v-if="$q.screen.lt.md"
          flat
          @click="drawerLeft = !drawerLeft"
          round
          dense
          icon="menu"
        />
        <q-toolbar-title class="font-montserrat-bold text-dark-blue"
          >Social App</q-toolbar-title
        >
        <q-space></q-space>
        <q-input
          v-if="!$q.screen.lt.md"
          label-color="dark"
          bg-color="white"
          outlined
          dense
          v-model="text"
          label="Search"
          color="dark"
          input-class="text-dark"
        >
          <template v-slot:prepend>
            <q-icon name="search" color="dark" /> </template
        ></q-input>
        <q-space v-if="!$q.screen.lt.md"></q-space>
        <q-space v-if="!$q.screen.lt.md"></q-space>
        <q-space v-if="!$q.screen.lt.md"></q-space>
        <q-space v-if="!$q.screen.lt.md"></q-space>
        <q-btn class="q-mr-sm" flat round dense icon="person">
          <q-badge color="red" rounded floating transparent> 4 </q-badge>
        </q-btn>
        <q-btn class="q-mr-sm" flat round dense icon="sms" />
        <q-btn class="q-mr-sm" flat round dense icon="notifications"> </q-btn>
        <q-btn-dropdown
          rounded
          color="dark"
          auto-close
          flat
          transition-duration="500"
          dense
        >
          <template v-slot:label>
            <img
              style="border-radius: 50% !important; object-fit: cover;"
              width="36px"
              height="36px"
              :src="`${handleImageSrc('@/assets/images/dog2.jpg')}`"
              alt=""
            />
          </template>
          <q-list>
            <q-item>
              <q-item-section class="font-montserrat-bold">Cody</q-item-section>
            </q-item>

            <q-item clickable v-close-popup disable>
              <q-item-section>ข้อมูลส่วนตัว</q-item-section>
            </q-item>

            <q-item clickable v-close-popup disable>
              <q-item-section>ออกจากระบบ</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn
          v-if="$q.screen.lt.md"
          flat
          @click="drawerRight = !drawerRight"
          round
          dense
          icon="menu"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawerLeft"
      show-if-above
      :width="328"
      style="box-shadow: 0px 0px 12px -10px rgba(0, 0, 0, 0.38)"
      class="bg-white text-black"
    >
      <q-scroll-area class="fit">
        <div class="q-py-md">
          <SidebarList
            :head="topSidebarInfo.head"
            :body="topSidebarInfo.body"
          />
          <SidebarList
            :head="centerSidebarInfo.head"
            :body="centerSidebarInfo.body"
          />
          <SidebarList
            :head="bottomSidebarInfo.head"
            :body="bottomSidebarInfo.body"
          />
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-drawer
      side="right"
      v-model="drawerRight"
      show-if-above
      :width="400"
      class="text-black"
      style="background-color: whitesmoke !important"
    >
      <q-scroll-area class="fit">
        <div class="q-pt-lg q-px-md">
          <SuggestFriends :users="users" />
        </div>
        <div class="q-pt-lg q-px-md">
          <LatestActivities :latestActivities="latestActivities" />
        </div>
        <div class="q-py-lg q-px-md">
          <OnlineFriends :users="users2" />
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref, onMounted } from "vue";
import { useQuasar } from "quasar";
import SidebarList from "@/components/SidebarList";
import SuggestFriends from "@/components/SuggestFriends";
import LatestActivities from "@/components/LatestActivities";
import OnlineFriends from "@/components/OnlineFriends";
import common from "@/utils/common.js";
export default {
  components: {
    SidebarList,
    SuggestFriends,
    LatestActivities,
    OnlineFriends,
  },
  setup() {
    const $q = useQuasar();
    const text = ref("");
    const { handleImageSrc } = common();
    onMounted(() => {
      $q.dark.set(true);
    });
    return {
      drawerLeft: ref(false),
      drawerRight: ref(false),
      text,
      topSidebarInfo,
      centerSidebarInfo,
      bottomSidebarInfo,
      users,
      users2,
      latestActivities,
      handleImageSrc,
    };
  },
};
const topSidebarInfo = {
  head: {
    label: "Cody",
    src: "@/assets/images/dog2.jpg",
  },
  body: {
    items: [
      {
        label: "Friends",
        src: "@/assets/icons/1.png",
      },
      {
        label: "Groups",
        src: "@/assets/icons/2.png",
      },
      {
        label: "Marketplace",
        src: "@/assets/icons/3.png",
      },
      {
        label: "Watch",
        src: "@/assets/icons/4.png",
      },
      {
        label: "Memories",
        src: "@/assets/icons/5.png",
      },
    ],
  },
};

const centerSidebarInfo = {
  head: {
    label: "Your shortcuts",
  },
  body: {
    items: [
      {
        label: "Friends",
        src: "@/assets/icons/6.png",
      },
      {
        label: "Groups",
        src: "@/assets/icons/7.png",
      },
      {
        label: "Marketplace",
        src: "@/assets/icons/8.png",
      },
      {
        label: "Watch",
        src: "@/assets/icons/9.png",
      },
      {
        label: "Memories",
        src: "@/assets/icons/10.png",
      },
    ],
  },
};

const bottomSidebarInfo = {
  head: {
    label: "Your shortcuts",
  },
  body: {
    items: [
      {
        label: "Fundraiser",
        src: "@/assets/icons/11.png",
      },
      {
        label: "Tutorials",
        src: "@/assets/icons/12.png",
      },
      {
        label: "Course",
        src: "@/assets/icons/13.png",
      },
    ],
  },
};

const users = [
  {
    name: "Duke",
    src: "@/assets/images/dog3.jpg",
  },
  {
    name: "Cooper",
    src: "@/assets/images/dog5.jpg",
  },
];

const users2 = [
  {
    name: "Ziggy",
    src: "@/assets/images/dog6.jpg",
  },
  {
    name: "Tiger",
    src: "@/assets/images/tiger1.jpg",
  },
];

const latestActivities = [
  {
    name: "Jasper",
    src: "@/assets/images/dog7.jpg",
    activity: "changed their cover picture.",
    date: "5 min ago",
  },
  {
    name: "Ziggy",
    src: "@/assets/images/dog6.jpg",
    activity: "liked a post.",
    date: "17 min ago",
  },
  {
    name: "Oscar",
    src: "@/assets/images/dog8.jpg",
    activity: "liked a comment.",
    date: "32 min ago",
  },
  {
    name: "Tiger",
    src: "@/assets/images/tiger1.jpg",
    activity: "posted a new photo.",
    date: "59 min ago",
  },
];
</script>

<template>
  <q-layout view="hHh Lpr lff" class="shadow-2 rounded-borders">
    <q-header
      style="outline: 1px solid lightgray"
      elevated
      :class="$q.dark.isActive ? 'bg-white text-black' : 'bg-black text-white'"
    >
      <q-toolbar>
        <q-btn flat @click="drawerLeft = !drawerLeft" round dense icon="menu" />
        <q-toolbar-title class="font-montserrat-bold text-dark-blue"
          >socialapp</q-toolbar-title
        >
        <q-btn flat round dense icon="home" />
        <q-btn flat round dense icon="dark_mode" />
        <q-btn flat round dense icon="grid_view" />
        <q-space></q-space>
        <q-input
          label-color="dark"
          bg-color="white"
          outlined
          dense
          v-model="text"
          label="Search"
          color="dark"
        >
          <template v-slot:prepend>
            <q-icon name="search" color="dark" /> </template
        ></q-input>
        <q-space></q-space>
        <q-space></q-space>
        <q-space></q-space>
        <q-space></q-space>
        <q-btn flat round dense icon="person" />
        <q-btn flat round dense icon="mail" />
        <q-btn flat round dense icon="notifications" />
        <q-avatar>
          <img src="../assets/images/my-profile.jpg" alt="" />
        </q-avatar>
        <q-btn
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
      elevated
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
          <OnlineFriends :users="users" />
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
      latestActivities,
    };
  },
};
const topSidebarInfo = {
  head: {
    label: "Ruchchanon Sirisan",
    src: "@/assets/images/my-profile.jpg",
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
    name: "Emily Devidson",
    src: "@/assets/images/my-profile.jpg",
  },
  {
    name: "Tomson Saxsophone",
    src: "@/assets/images/my-profile.jpg",
  },
];

const latestActivities = [
  {
    name: "Elza Scarlet",
    src: "@/assets/images/my-profile.jpg",
    activity: "changed their cover picture.",
    date: "1 min ago",
  },
  {
    name: "Poogun Parnwad",
    src: "@/assets/images/my-profile.jpg",
    activity: "liked a post.",
    date: "1 min ago",
  },
  {
    name: "Ruchchanon Sirisan",
    src: "@/assets/images/my-profile.jpg",
    activity: "liked a comment.",
    date: "1 min ago",
  },
  {
    name: "Stamp plempiti",
    src: "@/assets/images/my-profile.jpg",
    activity: "posted a new photo.",
    date: "1 min ago",
  },
];
</script>

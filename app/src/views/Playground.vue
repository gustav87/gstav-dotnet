<template>
  <main id="playgroundPage">
    <SideNav :sideNavItems="sideNavItems"/>
    <div class="display box">
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from "vue-property-decorator";
import SideNav from '../components/SideNav.vue';

@Component({
  components: {
    SideNav
  }
})

export default class Playground extends Vue {
  sideNavItems: {}[] = [];

  created() {
    this.sideNavItems = [
      {
        url: "/playground/githubSearch",
        text: "Github viewer"
      },
      {
        url: "/playground/colors",
        text: "Playing with colors"
      },
      {
        url: "/playground/map",
        text: "Map"
      },
      {
        url: "/playground/flickrViewer",
        text: "Flickr viewer"
      },
      {
        url: "/playground/dbStuff",
        text: "Database stuff"
      },
      {
        url: "/playground/vueStuff",
        text: "Vue stuff"
      }
      // {
      //   "url": "/playground/jsStuff",
      //   "text": "JavaScript stuff"
      // }
    ]
  }
}
</script>

<style lang="scss" scoped>
#playgroundPage {
  display: flex;
  border: 2px solid darksalmon;
}
.display {
	width: 100%;
	margin-left: 10px;
}
</style>


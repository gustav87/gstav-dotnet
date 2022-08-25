<template>
  <main>
    <SideNav :sideNavItems="sideNavItems" />
    <div class="display box"><p>Blogpage</p></div>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import SideNav from '@/components/SideNav.vue'

@Component({
  components: {
    SideNav
  }
})

export default class Blog extends Vue {
  sideNavItems: {text: string, url: string}[] = [];

  created() {
    this.sideNavItems = [
      {text: "Blogpost 1", url: "notyet"},
      {text: "Blogpost 2", url: "notyet"},
      {text: "Blogpost 3", url: "notyet"},
      {text: "Blogpost 4", url: "notyet"}
    ]
  }
}

</script>

<style lang="scss" scoped>
main {
  display: flex;
  border: 2px solid darksalmon;
}
.display {
	width: 100%;
	margin-left: 10px;
}
</style>
<template>
  <main>
    <div class="box">
      <h2>Who am I?</h2>
      <p>Hello there! My name is Gustav and I'm a Linux afficionado from Helsingborg, Sweden, currently living in Stockholm.</p>
      <p>I started my Linux journey with Ubuntu MATE in 2017, and moved over to the Arch based distribution Manjaro in 2020. In my free time I tinker with Linux, dabble with web development, Docker and Raspberry Pi.</p>
    </div>
    <div class="box">
      <h2>What is this place?</h2>
      <p>This is my website. It contains my Curriculum Vitae, a contact form and some personal projects.</p>
      <p>It's a place where I can try new things related to servers, programming and networking. Feel free to look around, or maybe hack the database. Enjoy!</p>
      <p>Click here to view my <a href="/CV.pdf" v-text="item.text" @click.prevent="download(item)"></a>.</p>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import axios from 'axios';
import constants from "@/constants";

@Component({
  components: {
  }
})

export default class Home extends Vue {
  @Prop() public showAddTask!: Boolean;

  tasks = [];
  item = {
    url: `${constants.backend_url}/api/cv`,
    text: "Curriculum Vitae"
  }

  public download({url, text}: {url: string, text: string}) {
    axios({
      url,
      method: 'GET',
      responseType: 'blob'
    }).then(response => {
      const blob = new Blob([response.data], { type: 'application/pdf' })
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = text
      link.click()
      URL.revokeObjectURL(link.href)
    })
  }
}

</script>

<style lang="scss" scoped>
main {
  border: 2px solid darksalmon;
}
</style>


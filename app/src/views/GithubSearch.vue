<template>
<main class="content">
  <p>Search for a username on GitHub and display their repositories!</p>
	<form name="searchUser" @submit="search($event)">
		<input type="search" placeholder="username to find" v-model="username" required>
		<input type="submit" value="Search">
		<p>Automatic search in {{countdown}} seconds.</p>
	</form>
</main>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  components: {
  }
})

export default class GithubSearch extends Vue {
  public username = "angular";
  public countdown = 5;
  private intervalID = 0;

  public search(event?: Event) {
    if (event) {
      event.preventDefault();
    }

    this.$router.push(`githubUser/${this.username}`);
  }

  public startCountDown() {
    this.intervalID = setInterval(this.decrementCountdown, 1000);
  }

  public decrementCountdown() {
    this.countdown -= 1;
    this.checkCountdown();
  }

  public checkCountdown() {
    if (this.countdown <= 0) {
      this.stopCountDown();
      this.search();
    }
  }

  created() {
    this.startCountDown()
  }

  public stopCountDown() {
    clearInterval(this.intervalID);
  }

  beforeDestroy() {
    this.stopCountDown();
  }
}
</script>

<style lang="scss" scoped>
</style>
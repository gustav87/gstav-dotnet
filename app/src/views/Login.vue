<template>
  <main>
    <div class="box">
      <h2 id="header">{{headerText}}</h2>
      <p>Passwords are hashed and stored in a local database. Don't use any of your real passwords.</p>
      <form @submit.prevent="submitForm" method="get" id="loginForm" :style="{display: displayForm}">
        <label for="username">Username</label>
        <input type="text" v-model="username" id="username" name="username" required minlength="1"/>
        <label for="password">Password</label>
        <input type="password" v-model="password" id="password" name="password" required/>
        <input type="submit" value="Send"/>
      </form>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import constants from "@/constants";

@Component({
  components: {}
})

export default class Blog extends Vue {
  headerText = "Log in here";
  displayForm = "block";
  username = "";
  password = "";

  public async submitForm() {
    try {
      const data = JSON.stringify({ username: this.username, password: this.password });
      const url = `${constants.backend_url}/api/login`
      const response = await fetch(url, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
      if (response.status === 200) {
        const isOk = response.ok;
        const data = await response.json();
      } else {
        alert("Something went wrong")
      }
    } catch (error) {
      console.log(error)
    }
  }
}

</script>

<style lang="scss" scoped>
main {
  border: 2px solid darksalmon;
}

input {
  width: 400px;
  display: block;
	padding: 5px 8px;
	border: 2px solid #ccc;
	border-radius: 4px;
	background: #f8f8f8;
}

#header {
  font-size: 2em;
  margin: 0;
}

label {
  display: block;
  margin: 1em 0 0.4em;
	padding-left: 3px;
  font-size: 1.2rem;
}

input[type='submit'] {
  width: inherit;
  margin-top: 1em;
}

</style>


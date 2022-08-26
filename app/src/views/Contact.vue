<template>
  <main class="content">
    <div class="box">
      <p id="header" :style="{textAlign: headerTextAlign}">{{headerText}}</p>
      <form @submit.prevent="submitForm" method="get" id="contactMeForm" :style="{display: displayForm}">
        <label for="name">Name</label>
        <input type="text" v-model="name" id="name" name="name" required minlength="1"/>
        <label for="email">E-mail</label>
        <input type="text" v-model="email" id="email" name="email" required/>
        <label for="topic">Topic</label>
        <select id="topic" v-model="topic" name="topic">
          <option>---</option>
          <option id="hi" value="Just wanna say hi">Just want to say hi</option>
          <option id="suggestion" value="Suggestion for site">Suggestion for site</option>
          <option id="date" value="I want to ask you out for a date">I want to ask you out for a date</option>
          <option id="dontKnow" value="I don't know where I am">I don't know where I am</option>
        </select>
        <label for="message">Message</label>
        <textarea placeholder="Message" v-model="message" name="message" required id="message"></textarea>
        <label id="saveCredentialsLabel" for="saveCredentials">Save name and email</label>
        <input id="saveCredentials" type="checkbox" name="saveCredentials">
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
  components: {
  }
})

export default class Contact extends Vue {
  displayForm = "block";
  headerTextAlign = "left";
  headerText = "Contact me";
  name = "";
  email = "";
  topic = "";
  message = "";


  public async submitForm() {
    try {
      const queryParams = `name=${this.name}&email=${this.email}&topic=${this.topic}&message=${this.message}`
      const response = await fetch(`${constants.protocol}://${window.location.hostname}:${constants.port}/api/contact?${queryParams}`)
      if (response.status === 200) {
        // const data = await response.json();
        // console.log(data);
        this.displayForm = 'none'
        this.headerTextAlign = 'center'
        this.headerText = 'Thank you for contacting me!'
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

input[type=text], select, textarea{
	padding: 5px 8px;
	border: 2px solid #ccc;
	border-radius: 4px;
	background: #f8f8f8;
}

#header {
  font-size: 2em;
  margin: 0;
}

textarea {
  height: 200px;
  resize: none;
}

label {
  display: block;
  margin: 1em 0 0.4em;
	padding-left: 3px;
  font-size: 1.2rem;
}

input, textarea, select {
  width: 50%;
  display: block;
}

input[type='checkbox'] {
  display: inline-block;
  width: inherit;
}

input[type='submit'] {
  width: inherit;
}

#saveCredentialsLabel {
  display: inline-block;
  margin: 0.5em 10px 0.4em 0;
}

</style>
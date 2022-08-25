<template>
  <main class="content">
    <p>Input anything into the Name and Email fields to insert a record into the database.</p>
    <form id="insertRowForm" @submit.prevent="submitInsertRowForm">
      <label for="name" id="nameLabel">Name:</label>
      <input type="text" name="name" id="name" maxlength="30" v-model="name">
      <label for="email">Email: </label>
      <input type="text" name="email" id="email" maxlength="30" v-model="email">
      <input type="submit" value="send">
    </form>
    <p>{{insertResult}}</p>
    <hr>
    <p>Search the database. You can filter by name.</p>
    <form id="searchDbForm" @submit.prevent="submitSearchDbForm">
      <label for="filter">Filter by name: </label>
      <input type="text" name="filter" id="filter" v-model="filter">
      <input type="submit" value="Search database">
    </form>
    <table v-if="showTable" id="getAllDocsResult">
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Date added</th>
      </tr>
      <tr v-for="document in documents">
        <td>{{document.name}}</td>
        <td>{{document.email}}</td>
        <td>{{document.date}}</td>
      </tr>
    </table>
    <p>{{searchResult}}</p>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  components: {
  }
})

export default class DbStuff extends Vue {
  name = "";
  email = "";
  filter = null;
  showTable = false;
  documents: { name: string; email: string; date: string }[] = [];
  insertResult = "";
  searchResult = "";

  public async submitInsertRowForm() {
    const now = new Date();
    const today = now.toISOString().split('T')[0];

    const requestOptions = {
      method: 'POST',
      headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({Name: this.name, Email: this.email, Date: today})
    }
    fetch(`http://${window.location.hostname}:7248/api/guests/insertRow`, requestOptions)
      .then(response => {
        if (response.ok) {
          this.insertResult = "Record inserted into database.";
        } else {
          this.insertResult = "Something went wrong with the database. No record inserted into database."
        }
        return response.text();
      })
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        this.insertResult = "Something went wrong with the backend. No record inserted into database."
        console.error(error);
      })
  }

  public submitSearchDbForm() {
    const queryString = this.filter ? `?filter=${this.filter}` : ''
    fetch(`http://${window.location.hostname}:7248/api/guests${queryString}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          this.searchResult = "Something went wrong with the database.";
        }
      })
      .then(res => {
        if (res) {
          this.showTable = true
          this.documents = res
        }
      })
      .catch(err => {
        this.searchResult = "Something went wrong with the backend.";
        console.error(err)
      })
  }
}
</script>

<style lang="scss" scoped>
input {
  display: block;
  margin-bottom: 5px;
}

th {
  text-align: left;
}

hr {
  border-top: 1px solid black;
}

#filter {
  display: inline;
}
</style>
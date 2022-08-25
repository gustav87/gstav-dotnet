<template>
  <main class="content">
    <div class="flexContainer">
      <div>
        <p>You searched for: {{username}}</p>
        <p id="userDetails">Username: {{account.name}}</p>
        <p>User location: {{account.location}}</p>	
        <div><img id="img1" :src="account.avatar_url" :title="account.name"></div>
      </div>
      <div>
        <div>Choose sort order:</div>
        <select v-model="repoSortOrder" name="fishy">
          <option value="+stargazers_count">Stars, ascending</option>
          <option value="-stargazers_count">Stars, descending</option>
          <option value="+name">Name, ascending</option>
          <option value="-name">Name, descending</option>
          <option value="+language">Language, ascending</option>
          <option value="-language">Language, descending</option>
        </select>
        <table>
          <tr><th>Name</th><th>Stars</th><th>Language</th></tr>
          <tr v-for="item in sortedRepos">
            <td>{{item.name}}</td>
            <td class="stars">
              {{item.stargazers_count}} 
              <i class="fa fa-star-o fa-lg" aria-hidden="true"></i>
            </td>
            <td>{{item.language}}</td>
          </tr>
        </table>	
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  components: {
  }
})

export default class GithubUser extends Vue {
  username = this.$route.params.username;
  account: {
    name: string,
    location: string,
    avatar_url: string,
    repos_url: string
  } = {
    name: "",
    location: "",
    avatar_url: "",
    repos_url: ""
  };

  repoSortOrder = '+stargazers_count';
  repos: {
    name: string,
    stargazers_count: number,
    language: string
  }[] = [];

  public async searchUser() {
    console.log("searching!")
  }
  async created() {
    // this.account = this.searchUser()
    this.account = await fetch(`https://api.github.com/users/${this.username}`)
      .then(response => response.json())
    this.repos = await fetch(this.account.repos_url)
      .then(response => response.json())
  }
  
  // sortedRepos: function() {
  //   return this.repos.sort((a, b) => b.stargazers_count - a.stargazers_count)
  // }
  get sortedRepos() {
    switch(this.repoSortOrder) {
      case '+stargazers_count':
        return this.repos.sort((a, b) => a.stargazers_count - b.stargazers_count)
      case '-stargazers_count':
        return this.repos.sort((a, b) => b.stargazers_count - a.stargazers_count)
      case '+name':
        return this.repos.sort((a, b) => a.name < b.name ? -1 : 1)
      case '-name':
        return this.repos.sort((a, b) => b.name < a.name ? -1 : 1)
      case '+language':
        return this.repos.sort((a, b) => a.language < b.language ? -1 : 1)
      case '-language':
        return this.repos.sort((a, b) => b.language < a.language ? -1 : 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.flexContainer {
	display: flex;
	justify-content: space-between;
}

img {
  width: 300px;
}

table {
	border-collapse: collapse;
}

tr:nth-child(even) td {
  background-color: #D6EEEE;
}
td, th {
	padding: 8px;
}

.stars {
	text-align: center;
}
</style>

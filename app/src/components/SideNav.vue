<template>
  <div class="box">
    <ul v-for="item in sideNavItems">
      <li><router-link :to="item.url" :class="{'color-nav': $route.path.includes(item.url)}">{{item.text}}</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SideNav',
  props: {
    sideNavItems: Array
  }
}
</script>

<style scoped>
div {
	width: 350px;
  font-size: 1.4rem;
}

a {
  text-decoration: none;
  color: black;
  padding: 10px;
  display: block;
}

a:hover {
  color: #0a58ca;
}

ul {
  padding-left: 1rem;
  margin: 0;
}

li {
	list-style: none;
}

.color-nav {
  background: darksalmon;
}
</style>

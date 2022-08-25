<template>
  <div id="app">
    <div class="pageWrapper">
      <header>
        <h1><router-link to="/">gstav</router-link></h1>
      </header>
      <div class="container">
        <Nav/>
        <router-view></router-view>
	  </div>
	  <footer>Gustav Andersson 2016</footer>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Nav from '@/components/Nav.vue'

@Component({
  components: {
    Nav
  }
})

export default class App extends Vue {

}

</script>

<style lang="scss">
$breakpoint-desktop: 992px;

@mixin selection {
    ::-moz-selection { @content; }
    ::selection { @content; }
}

@include selection {
    background: #54aa47;
}

html, body, main, header, nav, footer, ul, ol, div, h1, h2, h3, h4, h5, h6 {
	margin: 0;
	padding:0;
}

h1, h2, h3, h4, h5, h6 {
	font-family: 'Alex Brush', Helvetica, sans-serif;
	font-weight: 400;
}

body {
	background: linear-gradient(290deg, rgba(148,187,233,0.8813726174063375) 11%, rgba(174,238,181,0.9009804605435925) 100%);
/*	background: linear-gradient(90deg, #DAD299 10%, #B0DAB9 90%); OR linear-gradient(0deg, #61677B, #CA728F);
	background: linear-gradient(60deg, #DAD299, #B0DAB9);*/
	min-width: 320px;
}

#app {
	font-family: 'Roboto', sans-serif;
}

footer {
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: gray;
  opacity: 0.8;
	text-align: center;
	height: 30px;
	width: 100%;
	position: fixed;
	bottom: 0;
}

header {
	text-align:center;
	cursor: default;

	h1 {
		font-size: 2rem;
		padding-top: 5px;

		a {
			text-decoration: none;
			color: purple;

			&:hover {
				color: purple;
			}
		}
	}
}

main {
  max-width: 90%;
	min-height: 200px;
	clear: both;
	padding: 5px;
	margin: 0 auto 40px;

	p {
		font-size: 1.2rem;
	}
}

@media (min-width: $breakpoint-desktop) {
	header h1 {
		font-size: 3rem;
	}
}

.box {
	padding: 10px;
  margin: 5px;
	border: 2px solid #54aa47;
	border-radius: 10px;
}
</style>

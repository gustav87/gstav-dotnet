<template>
  
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  components: {
  }
})

export default class JsBasics extends Vue {
}
</script>

<style lang="scss" scoped>
#jsBasicsPage #box1, #jsBasicsPage .boxx {
	width: 200px; height: 150px; border: 1px solid black;
	display: none;
}
#jsBasicsPage #button1, #jsBasicsPage label {
	background: cyan; padding: 10px; width: 100px;
	cursor: pointer; margin-bottom: 30px;
}
#jsBasicsPage #button1:hover {
	background-color: blue; outline: 1px solid yellow;
}
#jsBasicsPage #button1:active + #box1{
	display: block;
}
#jsBasicsPage #lol {
	display: none;
}
#jsBasicsPage #lol:checked ~ .boxx {
	display: block;
}
#jsBasicsPage label:hover {
	background-color: green;
}
#jsBasicsPage nav ul li, #jsBasicsPage nav ul li a {
	width: 100%;
	overflow: hidden;
}

.red {
	color: red;
	background-color: blue;
}

#errorButton a:hover {
	background: teal;
	color:darkgrey;
}
#errorButton a {
	text-decoration: none;
	text-align: center;
	font-size: 1.4em;
	padding: 10px;
	background: lightblue;
	border-radius: 0 10px 10px 0;
	border: 1px solid black;
}
</style>


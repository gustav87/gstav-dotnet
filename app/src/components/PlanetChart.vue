<template>
  <div>
    <canvas id="myChart"></canvas>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import Chart from 'chart.js/auto';
import config from '../planet-data.js'
import w3 from '../w3-data.js'

@Component({
})

export default class PlanetChart extends Vue {
  gameDays = w3;
  config = config;

  mounted() {
    console.log(this.gameDays);
    const ctx = document.getElementById('myChart');
    const lolChart = new Chart(
      ctx,
      this.config
    );
  }
}
</script>

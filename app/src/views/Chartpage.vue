<template>
  <div class="about">
    <h1>Chart page!</h1>
    <div>
      <planet-chart/>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import PlanetChart from '../components/PlanetChart.vue'

@Component({
  components: { PlanetChart },
})

export default class Chartpage extends Vue {
}
</script>


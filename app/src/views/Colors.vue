<template>
  <main>
    <div class="flexContainer">
      <div :style="redStyle">{{redColor}}</div>
      <div :style="greenStyle">{{greenColor}}</div>
      <div :style="blueStyle">{{blueColor}}</div>
    </div>
    <div class="flexContainer">
      <div id="red" @mouseleave="stopInterval()" @mouseenter="startInterval('redColor', true)">Increase red</div>
      <div id="green" @mouseleave="stopInterval()" @mouseenter="startInterval('greenColor', true)">Increase green</div>
      <div id="blue" @mouseleave="stopInterval()" @mouseenter="startInterval('blueColor', true)">Increase blue</div>
    </div>
    <div class="flexContainer">
      <div class="whiteBox" @mouseleave="stopInterval()" @mouseenter="startInterval('redColor', false)">Decrease red</div>
      <div class="whiteBox" @mouseleave="stopInterval()" @mouseenter="startInterval('greenColor', false)">Decrease green</div>
      <div class="whiteBox" @mouseleave="stopInterval()" @mouseenter="startInterval('blueColor', false)">Decrease blue</div>
    </div>
    <div class="flexContainer">
      <div class="flexitem colorBucket" :style="bucketStyle">
        <span>Color bucket</span>
        <span>Color bucket</span>
        <span>Color bucket</span>
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
export default class Colors extends Vue {
  redColor = 0;
  greenColor = 0;
  blueColor = 0;
  redStyle = {background: "rgb(0,0,0)"};
  greenStyle = {background: "rgb(0,0,0)"};
  blueStyle = {background: "rgb(0,0,0)"};
  bucketStyle = {
    background: "rgb(0,0,0)",
    color: "rgb(255,255,255)"
  };
  bucketColor = 255;
  intervalID = 0;

  public startInterval(color: string, increase: boolean) {
    this.intervalID = setInterval(this.changeColor, 10, color, increase)
  }

  public changeColor(color: string, increase: boolean) {
    if ((increase && this[color] >= 255) || (!increase && this[color] <= 0)) {
      return
    }
    const increment = increase ? 1 : -1
    this[color] = this[color] + increment
    if (color == "redColor") {
      this.redStyle = {
        background: "rgb(" + String(this[color]) + ",0,0)"
      }
    } else if (color == "greenColor") {
      this.greenStyle = {
        background: "rgb(0," + String(this[color]) + ",0)"
      }
    } else {
      this.blueStyle = {
        background: "rgb(0,0," + String(this[color]) + ")"
      }
    }
    this.bucketColor = Math.floor(255 - ((this.redColor + this.greenColor + this.blueColor) / 3))
    this.bucketStyle = {
      background: "rgb(" + this.redColor + "," + this.greenColor + "," + this.blueColor + ")",
      color: "rgb(" + this.bucketColor + "," + this.bucketColor + "," + this.bucketColor + ")"
    }
  }

  public stopInterval() {
    clearInterval(this.intervalID);
  }
}
</script>

<style lang="scss" scoped>
main {
  color: white;
}

.flexContainer {
  display: flex;
  justify-content: stretch;

  > div {
    width: 100%;
    padding: 10px;
    margin: 10px;
  }
}

.colorBucket {
	display: flex;
	justify-content: space-around;
}

.whiteBox {
  background: white;
  color: black;
}

#red {
  background: red;
}

#green {
  background: green;
}

#blue {
  background: blue;
}
</style>


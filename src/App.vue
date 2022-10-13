<script setup>
import * as d3 from "d3";
import { onMounted, reactive, shallowRef, ref, watchEffect } from "vue";
import jiaojiangGeo from "./geojson/jiaojiang.json?raw";
// const width = ref(1000);
// const height = ref(1000);
const config = reactive({
  width: 750,
  height: 800,
  scale: 120000,
  center: "121.51, 28.68",
});

const feature = shallowRef(jiaojiangGeo);

const output = ref("");

onMounted(() => {
  watchEffect(() => render());
});

function render() {
  d3.select("#map").select("svg").remove();
  let { width, height, scale, center } = config;
  const featureInstance = JSON.parse(feature.value);
  var projection = d3
    .geoMercator()
    .center(center.split(","))
    .scale(scale)
    .translate([width / 2, height / 2]);
  const path = d3.geoPath(projection);
  var svg = d3
    .select("#map")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  svg
    .append("g")
    .selectAll("path")
    .data(featureInstance.features)
    .enter()
    .append("path")
    .attr("d", path);

  console.log(svg.html());
  output.value = document.querySelector("#map").innerHTML;
}

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <!-- <div class="flex"> -->
    <div class="w-min-[400px] space-y-4 fixed left-0 top-0">
      <div class="flex">
        <div class="w-[100px]">width</div>
        <input v-model="config.width" />
      </div>
      <div class="flex">
        <div class="w-[100px]">height</div>
        <input v-model="config.height" />
      </div>
      <div class="flex">
        <div class="w-[100px]">proj center</div>
        <input v-model="config.center" />
      </div>
      <div class="flex">
        <div class="w-[100px]">scale</div>
        <input v-model="config.scale" />
      </div>
      <div class="flex">
        <div class="w-[100px]">geojson</div>
        <textarea class="min-h-[500px] min-w-[250px]" v-model="feature" />
      </div>
    </div>
    <div id="map" class="flex justify-center items-center mx-[400px]"></div>
    <div class="w-[400px] fixed top-0 right-0">
      outPut
      <textarea class="w-full min-h-[500px]" readonly :value="output" />
    </div>
  <!-- </div> -->
</template>

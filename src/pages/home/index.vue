<template>
  <!-- <CompLine :chart-data="chartData" @chart-click="chartEvent"/> -->
  <!-- <CompBar :chart-data="chartData" @chart-click="chartEvent"/> -->
  <!-- <CompPie :chart-data="chartData" @chart-click="chartEvent"/> -->
  <!-- <CompStackedLine :chart-data="chartData" :lineLegend="lineLegend" :labels="labels" @chart-click="chartEvent"/> -->
  <CompDataZoom :chart-data="chartData" @chart-click="chartEvent" />
</template>

<script setup lang="ts">
const chartData = [
  { name: "1月", value: 62 },
  { name: "2月", value: 87 },
  { name: "3月", value: 433 },
  { name: "4月", value: 73 },
  { name: "5月", value: 123 },
  { name: "6月", value: 241 },
  { name: "7月", value: 231 },
  { name: "8月", value: 321 },
  { name: "9月", value: 89 },
  { name: "10月", value: 23 },
  { name: "11月", value: 521 },
  { name: "12月", value: 712 },
];

// CompStackedLine
// const chartData=[[12,23,43,54],[43,12,63,27],[63,86,,33]]
// const lineLegend=['jhon','anan','sam']
// const labels=['1月','2月','3月','4月']
function chartEvent(item) {
  console.log(item);
}
</script>

<style lang="less"></style>

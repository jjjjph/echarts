<template>
  <!-- <CompLine :chart-data="chartData" @chart-click="chartEvent"/> -->
  <!-- <CompBar :chart-data="chartData" @chart-click="chartEvent"/> -->
  <!-- <CompPie :chart-data="chartData" @chart-click="chartEvent"/> -->
  <!-- <CompStackedLine :chart-data="chartData" :lineLegend="lineLegend" :labels="labels" @chart-click="chartEvent"/> -->
  <!-- <CompDataZoom :chart-data="chartData" @chart-click="chartEvent" /> -->
  <!-- <CompToolTip
    :chart-data="chartData"
    :tooltip-formater="tooltipFormater"
    @chart-click="chartEvent"
  /> -->
  <TypeBar :chart-data="chartData" :legend="lineLegend" :labels="labels" bar-width="12" bar-unit="分"/>
</template>

<script setup lang="ts">
// const chartData = [
//   { name: "1月", value: 62, subject: "math" },
//     { name: "2月", value: 87, subject: "math" },
//     { name: "3月", value: 433, subject: "math" },
//     { name: "4月", value: 73, subject: "math" },
//     { name: "5月", value: 123, subject: "math" },
//     { name: "6月", value: 241, subject: "math" },
//     { name: "7月", value: 231, subject: "math" },
//     { name: "8月", value: 321, subject: "math" },
//     { name: "9月", value: 89, subject: "math" },
//     { name: "10月", value: 23, subject: "math" },
//     { name: "11月", value: 521, subject: "math" },
//     { name: "12月", value: 712, subject: "math" },
// ];
// const chartData=[{value: 62, name: "math",unit:'分' },{value: 23 ,name: "chiness",unit:'分'},{value: 336 ,name: "art",unit:'分'}]

// CompStackedLine TypeBar
const chartData = [
  [
    { name: "1月", value: 62, subject: "math" },
    { name: "2月", value: 87, subject: "math" },
    { name: "3月", value: 433, subject: "math" },
    { name: "4月", value: 73, subject: "math" },
    { name: "5月", value: 123, subject: "math" },
    { name: "6月", value: 241, subject: "math" },
    { name: "7月", value: 231, subject: "math" },
    { name: "8月", value: 321, subject: "math" },
    { name: "9月", value: 89, subject: "math" },
    { name: "10月", value: 23, subject: "math" },
    { name: "11月", value: 521, subject: "math" },
    { name: "12月", value: 712, subject: "math" },
  ],
  [
    { name: "1月", value: 62,subject: "chiness"  },
    { name: "2月", value: 43 ,subject: "chiness" },
    { name: "3月", value: 523 ,subject: "chiness" },
    { name: "4月", value: 54 ,subject: "chiness" },
    { name: "5月", value: 43 ,subject: "chiness" },
    { name: "6月", value: 241 ,subject: "chiness" },
    { name: "7月", value: 765 ,subject: "chiness" },
    { name: "8月", value: 234 ,subject: "chiness" },
    { name: "9月", value: 89 ,subject: "chiness" },
    { name: "10月", value: 23 ,subject: "chiness" },
    { name: "11月", value: 34 ,subject: "chiness" },
    { name: "12月", value: 839 ,subject: "chiness" },
  ],
  [
    { name: "1月", value: 93 ,subject: "art" },
    { name: "2月", value: 74 ,subject: "art" },
    { name: "3月", value: 937 ,subject: "art" },
    { name: "4月", value: 632 ,subject: "art" },
    { name: "5月", value: 262 ,subject: "art" },
    { name: "6月", value: 45 ,subject: "art" },
    { name: "7月", value: 854 ,subject: "art" },
    { name: "8月", value: 833 ,subject: "art" },
    { name: "9月", value: 62 ,subject: "art" },
    { name: "10月", value: 421 ,subject: "art" },
    { name: "11月", value: 443 ,subject: "art" },
    { name: "12月", value: 336 ,subject: "art" },
  ],
];
const lineLegend = ["jhon", "anan", "sam"];
const labels = [
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
];
function chartEvent(item) {
  console.log(item);
}
const tooltipFormater = (e) => {
  const data = e.data;
  return `${data.name}：${data.value}${data.unit}`;
};
</script>

<style lang="less"></style>

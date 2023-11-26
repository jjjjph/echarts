<template>
  <!-- <CompLine :chart-data="chartData" @chart-click="chartEvent"/> -->
  <!-- <CompBar :chart-data="chartData" @chart-click="chartEvent"/> -->
  <!-- <CompPie :chart-data="chartData" @chart-click="chartEvent"/> -->
  <CompStackedLine :chart-data="chartData" :lineLegend="lineLegend" :labels="labels" @chart-click="chartEvent"/>

</template>

<script setup lang="ts">
// const chartData=[{name:'1月',value:12},{name:'2月',value:33},{name:'3月',value:73}]
const chartData=[[12,23,43,54],[43,12,63,27],[63,86,,33]]
const lineLegend=['jhon','anan','sam']
const labels=['1月','2月','3月','4月']
function chartEvent(item){
  console.log(item);

}
</script>

<style lang="less">

</style>

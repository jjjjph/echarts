<template>
  <!-- <CompLine :chart-data="chartData" @chart-click="chartEvent"/> -->
  <!-- <CompBar :chart-data="chartData" @chart-click="chartEvent"/> -->
  <CompPie :chart-data="chartData" @chart-click="chartEvent"/>

</template>

<script setup lang="ts">
const chartData=[{name:'1月',value:12},{name:'2月',value:33},{name:'3月',value:73}]
function chartEvent(item){
  console.log(item);

}
</script>

<style lang="less">

</style>

<template>
  <div class="box"><div ref="node" class="chart-box"></div></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import echarts from "echarts";
const node = ref(null);
const props = defineProps({
  chartData: { type: Array, default: () => [] }, //数据
  formatter: { type: Function, default: null},
});
const emit = defineEmits();

onMounted(function () {
  const chart = echarts.init(node.value as unknown as HTMLDivElement);
  var option: Object = {
    title: {
      text: "饼图",
      textStyle: {
        align: "center",
        color: "#333",
        fontSize: 20,
      },
      top: "5%",
      left: "center",
    },
    grid: {
      top: "10%",
      left: "10%",
    },
    legend: {
      type: "scroll",
      left: "right", //位于容器右边
      orient: "vertical", //图例垂直排列
      align: "left",
      selected: { "1月": false }, //图形打开时，1月数据不显示
      itemWidth: 25, //图例宽度
      itemHeight: 15, //图例高度
      itemGap: 16, //图例间隔
      textStyle: {
        //文本样式
        color: "#333",
        fontSize: 16,
      },
      formatter: (name) => { //自定义图例文本
        const filterDataValue = props.chartData.find(
          (item) => item.name === name
        ).value;
        return props.formatter
          ? `${name} ${props.formatter(filterDataValue)}`
          : `${name} ${filterDataValue}`;
      },
    },
    series: [
      {
        data: props.chartData,
        type: "pie", //饼图
      },
    ],
  };

  chart.setOption(option);
  //图标点击事件
  chart.on("click", (param) => {
    // 获取 点击的 数据下标
    const pointInPixel = param.dataIndex;

    emit("chart-click", { name: props.chartData[pointInPixel] });
  });
});
</script>

<style lang="less">
.box {
  width: 800px;
  height: 100%;
  padding: 24px;
}
.chart-box {
  display: block;
  width: 100%;
  height: 100%;
}
</style>

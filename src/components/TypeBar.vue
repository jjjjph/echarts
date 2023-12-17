<template>
  <div class="box"><div ref="node" class="chart-box"></div></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import echarts from "echarts";
const node = ref(null);
const props = defineProps({
  chartData: { type: Array, default: () => [] }, //数据
  barWidth: { type: Number, default: 24 }, //设置柱形宽度
  labels: { type: Array, default: () => [] },
  legend: { type: Array, default: () => [] },
  barUnit: { type: String, default: "" }, //y轴数据单位
});
const emit = defineEmits();

const barColors = [
  {
    type: "linear",
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [
      {
        offset: 0,
        color: "#25A6FF", // 0% 处的颜色
      },
      {
        offset: 1,
        color: "rgba(37, 166, 255, 0)", // 100% 处的颜色
      },
    ],
  },
  {
    type: "linear",
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [
      {
        offset: 0,
        color: "rgba(13, 224, 157, 1)", // 0% 处的颜色
      },
      {
        offset: 1,
        color: "rgba(13, 224, 157, 0)", // 100% 处的颜色
      },
    ],
  },
  {
    type: "linear",
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [
      { offset: 0, color: "#F37851" },
      { offset: 1, color: "rgba(243, 120, 81, 0.00)" },
    ],
  },
];

onMounted(function () {
  const chart = echarts.init(node.value as unknown as HTMLDivElement);
  var option: Object = {
    title: {
      text: "柱状图",
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
    tooltip: {
      show: true,
      trigger: "axis",
      // axisPointer: {
      //   type: "shadow",
      // },
    },
    legend: {
      show: true,
    },
    xAxis: {
      type: "category", //x轴为类目轴
      data: props.labels,
      axisLabel:{
        inside:false, //刻度标签是否朝内，默认朝外
        rotate:25,  //刻度标签旋转角度
      },
      axisPointer:{
        show:true,
        type:'shadow',
      }
    },

    yAxis: {
      type: "value", //y轴为数据轴
      name: props.barUnit, //y轴的名字
    },
    series: [
      ...props.chartData.map((item, index) => ({
        data: item,
        name: props.legend[index],
        type: "bar", //柱状图
        barWidth: props.barWidth,
        itemStyle: {
          color: barColors[index],
        },
      })),
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

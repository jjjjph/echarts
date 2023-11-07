<template>
  <div class="box"><div ref="node" class="chart-box"></div></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import echarts from "echarts";
const node = ref(null);
const props = defineProps({
  chartData: { type: Array, default: () => [] }, //数据
  axisLabelConfig: { type: Object, default: () => {} }, //坐标轴刻度标签设置
  dataZoom: { type: Boolean, default: true }, //是否可以滑动
  tooltipConfig: { type: Object, default: () => ({}) }, //提示框设置
});
onMounted(function () {
  const chart = echarts.init(node.value);
  var option: Object = {
    title: {
      text: "折线图",
      textStyle: {
        align: "center",
        color: "#fff",
        fontSize: 20,
      },
      top: "5%",
      left: "center",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(0, 255, 233,0)",
              },
              {
                offset: 0.5,
                color: "rgba(255, 255, 255,1)",
              },
              {
                offset: 1,
                color: "rgba(0, 255, 233,0)",
              },
            ],
            global: false,
          },
        },
      },
      ...props.tooltipConfig,
    },
    grid: {
      top: "15%",
      left: "5%",
      right: "5%",
      bottom: "15%",
      containLabel: true,
    },
    dataZoom: props.dataZoom
      ? [
          {
            type: "slider",
            zoomLock: true,
            show: true,
            brushSelect: false,
            showDataShadow: false,
            height: 20,
            xAxisIndex: [0],
            start: 0,
            end:
              props.chartData.length > 5
                ? (5 / props.chartData.length) * 100
                : 100,
            bottom: 10,
            fillerColor: "rgba(37, 166, 255, 0.5)",
            filterMode: "empty",
          },
        ]
      : [],
    xAxis: {
      type: "category",
      axisLabel: {
        show: true,
        interval: 0,
        rotate: 0,
        fontSize: 12,
        fontWeight: 500,
        color: "#ffffff",
        ...props.axisLabelConfig,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#ffffff",
          width: 0.5,
        },
      },
      data: props.chartData.map((item) => item?.name),
    },

    yAxis: {
      type: "value",
      splitNumber: 3,
      axisLabel: {
        show: true,
        fontSize: 12,
        fontWeight: 400,
        color: "#fff",
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          color: "rgba(255,255,255,1)",
          width: 0.5,
        },
      },
    },
    series: [
      {
        data: props.chartData.map((item) => item.value),
        type: "line",
        symbolSize: 6, //折线点的大小
        smooth: false,
        itemStyle: {
          color: "#24EBE9",
          shadowColor: "#5cfbff",
          shadowBlur: 20,
        },
        label: {
          show: true,
          position: "top",
          fontSize: 16,
          fontFamily: "D-DIN",
          fontWeight: 500,
          color: "#FFFFFF",
        },
        lineStyle: {
          shadowColor: "#24EBE9",
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
          shadowBlur: 8,
          type: "solid",
          width: 3,
        },
      },
    ],
  };

  chart.setOption(option);
  chart.getZr().on("click", (param) => {
    // 获取 点击的 触发点像素坐标
    const pointInPixel = [param.offsetX, param.offsetY];
    // 判断给定的点是否在指定的坐标系或者系列上
    if (chart.containPixel("grid", pointInPixel)) {
      // 获取到点击的 x轴 下标  转换为逻辑坐标
      const xIndex = chart.convertFromPixel(
        { seriesIndex: 0 },
        pointInPixel
      )[0];
      this.$emit("chart-click", { name: this.chartData[xIndex].name });
    }
  });
});
</script>

<style lang="less">
.box {
  width: 800px;
  height: 100%;
  background-color: #080b30;
  padding: 24px;
}
.chart-box {
  display: block;
  width: 100%;
  height: 100%;
}
</style>

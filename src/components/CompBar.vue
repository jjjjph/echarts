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
});
const emit = defineEmits();

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
      // right: "center",
      // bottom: "middle",
    },
    xAxis: {
      type: "category", //x轴为类目轴
      data: props.chartData.map((item) => item?.name),
    },

    yAxis: {
      type: "value", //y轴为数据轴
    },
    series: [
      {
        data: props.chartData.map((item) => item.value),
        type: "bar", //柱状图
        barWidth: props.barWidth,
        color: {
          //柱状颜色
          type: "linear", //线性渐变.  radial:径向渐变
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,   //x、y、x2、y2，范围从 0 - 1，相当于在图形包围盒中的百分比
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

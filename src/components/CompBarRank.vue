<template>
  <div class="box"><div ref="node" class="chart-box"></div></div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import echarts from "echarts";
const node = ref(null);
const props = defineProps({
  chartData: { type: Array, default: () => [] }, //数据
});
const emit = defineEmits();


onMounted(function () {
  const chart = echarts.init(node.value as unknown as HTMLDivElement);
  var option: Object = {
    title: {
      text: "柱状排名图",
      textStyle: {
        align: "center",
        color: "#fff",
        fontSize: 20,
      },
      top: "5%",
      left: "center",
    },
    grid: {
      top: "10%",
      left: "10%",
    },
    xAxis: {
      type: "value", //x轴为数据轴
      axisLabel: {
        //坐标轴刻度标签的设置
        show: false,
      },
      axisTick: {
        //坐标轴刻度的设置
        show: false,
      },
      axisLine: {
        //坐标轴轴线的设置
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    yAxis: [
      {
        type: "category", //y轴为类目轴
        inverse:true, //反向坐标轴
        axisLabel: {
          //坐标轴刻度标签的设置
          show: false,
        },
        axisTick: {
          //坐标轴刻度的设置
          show: false,
        },
        axisLine: {
          //坐标轴轴线的设置
          show: false,
        },
        data: props.chartData.map((item) => item?.name),
      },
      {
        type: "category",
        inverse:true,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: true,
          // inside: false,
          verticalAlign: "center",
          lineHeight: "40",
          textStyle: {
            color: "#fff",
            fontSize: "14",
            fontFamily: "PingFangSC-Regular",
          },
          formatter: function (val) {
            return `${val}`;
          },
        },
        splitArea: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        data: props.chartData,
      },
    ],
    series: [
      {
        name: "value",
        type: "bar",
        barGap: "-100%",
        data: props.chartData,
        zlevel: 1,
        barWidth: 8,
      },
      {
        name: "排名",
        type: "bar",
        barWidth: 8,
        barGap: "-100%",
        data: props.chartData,
        itemStyle: {
          color: "rgba(255, 255, 255, 0.10)",
          borderRadius: 0,
        },
        label: {
          //图形上的w文本标签
          show: true,
          fontSize: 14,
          position: "insideBottomLeft",
          padding: [0, 0, 8, 0],
          rich: {
            text: {
              fontSize: 12,
              fontWeight: 400,
              color: "rgba(255, 255, 255, 0.80)",
            },
            name: {
              fontSize: 12,
              fontWeight: 400,
              color: "#fff",
            },
          },
          formatter(data) {

            const { dataIndex, name } = data;

            return `{text|NO.${dataIndex + 1}}  {name|${name}}`;
          },
        },
      },
      // {
      //   name: "value",
      //   type: "bar",
      //   barWidth: 4,
      //   zlevel: 2,
      //   barGap: "-100%",
      //   data: props.chartData,
      //   padding: [0, 0, 20, 0],
      //   itemStyle: {
      //     color: "transparent",
      //     borderRadius: 8,
      //   },
      //   label: {
      //     //图形上的w文本标签
      //     show: true,
      //     fontSize: 14,
      //     position: "right",
      //     offset: [10, -10],
      //     // normal: {
      //     //   color: "#b3ccf8",
      //     //   show: true,
      //     //   position: [0, "-24px"],
      //     //   textStyle: {
      //     //     fontSize: 14,
      //     //   },
      //     // },
      //     rich: {
      //       text: {
      //         fontSize: 14,
      //         fontWeight: 400,
      //         color: "rgba(255, 255, 255, 1)",
      //       },
      //       name: {
      //         fontSize: 14,
      //         fontWeight: 400,
      //         color: "#fff",
      //       },
      //     },
      //     formatter(data) {
      //       const { value } = data;

      //       return `{text|${value}}`;
      //     },
      //   },
      // },
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
  background-color: black;
}
.chart-box {
  display: block;
  width: 100%;
  height: 100%;
}
</style>

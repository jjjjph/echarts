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
      text: "DataZoom",
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
      },
    ],
    dataZoom: [
      // {
      //   type: "inside", //内置在坐标系中
      //   filterMode: "weakfilter", //根据窗口显示的数据，y轴的数据会改变
      //   show: props.chartData.length > 5, //数据长度大于5就出现datazoom.type:'insider'
      //   start: 0, //窗口展示的起始
      //   end:
      //     props.chartData.length > 5 ? (5 / props.chartData.length) * 100 : 100, //窗口展示数据的结束范围
      //   orient: "horizontal", //为vertical时，控制的是垂直方向上的缩放
      // },
      {
        type:'slider',
        show: props.chartData.length > 10, //数据太多就出现datazoom.type:'slider'
        start: 0, //窗口展示的起始
        end:
          props.chartData.length > 8 ? (8 / props.chartData.length) * 100 : 100, //窗口展示数据的结束范围
        filterMode: "weakfilter",
        textStyle:{
          color: 'rgba(193, 17, 17, 1)',
        },
        // selectedDataBackground:{ //选中部分数据阴影的样式.v5.5.0开始支持
        //   areaStyle:{ // 选中区域样式
        //     color:'rgba(170, 20, 20, 1)'
        //   },
        //   lineStyle:{
        //     color:'rgba(9, 210, 19, 1)'
        //   }
        // },
        fillerColor:'rgba(77, 204, 23, 0.4)',
        realtime:false,//拖拽不实时更新视图
      }
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

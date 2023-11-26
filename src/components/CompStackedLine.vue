<template>
  <div class="box"><div ref="node" class="chart-box"></div></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import echarts from "echarts";
const node = ref(null);
const props = defineProps({
  chartData: { type: Array, default: () => [] }, //数据
  lineLegend: { type: Array, default: () => [] }, //折线的标签
  labels: { type: Array, default: () => [] }, //x轴data
});
const emit = defineEmits();

onMounted(function () {
  const chart = echarts.init(node.value as unknown as HTMLDivElement);
  var option: Object = {
    title: {
      text: "折线图堆叠",
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
      show: true,
      data: props.lineLegend
    },
    xAxis: {
      type: "category", //x轴为类目轴
      data: props.labels,
      name:'月份',  // x轴的名称
      nameLocation:'center', //名称的位置
      nameTextStyle:{
        color:'rgba(139, 35, 35, 1)',
        fontSize:16,
        padding:10,
      },
      position:'bottom',//top,x轴的位置
    },

    yAxis: {
      type: "value", //y轴为数据轴
      splitNumber:5, //坐标轴的分割段数
    },
    series: [
      ...props.chartData.map((item, index) => ({
        type: "line", //折线图
        name: props.lineLegend[index], //用于tooltip的显示，每条折线对应的标签
        data: item,
        // areaStyle:{},//区域填充样式。设置后显示成区域面积图
        symbol:'circle', //标记的图形
        symbolSize:8, //标记的大小
        legendHoverLink:true, //hover标签，对应的线联动高亮
        connectNulls:false, //没有数据的折线断开
        // 图形上的文本标签
        label:{
          show:true,
          position:'left'
        }
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

# title 标题

```
  1.top\bottom\left\right，title 组件离容器的距离。值可以为数字（具体像素）、百分比、字符串（left\right\center\top\bottom\middle
  2.textStyle，设置文本样式
  3.subtext：副标题
```
# legend 图例
### type
```
  1.type:plain 普通图例
  2.type:scroll 可滚动翻页的图例
  3.type:scroll时才生效的配置：
    a.pageButtonPosition ,控制分页按钮的位置。pageButtonPosition:'start'/'end'
    b.pageButtonGap。图例控制块和图例项之间的间隔。值为数字
    c.pageButtonItemGap.按钮和页信息之间的间隔。值为数字
    d.pageTextStyle .图例页信息的文字样式
```

```
  1.位置：top、left、right、bottom，值可以为数字（具体像素）、百分比、字符串（left\right\center\top\bottom\middle）
  2.图例列表布局：orient:'horizontal'(水平)/'vertical'(垂直)
  3.图例标记和文本的对齐：align:'right'/'left'/'auto'
  4.itemGap、itemWidth、itemHeigh。用于设置图例标记的间隔，宽度，高度
  5.itemStyle，用于设置图例的图形样式
  6.lineStyle,用于设置图例为线性的样式
  7.selectedMode。用于控制是否可以通过点击图例来显示对应系列的状态，默认为true。selectedMode:true/false/single(单选)/multiple(多选)
  8.selected。图例选中状态表。selected:{系列1:true,系列2:false}(图形打开时，默认系列1选中，系列2未选中)
  9.textStyle：图例文本样式
```


# grid

## 直角坐标系内绘图网格

```
  top\bottom\left\right的值可以为数字、百分比、字符串
  1.数字的单位为像素
  2.百分比为相对于容器宽高的百分比
  3.如果left的值为'left', 'center', 'right'，组件会根据相应的位置自动对齐。
    如果top的值为'top', 'middle', 'bottom'，组件会根据相应的位置自动对齐。
```

## 刻度标签 containLabel

```
  1.grid 区域是否包含坐标轴的刻度标签。常用于『防止标签溢出』的场景
  2.containLabel：false,决定的是由坐标轴形成的矩形的尺寸和位置。常用于多个 grid 进行对齐的场景，因为往往多个 grid 对齐的时候，是依据坐标轴来对齐的。
  3.containLabel：true,决定的是包括了坐标轴标签在内的所有内容所形成的矩形的位置。
```
# xAxis 直角坐标系 grid 中的 x 轴 / yAxis 直角坐标系 grid 中的 y 轴

```
  1.type:'value',数值轴
    type:'category' 类目轴,
    type:'time' 时间轴,
    type:'log' 对数轴
  2.name:string.x轴的名字。nameLocation:'end'/'center'/'middle'/'start',名字的位置。nameTextStyle:{},坐标轴名称文字样式
  3.min:坐标轴的最小刻度。可以设置成特殊值 'dataMin'，此时取数据在该轴上的最小值作为最小刻度
    max:坐标轴的最大刻度。可以设置成特殊值 'dataMax'，此时取数据在该轴上的最大值作为最大刻度
  4.axisLine:坐标轴轴线相关设置。 axisTick:坐标轴刻度相关设置。
  5.nameRotate:number.坐标轴名称旋转
  6.inverse:true,反向坐标轴。
  7.position:top/bottom ,x轴的位置
  8.aliginTicks:在多个 x 轴为数值轴的时候，可以开启该配置项自动对齐刻度。只对'value'和'log'类型的轴有效
  9.data:单个类目名称。
  10.splitNumber :坐标轴的分割段数.需要注意的是这个分割段数只是个预估值，最后实际显示的段数会在这个基础上根据分割后坐标轴刻度显示的易读程度作调整。
```

# series

### type:'line'
```
  1.name,系列名称，用于tooltip的显示,
  2.areaStyle:{},区域填充样式。设置后显示成区域面积图
  3. symbol:'arrow'/'circle'/'rect'/'roundRect'/'triangle'/'diamond'/'pin'/'none' ，标记的图形 。可以设置图片:'image://url',
      可以通过'path://' 将图标设置为任意的矢量路径.
  4.symbolRotate，图标的旋转角度
  5.showSymbol，默认true,如果 false 则只有在 tooltip hover 的时候显示
  6.legendHoverLink,是否启用图例 hover 时的联动高亮。
  7.connectNulls，是否连接空数据，如果数据中有一个空缺，设置为true折线不会断开，false折线断开
  8.triggerLineEvent: true, //线条和区域是否触发事件
  9.label.图形上的文本标签
    a.show:true
    b.position,位置。top / left / right / bottom / inside / insideLeft / insideRight / insideTop / insideBottom / insideTopLeft /   insideBottomLeft / insideTopRight / insideBottomRight。可以为数组，数组里为数字则为像素，百分比为相对百分比
    c.distance，距离图形元素的距离。当position为字符串时有效
    d.offset:[x轴，y轴].是否对文字进行偏移.
```

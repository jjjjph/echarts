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

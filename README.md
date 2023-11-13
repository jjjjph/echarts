# title 标题

```
  top\bottom\left\right，title 组件离容器的距离。值可以为数字（具体像素）、百分比、字符串（left\right\center\top\bottom\middle
  textStyle，设置文本样式
  subtext：副标题
```

### type

```
  type:plain 普通图例
  type:scroll 可滚动翻页的图例
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

## 刻度标签

```
  containLabel
  grid 区域是否包含坐标轴的刻度标签。常用于『防止标签溢出』的场景
  containLabel：false,决定的是由坐标轴形成的矩形的尺寸和位置。常用于多个 grid 进行对齐的场景，因为往往多个 grid 对齐的时候，是依据坐标轴来对齐的。
  containLabel：true,决定的是包括了坐标轴标签在内的所有内容所形成的矩形的位置。
```

---
title: 用 CSS 動畫讓網頁活起來
date: "2019-03-04T22:40:32.169Z"
description: 本文帶你初探 CSS 互動和動畫。
difficulty: 簡單
---

只要用一點簡單的 CSS 就能產生美美的互動效果以及動畫。

`transition-property`: 定義哪些 properties 會被轉場效果影響。
`transition-duration`: 定義 transition 執行的時間。
`transition-time-function`: 有以下這幾種，預設為 ease-out。

- linear
- ease 快入緩出
- ease-in 緩入
- ease-out 緩出
- ease-in-out 緩入緩出
- cubic-bezier (自行定義)

`transition-delay`: 延遲執行時間。

### Transform

控制 element 讓他們可以**伸縮**、**旋轉**、**移動**、**歪斜**等。

- rotate(θ)
- skew(θx,θy)

角度需有單位，可以是 deg(角度), rad(弧度), grad(梯度)

- scale(mx,my)
- translate(ox,oy)

m 不需有單位，而 o 需為合法的尺寸值或百分比
而 transform 的基準預設為正中心(50% 50%)，也可自行調整：`transform-origin: x y`;

### Animation

利用**keyframe**的組合來形成動畫。
keyframe 寫法如下:

```css=
@keyframes name {
  from {
    ...;
  }
  to {
    ...;
  }
}
```

或者是也可用百分比來表示：

```css=
@keyframes name {
  0% {
    ...;
  }
  50% {
    ...;
  }
  100% {
    ...;
  }
}
```

特別要注意的是，如果開頭結尾沒有特別定義，則程式會自動演算。如果重複寫了兩個相同的百分比，裡面**相同的屬性會由後者覆蓋前者**，不同的屬性則會都顯示出來。

properties:

- `animation-name`
  - 如果同名，以後面的為主
  - 大小寫有區別
- `animation-duration`
- `animation-delay`
  - 可以設為負值(**快轉**的概念)
- `animation-iteration-count`: 動畫播放次數(預設為 1，也可設為 infinite)
- `animation-timing-function`: (預設為 ease)
- `animation-direction`: 動畫播放方向
  - normal(預設): 從 0% 到 100%
  - reverse: 從 100% 到 0%
  - alternate: 正反轉輪流播放，奇數次為 0% 到 100%，偶數次為 100% 到 0%
  - alternate-reverse: 奇數次為 100% 到 0%，偶數次為 0% 到 100%
- `animation-fill-mode`: 動畫播放前後模式
  - none(預設): 結束後返回原始狀態
  - forwards: 結束後保持在**最後一個**影格狀態
  - backwards: 結束後保持在**第一個**影格狀態
  - both: 依據動畫的次數或方向，保持在第一個或最後一個影格狀態
- `animation-play-state`：(預設為 running，也可設為 paused)

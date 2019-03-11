---
title: CSS 基礎
date: "2019-03-02T22:40:32.169Z"
description: 想要搞懂 CSS 這些觀念一個都不能少。
difficulty: 入門
---

本篇教學適合剛接觸網頁排版的人，我會在教學中提及重要的基礎，了解後網頁基本的 Layout 以及樣式修改就不是問題囉！

# 前情提要

網頁的骨架由 HTML 組成， CSS 就像是器官、外觀，Javascript 則是大腦，在此著重 CSS 的介紹。

HTML Tag 有很多種如 `div`、`span` 等等，而最常看到的是 `div`，因為他幾乎沒有預設的 CSS 屬性，很適合作為基本的元素拿來修改樣式。

下方的 HTML 不經過 CSS 修飾會如框框內顯示，`b` 標籤就是一個擁有預設粗體屬性的 tag ，(為了方便觀看我加了一個外框)

```html
<div><b>Hello</b> <span>world!</span></div>
```

<div style="border: 1px solid black; padding: 10px; margin-bottom: 50px;">
<div>
  <b>Hello</b> <span>world!</span>
</div>
</div>

## display 屬性

`display` 屬性代表一個元素的顯示方式，例如 `div` 的預設 `display` 屬性值就是 `block`，`span` 就是 `inline` ，也可以透過 CSS 直接修改。

看看範例：

```html
<div>我是 div</div>
<div>我是 div 2</div>
<span>我是 span</span>
<span>我是 span 2</span>
```

<div style="border: 1px solid black; padding: 10px; margin-bottom: 20px;">
<div>我是 div</div>
<div>我是 div 2</div>
<span>我是 span</span>
<span>我是 span 2</span>
</div>

仔細看的話會發現，為甚麼 `div` 換行了，`span` 卻沒有？原因就是 `display: block;` 會自動占滿一列的區域，顧名思義為「區塊」， `span` 則是行內元素 `display: inline;` 所以只佔有內容長度的空間。

試試放上背景顏色：
`div` 加上 `background-color: pink;`，`span` 加上 `background-color: orange;` ，就能看清楚他們實際上佔有的空間。

<div style="border: 1px solid black; padding: 10px; margin-bottom: 20px;">
<div style="background-color: pink;">我是 div</div>
<div style="background-color: pink;">我是 div 2</div>
<span style="background-color: orange;">我是 span</span>
<span style="background-color: orange;">我是 span 2</span>
</div>

剛剛有提到可以手動修改 `display` 屬性，把一號 `div` 改為 `display: inline;`，二號 `span` 改為 `display: block;`

<div style="border: 1px solid black; padding: 10px; margin-bottom: 20px;">
<div style="background-color: pink; display: inline;">我是 div</div>
<div style="background-color: pink;">我是 div 2</div>
<span style="background-color: orange;">我是 span</span>
<span style="background-color: orange; display: block;">我是 span 2</span>
</div>

`display`屬性還有許多種類如：

- `inline-block`: 兼有兩種特性
- `none`: 不顯示也不加入排版 (如同移除元素)
- `flex`: 排版神器，文末會簡單提及
- `grid`: 更神的神器，但較難，此教學不提

## Box Model

每個 HTML Tag (以下稱元素) 的顯示及大小都基於 box model，總共有四層，由外到內分別是：

- `margin`: 外距，與其他元素的距離
- `border`: 邊框，樣式、寬度
- `padding`: 內距，邊框與內容的距離
- `content`: 內容
  <div style="border: 1px dashed black; margin-bottom: 20px; width: 262px">
    <div style="position: relative; margin: 30px; border: 30px solid #ffc107; padding: 30px; background-color: #7ac17a;">
      <div style="background-color: #7d99ff; width: 80px; text-align: center; line-height: 30px;">
        內容
      </div>
      <div style="position: absolute; text-align: center; line-height: 30px; width: 80px; top: 0px">
       內距
      </div>
      <div style="position: absolute; text-align: center; line-height: 50px; width: 80px; top: -40px">
       邊框
      </div>
      <div style="position: absolute; text-align: center; line-height: 50px; width: 80px; top: -70px">
       外距
      </div>
    </div>
  </div>

再拿剛剛的東西來改，一號 `div` 加上 `padding-top: 20px;`，上方的內距為 20px，元素上方被內距撐開所以變寬了。

<div style="border: 1px solid black; padding: 10px; margin-bottom: 20px;">
<div style="background-color: pink; padding-top: 20px;">我是 div</div>
<div style="background-color: pink;">我是 div 2</div>
</div>

試著把二號 `div` 加上 `margin: 20px;`，他就會被往內擠 20px。

<div style="border: 1px solid black; padding: 10px; margin-bottom: 20px;">
<div style="background-color: pink; padding-top: 20px;">我是 div</div>
<div style="background-color: pink; margin: 20px;">我是 div 2</div>
</div>

再把二號 `div` 加上 `border: 5px solid red;`，就有 5px、實心、紅色的邊框。

<div style="border: 1px solid black; padding: 10px; margin-bottom: 20px;">
<div style="background-color: pink; padding-top: 20px;">我是 div</div>
<div style="background-color: pink; margin: 20px; border: 5px solid red;">我是 div 2</div>
</div>

注意 `div` 有設定背景顏色，而背景只包含邊框之內的範圍。

## box-sizing 屬性

如果讓元素有固定的長寬，就要設定 `width`、`height` 屬性來改變內容長寬，然而若給一個元素 100px 的`width`、`height`，再給他 30px 的內距、30px 的邊框，請問元素總寬為何？

答案是 100 + 60 + 60 = 220 px。

<div style="margin-bottom: 20px; width: 220px">
  <div style="position: relative; border: 30px solid #ffc107; padding: 30px; background-color: #7ac17a;">
    <div style="background-color: #7d99ff; width: 100px; text-align: center; line-height: 100px;">
      內容 100px
    </div>
    <div style="position: absolute; text-align: center; line-height: 30px; width: 100px; top: 0px">
     內距 30px
    </div>
    <div style="position: absolute; text-align: center; line-height: 30px; width: 100px; top: -30px">
     邊框 30px
    </div>
  </div>
</div>

什麼？我只是想讓他有個固定大小阿！
若總大小固定，不就要一直手動計算內容、內距、邊框的寬度了嗎？

當然不用

預設的 `box-sizing` 值為 `content-box`，意味長寬是設定是給 content，但我們想要給包含 border 在內的總大小，所以要把 `box-sizing` 設為 `border-box`

```css
box-sizing: border-box;
border: 30px solid red;
background-color: pink;
padding: 30px;
width: 200px;
height: 200px;
```

<div style="border: 1px solid black; padding: 10px; margin-bottom: 20px;">
<div style="box-sizing: border-box;
border: 30px solid red;
background-color: pink;
padding: 30px;
width: 200px;
height: 200px;">我是 div</div>
</div>

注意總長寬為 200px，且內容文字與邊框有 30px 的距離，內容長寬則自動計算為 200 - 60 - 60 = 80px，是不是愜意許多阿～

## position 屬性

所有元素預設的 `position` 都是 `static`，也叫做非定位元素，其餘的值都是定位元素，主要用途為排版以及位置設定。

接下來的範例都以此為基礎修改，outer 代表外面的 `div`，inner 則為裡面。

```html
<div class="outer">
  <div class="inner">
    我是 div
  </div>
</div>
```

```css
.outer {
  border: 1px solid black;
  padding: 10px;
}
.inner {
  border: 1px solid red;
  background-color: pink;
}
```

<div style="border: 1px solid black; padding: 10px; margin-bottom: 20px;">
<div style="background-color: pink; border: 1px solid red;">我是 div</div>
</div>

### position: relative;

加上 relative 的元素就可以使用 `left`、`top` 屬性來做位置偏移，代表以原本所在位置為基準，距離左、上的偏移。

下面沒有變化，因為預設的 `position` 是 `static`，對 `left`、`top`完全不會有反應。

```css
.outer {
  border: 1px solid black;
  padding: 10px;
}
.inner {
  border: 1px solid red;
  background-color: pink;
  left: 30px;
  top: 30px;
}
```

<div style="border: 1px solid black; padding: 10px; margin-bottom: 20px;">
<div style="background-color: pink; border: 1px solid red;left: 30px;top: 30px;">我是 div</div>
</div>

加上 `position: relative;` 讓他向右下偏 30px

```css
.outer {
  border: 1px solid black;
  padding: 10px;
}
.inner {
  position: relative;
  border: 1px solid red;
  background-color: pink;
  left: 30px;
  top: 30px;
}
```

<div style="border: 1px solid black; padding: 10px; margin-bottom: 60px;">
<div style="position: relative; background-color: pink; border: 1px solid red;left: 30px;top: 30px;">我是 relative div</div>
</div>

也可以是負的，也就是向左上偏移

```css
.outer {
  border: 1px solid black;
  padding: 10px;
}
.inner {
  position: relative;
  border: 1px solid red;
  background-color: pink;
  left: -30px;
  top: -30px;
}
```

<div style="border: 1px solid black; padding: 10px; margin-bottom: 20px;">
<div style="position: relative; background-color: pink; border: 1px solid red;left: -30px;top: -30px;">我是 relative div</div>
</div>

### position: absolute;

absolute 會向上尋找最近的可定位元素作為基礎來偏移，與 relative 的差別是，relative 是以自己原本的位置為錨點，absolute 是找父元素甚至是爺爺元素等等，直到找到非 static 的元素或是，並以他為錨點偏移。

另外還多了 `right`、`bottom` 可以用，以下範例使用 `right: 0px;`，他偏到右邊並不是基於黑框，而是更外面的文章邊界，剛好整篇文章是可定位元素，所以他就靠著最右邊了。

注意黑框變窄了，這是因為 absolute 是基於他人做偏移，所以不會參與排版， outer 的內容就空了。

```css
.outer {
  border: 1px solid black;
  padding: 10px;
}
.inner {
  position: absolute;
  border: 1px solid red;
  background-color: pink;
  right: 0px;
}
```

<div style="border: 1px solid black; padding: 10px; margin-bottom: 20px;">
<div style="position: absolute; background-color: pink; border: 1px solid red;right: 0px;">我是 absolute div</div>
</div>

一般想讓一個元素自由定位，會先讓他有個父元素做基本定位，再做偏移，在 outer 設定 `position: relative;` 之後，inner 就會貼著 outer 右邊界了。

```css
.outer {
  position: relative;
  border: 1px solid black;
  padding: 10px;
}
.inner {
  position: absolute;
  border: 1px solid red;
  background-color: pink;
  right: 0px;
}
```

<div style="position: relative; border: 1px solid black; padding: 10px; margin-bottom: 20px;">
<div style="position: absolute; background-color: pink; border: 1px solid red;right: 0px;">我是 absolute div</div>
</div>

### position: fixed;

fixed 跟 absolute 其實有點像，但 fixed 是直接找到瀏覽器邊界作為定位點，所以他永遠都會固定在瀏覽器的一邊，看看右下角吧！

```css
.outer {
  position: relative;
  border: 1px solid black;
  padding: 10px;
}
.inner {
  position: fixed;
  border: 1px solid red;
  background-color: pink;
  right: 0px;
  bottom: 0px;
}
```

<div style="position: relative; border: 1px solid black; padding: 10px; margin-bottom: 20px;">
<div style="position: fixed; background-color: pink; border: 1px solid red;right: 0px; bottom: 0;">我是 fixed div</div>
</div>

## z-index 屬性

一般元素覆蓋的規則是越後寫越上面，`z-index` 用來設定元素的高度，也就是互相覆蓋的優先度，越高也就越能被看見。

注意可定位元素會高於非定位元素，且可定位元素才可以設定 `z-index`。

```html
<div class="outer">
  <div class="inner">
    我是 div
  </div>
  <div class="inner2">
    我是 div 2
  </div>
</div>
```

```css
.outer {
  border: 1px solid black;
  padding: 10px;
}
.inner {
  border: 2px solid red;
  width: 100px;
  height: 100px;
  background-color: pink;
}
.inner2 {
  border: 2px solid blue;
  width: 100px;
  height: 100px;
  background-color: skyblue;
}
```

<div style="border: 1px solid black; padding: 10px; margin-bottom: 20px;">
<div style="background-color: pink; border: 2px solid red; width: 100px; height: 100px;">我是 div</div>
<div style="background-color: skyblue; border: 2px solid blue; width: 100px; height: 100px;">我是 div 2</div>
</div>

先給二號 `div` 負的 `margin-top`，讓他往上覆蓋

```css
.outer {
  border: 1px solid black;
  padding: 10px;
}
.inner {
  border: 2px solid red;
  width: 100px;
  height: 100px;
  background-color: pink;
}
.inner2 {
  border: 2px solid blue;
  width: 100px;
  height: 100px;
  background-color: skyblue;
  margin-top: -50px;
}
```

<div style="border: 1px solid black; padding: 10px; margin-bottom: 20px;">
<div style="background-color: pink; border: 2px solid red; width: 100px; height: 100px;">我是 div</div>
<div style="background-color: skyblue; border: 2px solid blue; width: 100px; height: 100px; margin-top: -50px;">我是 div 2</div>
</div>

幫一號加上 `position: relative;` 扳回一城

```css
.outer {
  border: 1px solid black;
  padding: 10px;
}
.inner {
  border: 2px solid red;
  width: 100px;
  height: 100px;
  background-color: pink;
  position: relative;
}
.inner2 {
  border: 2px solid blue;
  width: 100px;
  height: 100px;
  background-color: skyblue;
  margin-top: -50px;
}
```

<div style="border: 1px solid black; padding: 10px; margin-bottom: 20px;">
<div style="position: relative; background-color: pink; border: 2px solid red; width: 100px; height: 100px;">我是 div</div>
<div style="background-color: skyblue; border: 2px solid blue; width: 100px; height: 100px; margin-top: -50px;">我是 div 2</div>
</div>

若幫二號加上 `position: relative;` 理所當然二號就會覆蓋一號，但在一號上加上 `z-index: 1;` 就能有更高的優先度

```css
.outer {
  border: 1px solid black;
  padding: 10px;
}
.inner {
  border: 2px solid red;
  width: 100px;
  height: 100px;
  background-color: pink;
  position: relative;
  z-index: 1;
}
.inner2 {
  border: 2px solid blue;
  width: 100px;
  height: 100px;
  background-color: skyblue;
  margin-top: -50px;
  position: relative;
}
```

<div style="border: 1px solid black; padding: 10px; margin-bottom: 20px;">
<div style="z-index: 1; position: relative; background-color: pink; border: 2px solid red; width: 100px; height: 100px;">我是 div</div>
<div style="position: relative; background-color: skyblue; border: 2px solid blue; width: 100px; height: 100px; margin-top: -50px;">我是 div 2</div>
</div>

## Flexbox 排版

作為現代網站的排版神器，簡單垂直水平置中元素

```html
<div class="outer">
  <div class="inner">
    我是想置中的 div
  </div>
</div>
```

```css
.outer {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  height: 500px;
}
.inner {
  border: 2px solid red;
  width: 100px;
  height: 100px;
  background-color: pink;
}
```

<div style="height: 500px; display: flex; align-items: center; justify-content: center; border: 1px solid black; margin-bottom: 20px;">
<div style="background-color: pink; border: 2px solid red; width: 100px; height: 100px;">我是想置中的 div</div>
</div>

# 後記

光是看完了一定不夠，動手把文中提到的重點都試過一遍才能幫助記憶跟了解哦～

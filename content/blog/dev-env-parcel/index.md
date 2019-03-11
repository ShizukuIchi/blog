---
title: 開發環境配置 - Parcel
date: "2019-03-06T05:32:29.454Z"
description: 一鍵開始你的網頁專案
---

<style>
  input {
    display: none;
  }
  input:checked + div {
    display: block
  }
  input + div {
    display: none;
  }
</style>

> Blazing fast, zero configuration web application bundler

Parcel 是一個自動化專案打包工具，所有常見好用的工具都幫你準備好

## 安裝

```
$ yarn global add parcel-bundler
```

## 開發

```
$ parcel index.html --open
```

## 打包

```
$ parcel build index.html -d [dest_dir] -o [filename]
$ npx serve [dest_dir]
```

## 快速開發工具

- Pug
- SCSS

## Pug

- 縮排
- 屬性
- 變數
- 邏輯
- 繼承，引入，函數...

## 縮排

以縮排代表元素階層

```pug
body
  section.navbar logo
  section.content
    .first paragraph one
    .second paragraph two
    input#name
```

```html
<body>
  <section class="navbar">
    logo
  </section>
  <section class="content">
    <div class="first">
      paragraph one
    </div>
    <div class="first">
      paragraph two
    </div>
    <input id="name" />
  </section>
</body>
```

## 屬性

以括號表示屬性，空格或換行區分

```pug
input(type="text")
input(
  type="checkbox"
  name="agreement"
  checked
)
```

<label>

## 變數 點我展開

<input type="checkbox" />
<div>

可以使用 Javascript 並轉譯

```pug
- let inputType = "checkbox"

label This is a #{inputType}
input(type=inputType)
```

輸出 Html

```html
<label>This is a checkbox</label> <input type="checkbox" />
```

</div>
</label>

## 邏輯

`each`, `if`, `switch`...

```pug
if false
div i'm block
else
span i'm inline
```

等號後面直接以 JS 執行

```pug
ul
  each value in [1, 2, 3]
    li= value
```

輸出

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

## SCSS

- 變數
- 巢狀
- 函數
- 繼承
- 引入
- 算數

## 變數

```scss
$color = red;
a {
  color: $color;
}
```

## 巢狀

```scss
.container {
  padding: 10px;
  .title {
    font-size: 1.2em;
  }
}
```

輸出

```scss
.container {
  padding: 10px;
}
.container .title {
  font-size: 1.2em;
}
```

## 函數

自定函數， 以 `scss>@include` 使用

```scss
@mixin setBG($color: black) {
  background: $color;
}
div {
  @include setBG(white);
}
```

輸出

```css
div {
  background: white;
}
```

## 繼承

使用 `scss>@extend` 覆用 CSS!

```scss
.red-background {
  background: red;
}
div {
  color: blue;
  @extend .red-background;
}
```

輸出

```scss
.red-background {
  background: red;
}
div {
  color: blue;
  background: red;
}
```

## 引入

引入其他 SCSS 檔案

```scss
@import "clear";
@import "font";
```

## 算數

不用 `calc` 計算

```scss
div {
  font-size: (300px/7);
  /*font-size: calc(300px / 7);*/
}
```

輸出

```css
div {
  font-size: 42.8571428571px;
}
```

## 特色

- Code splitting
  - dynamic import
- Hot Module Replacement
- Production
  - `parcel build index.html`
  - 自動 `NODE_ENV=production`

## Dynamic import

用到的時候才載入內容

```javascript
// Promise
import("./pages/one").then(function(page) {
  page.render()
})

// async/await
const page = await import("./pages/one")
page.render()
```

## Babel

引入 Babel 轉譯程式碼來支援各個瀏覽器

```
$ yarn add babel-polyfill
```

用到 async/await 語法的地方引入

```javascript
import 'babel-polyfill'

async function hello() {
  await ...
}
```

---
title: React 快速上手
date: "2019-03-12T02:42:47.394Z"
description: 打破成見，React 一點都不難
difficulty: 中階
---

近年來前端開發框架漸漸從 JQuery 變為 Angular、Vue、React，JQuery 為何被取代呢？

## Why React？

有別於 JQuery 將邏輯和介面寫在一塊命令式語法，React 是宣告式，將畫面呈現 (排版) 和 資料 (狀態) 分開，先定義好介面如何呈現，再將資料灌進去，每當資料改變就進行畫面重繪。

假設有幾個按鈕，可以改變文字的樣式：

<style>
  label.demo {
    display: inline-block;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  button.demo {
    padding: 0;
    margin: 10px;
    width: 100px;
    height: 50px;
    line-height: 50px;
    color: #FFF;
    outline: none;
    border: 0;
    background-color: #2196F3;
    border-radius: 5px;
    box-shadow: 1px 2px 2px 1px #0D47A1;
    transition: .0.05s, transform 0.02s;
  }
  button.demo:active {
    transform: translate(2px, 2px);
    box-shadow: inset 1px 1px 3px #2196F3;
    background-color:#1976D2;
  }
  .buttons.demo {
    display: flex;
    justify-content: center;
  }
  input.demo {
    display: none;
  }
  span.demo {
    font-size: 60px;
    padding: 10px;
  }
  .text.demo {
    text-align: center;
    color:#0D47A1;
  }
  #bold:checked ~ .text span {
    font-weight: bold;
  }
  #italic:checked ~ .text span {
    font-style: italic;
  }
  #underline:checked ~ .text span {
    text-decoration: underline;
  }
</style>

<div class="buttons demo">

  <button class="demo">
    <label class="demo" for="bold">Bold</label>
  </button>
  <button class="demo">
    <label class="demo" for="italic">Italic</label>
  </button>
  <button class="demo">
    <label class="demo" for="underline">Underline</label>
  </button>
</div>
<input class="demo" type="checkbox" name="bold" id="bold">
<input class="demo" type="checkbox" name="italic" id="italic">
<input class="demo" type="checkbox" name="underline" id="underline">
<div class="text demo">　<span class="demo">Hello World</span>　</div>

要達成如上效果，通常會有三個變數分別代表粗體、斜體、底線，儲存著文字樣式的狀態，決定按下按鈕時該怎麼改變文字樣式。

- JQuery 思路：

  按下按鈕時，切換對應變數的狀態，並把新的狀態覆寫到文字的樣式，或是切換文字的 class，程式碼大概像：

```javascript
$("button#bold").click(function() {
  $(".text").toggleClass("bold")
})
```

- React 思路：

  預先定義好文字在各種狀態下該如何繪圖，按下按鈕時修改**狀態**，React 會自動在狀態改變時進行畫面重繪，由於如何繪圖已經定義好了，新的狀態就會產生新的畫面。

好處是 JQuery 必須直接修改網頁樣式(命令式)，React 則是完全把邏輯和視圖分開，透過定義好繪圖方式，修改狀態來重繪畫面(宣告式)，大大降低了 debug 的成本。

## React 語法

我想在網頁上放個 Hello World …

```html
<div>Hello World!</div>
```

轉換成 React

```jsx
import React from "react"

function Hello() {
  return <div>Hello World!</div>
}
```

我們完成了第一個 React component！是不是很簡單呢？

真的很簡單 (誤

那要怎麼放進 DOM 裡面呢？ 首先要有個進入點如下圖的 `div#root`。

```html
<!-- index.html -->
<body>
  <div id="root"></div>
</body>
```

並把寫好的 React component 如剛剛的 `Hello` 塞進這個 div，具體步驟為執行 ReactDOM.render 並放入兩個參數 ( 根元件 & 進入點 )：

```jsx
ReactDOM.render(<Hello />, document.querySelector("#root"))
```

看起來就像是創造一個新的 HTML tag 叫做 `Hello` 並放入 HTML 內對吧，在 React 中 `Hello` 被稱為一個 component，整個 React App 就是由 components 組成。

※ React 是以開頭大小寫分辨是否為 HTML 既有元件，亂用會直接報錯！

```jsx
// Error
<hello />
// Okay
<Hello />
```

還不趕快自己動手試試？　[CodeSandbox](https://codesandbox.io/s/new)

## 狀態控制

> 真相永遠只有一個！

React 永遠依據當前狀態繪製畫面，狀態改變時就會重繪。

想要讓 function component 擁有狀態，要先轉換為 class component：

```jsx
class Hello extends React.Component {
  render() {
    return <div>Hello World!</div>
  }
}
```

接著加入 constructor 還有初始的 state，

```jsx
class Hello extends React.Component {
  // highlight-start
  constructor(props) {
    super(props)
    this.state = {
      text: "Hello World!",
    }
  }
  // highlight-end
  render() {
    return <div>Hello World!</div>
  }
}
```

最後加上修改 state 的 function 並綁定在 div 上，點擊就會產生效果。

```jsx
class Hello extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "Hello World!",
    }
  }
  // highlight-start
  changeText = () => {
    this.setState({
      text: "Hello React!",
    })
  }
  // highlight-end
  render() {
    // highlight-next-line
    return <div onClick={this.changeText}>{this.state.text}</div>
  }
}
// Hello World!
// 點擊 div
// Hello React!
```

## 狀態傳遞

component 內的狀態叫做 state，來自 parent 的狀態叫做 props，當 component 收到新的 props 也會進行重繪。

直接在 component tag 放入 attribute，component 就能從 props 物件中取出。

```jsx
class Hello extends React.Component {
  state = {
    text: "Hello World!",
  }
  changeText = () => {
    this.setState({ text: "Hello React!" })
  }
  render() {
    return (
      <div onClick={this.changeText}>
        <HelloText text={this.state.text} />
      </div>
    )
  }
}
const HelloText = props => {
  return <div>{`Hello ${props.text}`}</div>
}
// Hello Hello World!
// click div
// Hello Hello React!
```

## JSX 語法

寫 React 時會在 Javascript 內穿插類 HTML 的文字，稱作 JSX，要注意的是其中因為關鍵字重複，跟 HTML 會有一點區別：

- for、class 長得不太一樣

```jsx
<label htmlFor="username" className="user-name" />
```

- style 要以物件放入

```jsx
<div style={{ backgroundColor: "pink", fontSize: "3em" }}>Hello World!</div>
```

- HTML 語法和 Javascript 是以大括弧區隔

```jsx
<span className={specialClass}>{"I am " + x + " years old."}</span>
```

## 後記

一開始覺得不習慣是當然的，但寫了一陣子後就能感受到 React 的強大，熟悉基本語法後請務必去了解 [Virtual DOM](https://reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom)、[Component Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html) 加強觀念寫起來更順手。

同場加映 [React Hooks](https://medium.com/@shizukuichi/react-hooks-%E6%98%AF%E7%94%9A%E9%BA%BC%E8%AE%93%E6%88%91%E7%9B%B8%E4%BF%A1%E4%B8%80%E8%A6%8B%E9%8D%BE%E6%83%85-da222a937af2)，經歷 Lifecycle 的摧殘後再來試試 hooks 吧，你會發現世界一片光明、豁然開朗。

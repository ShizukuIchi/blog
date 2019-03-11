---
title: Javascript 開發環境簡介
date: "2019-03-06T05:32:29.454Z"
description: 解析 Javascript 專案架構
difficulty: 入門
---

> 為什麼 node_modules 裡面總是塞了一堆東西？

本文會提到如何準備 Javascript 的開發環境以及專案架構。

## Node.js

畢竟程式只是一堆文字，要有人負責把文字轉換成實際的動作並執行，[Nodejs](https://nodejs.org/en/) 就肩負這個重責大任。

從官方網站選擇 LTS 版本下載並安裝後一路 Next 就能安裝完畢，確認是否安裝成功的話可以在 `命令提示字元` 或 `Terminal` 檢查有沒有出現版本資訊。 (沒有就是失敗啦)

```
$ node --version
v8.12.0
```

## npm

npm 是 Node.js 內建的套件管理工具，可以透過 npm 安裝好用的套件。

Javascript 擁有廣大的社群，其中許多神人、前輩都會把寫好的工具、套件發表出來讓大家使用，上網搜尋 Javascript 相關套件的時候就會看到如何安裝，通常會像是：

```
$ npm install [套件名稱]
```

安裝完的時候會在所在的資料夾內創建一個新的資料夾 `node_modules` 以及一個檔案 `package.json`，前者就是已經已安裝套件的程式碼集散地，當專案大起來也會隨著變得超級大包。

## package.json

以 Javascript 開發時，通常會以專案為單位，一個專案所用到的所有檔案都會放在某個資料夾裡面，`package.json` 會出現在此資料夾下的第一層。

內容大概如下，其中最重要的是 `dependencies`，代表此專案會用到的 npm 套件以及版本。

```json
{
  "name": "我的專案名稱",
  "description": "這是一個棒棒的專案",
  "version": "0.1.0",
  "author": "Shizuku",
  "dependencies": {
    "parcel-bundler": "^1.12.0"
  }
}
```

當專案開發一半想要轉移陣地時 (換電腦、傳給別人...)，要注意絕對不會讓 `node_modules` 一起搬家，只需要把專案內的程式碼和 `package.json` 打包起來就可以了，搬家完畢後只需要透過：

```
$ npm install
```

npm 就會把 `package.json` 內的 `dependencies` 全安裝一遍，`node_modules` 也會隨之出現。

## 專案架構

下圖為一個簡單專案資料夾下的檔案架構：

![](https://i.imgur.com/aT9soxo.png)

通常會把 Javascript 程式碼放在 `src` 資料夾內，其他就是圖片、專案說明手冊等等，而 `node_modules` 只有在輸入 `npm install` 之後才會出現。

## 安裝全域、開發用套件

有時候套件安裝說明會加入一些參數：

```
$ npm install parcel-bundler -G
$ npm install gh-pages -D
```

- `-G` 代表是跟 npm 安裝在一起，也就是安裝一次之後，不管在哪都可以使用，不只侷限於某個專案資料夾內。
- `-D` 代表是開發時才會用到的套件，會被列在 `package.json` 中的 `devDependencies`，雖然 `npm install` 時也會被安裝，但在安裝他人發布的套件時 npm 就會自動避開。

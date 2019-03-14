---
title: Git 版本控制
date: "2019-03-14T04:53:22.639Z"
description: 還在用截圖、USB 傳程式碼嗎？別鬧了
difficulty: 入門
---

> Git 就是 Coding 界的時光機、抓戰犯利器。

## 概念介紹

Git 的主要功能就是紀錄專案的**版本**，假設一開始寫完的程式碼是第一版，之後每次修改時就可以更新版本，所有的版本資訊都會儲存在 `.git` 資料夾，可以在各個版本間切換，讓程式碼回到三天前的版本是完全沒問題的。

開始前需要建立存放 Code 的雲端空間如 [Github](https://github.com/) ，快去建立帳號還有安裝 [Git](https://git-scm.com/downloads)。

## 前置動作

先建立一個新的專案資料夾，假設叫做 `project`  
**進入資料夾**後開啟 Terminal 並輸入 `git init`

```
$ git init
Initialized empty Git repository in .../project/.git/
```

此時專案中多了一個資料夾 `.git` ，它就是 git 版本資訊儲存的地方，接下來先隨便新增一個檔案叫 `a.txt`，並在裡頭隨意輸入一些文字。

回到 Terminal 並輸入萬用指令 `git status`

```
$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        a.txt

nothing added to commit but untracked files present (use "git add" to track)
```

Terminal 會出現一些文字，代表當前的 Git 狀態以及提示，不確定要輸入什麼指令時就可以試試看 `git status`，可以解決大部分的問題。

## 版控開始

- git add 追蹤檔案

  從 `git status` 的提示中得知 `a.txt` 這個檔案尚未被追蹤，`git add <file>...` 指令能將有變動的檔案加入追蹤，沒有被追蹤的檔案變動都不會被存入新版本。

輸入 `git add a.txt` 還有 `git status`

```
$ git add a.txt
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   a.txt
```

翻成中文就是：有變動待確認，而且可以輸入`git rm --cached a.txt` 取消追蹤 `a.txt`，返回上一步。

- git commit 儲存變動

  用 commit 來確認並儲存變動，也就是更新專案版本，存檔的同時要附上一個訊息，以便之後辨識版本資訊。

  輸入 `git commit -m "<你的改版訊息>"`，`-m` 是 message 的縮寫

```
$ git commit -m "新增 a.txt 檔案"
[master (root-commit) 89aecbd] 新增 a.txt 檔案
 1 file changed, 1 insertions(+), 0 deletions(-)
 create mode 100644 a.txt
```

翻譯蒟蒻：  
一個檔案改變了，新增 1 行，刪除 0 行  
新增 a.txt

再輸入一次 `git status` 就會提示沒東西待確認，很乾淨

```
$ git status
On branch master
nothing to commit, working tree clean
```

之後就是不斷

```
> git remote add [-u] <remote_name> <repository_url>
```

有了數據庫，就可以開始 coding 囉～

最常用的指令是 `add`、`commit`、`push`，  
`add` 指令用來告訴 git 哪些檔案的變動要記錄起來， `.` 代表所有變動。

```
> git add <file_path>
> git add .   // all files
```

`commit` 確認紀錄變動，且要附上確認訊息，明確資訊、統一格式才是好習慣。

```
> git commit -m "fix: login bugs"
> git commit -m "ggez"   // 這樣沒人看得懂
```

`push` 更新數據庫的資訊，丟到雲端中大家都看的見，須附上數據庫還有分支的名稱。

```
> git push <remote_name> <branch_name>
```

若搞不清楚狀況，或是按錯鍵，就輸入這個超棒的指令 `status`，它會告訴你現在 git 的狀況，像是有變動尚未紀錄或是確認，以及本地版本與數據庫的版本是否相符。

```
> git status
```

### 其他 Git 指令

跟別人合作時，夥伴將程式碼 push 到數據庫後，可以用 `pull`取出最新版本的 code，每次開始 coding 前，都要記得 pull 一下，保持同步。

```
> git pull <remote_name> <branch_name>
```

對於正在追蹤的數據庫，只需要 `push`、`pull` 就可以了，省略了`remote_name` 和 `branch_name` 。

```
> git pull
> git ...
> git push
```

終於輪到 `branch` 出場了，顧名思義就是分支的意思，同一個數據庫可以擁有多個分支，製作實驗性功能的時候相當好用，不需修改主幹，~~萬一 code 寫壞了，只需剪掉分支就行了。~~  
使用 `checkout` 可以切換分支，本地的 Code 也會隨之切換，加上參數 `-b` 可以建立新分支：

```
> git checkout <branch_name>
> git checkout -b <branch_name>    // add and switch to new branch
```

`branch` 則用來看看目前正處於哪一個分支，也可以建立分支。

```
> git branch  // view all branches
> git branch <new_branch_name>
```

`reset` 可以讓時光回流，主要有 `-soft`、`-mixed`、`-hard` 三種參數，一旦使用 `reset`，版本便一去不復返，只是程度的區別。  
`-soft` ~~就是說話不算話~~，會取消 `commit`，讓變動確認失效，不影響程式碼和想要更改的部分。

```
> git reset -soft <version>
```

`-mixed` ~~就如失憶~~，會取消 `add` ，讓 git 不記得有這個改動，但不會更改程式碼，若不加參數就會是以此方式進行重設。

```
> git reset <version>
```

`-hard` 會直接乘著時光機到指定版本，再當次版本之後的改動都會消失殆盡，謹慎服用。

```
> git reset -hard <version>
```

git 版本的表示方法如下 :

- `HEAD` 當前版本
- `HEAD^` 前 1 版本
- `HEAD~2` 前 2 版本
- `HEAD~X` 前 X 版本

`stash` 指令的功能和 `reset` 有些類似，但它是讓尚未確認的更動儲存起來，並回到當前版本的樣子，方便開啟新分支進行其他改動。

```
> git stash
> git stash pop   // get stash content
```

`diff` 可以用來比較兩個本版的區別

```
> git diff <version1> <version2>
```

`log` 可以查看 git 的歷史以及版本號

```
> git log
```

若要回復單一檔案至某版本，可以這樣輸入：

```
> git checkout <version> <file_path>
```

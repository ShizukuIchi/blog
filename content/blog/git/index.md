---
title: Git 版本控制
date: "2019-03-14T04:53:22.639Z"
description: 還在用截圖、USB 傳程式碼嗎？別鬧了
difficulty: 入門
---

> Git 就是 Coding 界的時光機、抓戰犯利器。

## 概念介紹

Git 的主要功能就是紀錄專案的**版本**，假設一開始寫完的程式碼是第一版，之後每次修改時就可以更新版本，版本間可也以自由切換。

開始前請先安裝 [Git](https://git-scm.com/downloads)。

## 前置動作

先建立一個新的專案資料夾，假設叫做 `learn-git`
**進入資料夾**後開啟 Terminal 並輸入 `git init`

```bash
$ mkdir learn-git          # 建立資料夾
$ cd learn-git             # 進入資料夾
$ git init                 # 對這個資料夾開始版控
Initialized empty Git repository in .../learn-git/.git/
```

此時專案中多了一個隱藏資料夾 `.git` ，它就是 git 版本資訊儲存的地方，接下來先隨便新增一個檔案叫 `a.txt`，並在裡頭隨意輸入一些文字。

回到 Terminal 並輸入萬用指令 `git status`

```bash
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

  從 `git status` 的提示中得知 `a.txt` 這個檔案尚未被追蹤，`git add <file>...` 指令能將檔案的變動加入暫存區，沒有被加入的檔案變動就不會被存入新版本。

輸入 `git add a.txt` 還有 `git status`

```bash
$ git add a.txt
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   a.txt
```

翻成中文就是：暫存區有變動待確認，而且可以輸入`git rm --cached a.txt` 把上次 `a.txt` 的變動從暫存區移除。

- git commit 儲存變動（改版）

  用 commit 來確認並儲存變動，也就是更新專案版本，存檔的同時要附上一個訊息，以便之後辨識版本資訊。

  輸入 `git commit -m "<你的改版訊息>"`，`-m` 是 message 的縮寫

```bash
$ git commit -m "新增 a.txt"
[master (root-commit) 89aecbd] 新增 a.txt
 1 file changed, 1 insertions(+), 0 deletions(-)
 create mode 100644 a.txt
```

翻譯蒟蒻：  
總共 1 個檔案改變了，新增 1 行，刪除 0 行  
建立 a.txt 檔案

再輸入一次 `git status` 就會提示沒東西待確認，很乾淨

```bash
$ git status
On branch master
nothing to commit, working tree clean
```

注意：經過改動並輸入 `git add` 後，若再繼續改動的話就要再輸入一次 `git add` 把最新一次的改動也放入暫存區， `git commit` 只會把暫存區的內容加入新版本。


## 本地和遠端 Repository 

Repository 就是掌管程式碼以及版本資訊的倉庫，但真的很難翻，之後就直接叫 repo。

目前為止的步驟都是在本地進行，也就是改變本地 repo 的版本，但雲端也可以存放 repo，在合作、複製他人程式碼、換電腦的時候就很方便。

目前最大的雲端 repo 儲存空間就是 [Github](https://github.com/) ，趕緊建立帳號吧。

### 建立 repo
註冊完帳號後找到 `New repository` 的選項，隨意取個名字如 `first-repo`，然後按最下面的 Create repository。

當你想要創建一個全新的 repo 且還沒有任何程式碼的時候，就使用上方區塊的指令，前五行就是剛剛做的事情，最下方的兩行就是當你已經寫了一些東西，想要放入遠端 repo 的指令：
```bash{5-6}
echo "# first-repo" >> README.md     # 建立一個新檔案並寫入 # first-repo
git init                             # 開始版本控制
git add README.md                    # 將變動放入暫存區
git commit -m "first commit"         # 確認改動並更新本地 repo 的版本
git remote add origin git@github.com:<你的帳號>/first-repo.git
git push -u origin master
```

### git remote
透過 `git remote` 可以在本地 repo 管理遠端 repo 地址，如果想要把本地 repo 同步到遠端 repo，首先要用 `git remote add`：
```bash
$ git remote add <remote 名稱> <repo 地址>
```
- `remote 名稱` 通常設定為 origin，因為通常只會有一個遠端 repo 地址，若有多個就另外再取其他名稱。
- `repo 地址` 是遠端 repo 的地址，透過這個地址就能夠在網路上找到 repo，把本地 repo 的程式碼同步上去。


### git push
`git push` 將本地 repo 的版本同步到遠端 repo，這時候用到的 `remote 名稱` 就是剛才新增遠端 repo 地址時幫他取的名字，才不用每次都輸入超長的 `repo 地址`。

repo 可以擁有許多分支 [branch](https://git-scm.com/book/zh-tw/v1/Git-分支-分支的新增與合併)，`分支名稱` 則是 repo 的分支名稱，預設的名稱就是 master，push 的時候會把本地的 master 分支更新到遠端的 master 分支。
```bash
$ git push <遠端名稱> <分支名稱>
```

輸入完這兩個指令再重整一次剛才創建完 repo 的頁面就能看到程式碼了。


### git pull
和其他人協作一個 repo 時，若 A 在本地 repo commit 了一個新版本並 push 到遠端 repo，B 可以用 pull 將新版本同步到 B 的本地repo：
```bash
$ git pull <remote name> <branch name>
```


## Git reset 回溯

`git reset` 可以回溯版本，在介紹如何使用之前要先了解版本的表示方式，先輸入 `git log --oneline` 試試：
```bash
$ git log --oneline
f279135 (HEAD -> master) update: intro
6bc08b5 add: ga
de80577 new: React 快速上手
379acfa feat: code highlight
8aafcb9 new: JS開發環境簡介
0a9c979 feat: difficulty tag
```
最左邊的七個英數字代表簡化的版本編號（如果不加 oneline 就會看到完整的），右邊就是各版本的 commit 訊息。

`HEAD` 是當前最新的版本，可以用以下方法表示其他版本：
```bash
$ git reset HEAD^     # 前一版
$ git reset HEAD^^^   # 前三版
$ git reset HEAD~5    # 前五版

$ git reset 0a9c979   # 直接到版本號 0a9c979 
```

### git reset 參數
主要有 `--mixed`、`--soft`、`--hard` 三種

- `--mixed` 不會影響目前的程式碼，也是預設的參數，移動到指定的版本並清空暫存區。
```bash
$ git reset HEAD^
Unstaged changes after reset:
# 從暫存區移除的檔案資訊...
```
- `--soft` 不會影響目前的程式碼，移動到指定版本，把之前 commit 過的變動都放進暫存區。

- `--hard` 程式碼直接變成指定版本的樣子，謹慎服用。


## 其他好用指令

- `git stash` 可以回復到版本初始的樣子並把所有改動儲存起來，注意當前程式碼會改變：
```bash
$ git stash       # 回到版本初始狀態 
$ git stash pop   # 復原 stash 的程式碼
```

- `git diff` 可以用來比較兩個本版的區別
```bash
$ git diff <版本1> <版本2>
```

- `git log` 可以查看 git 的歷史以及版本號（按 q 退出）

```bash
$ git log
$ git log --oneline
```

- `git checkout` 回復單一檔案至指定版本：
```bash
$ git checkout <版本> <檔案名稱>
```

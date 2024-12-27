---
theme: theme
background: /background.jpg
title: 搞個網頁
info: 酷酷的網頁基礎介紹
drawings:
  persist: false
transition: slide-left
mdc: true
overviewSnapshots: true
---

# 搞個網頁

- - -

<small>Presented by **Wolf Yuan**</small>

---

<QRCodeWrapper></QRCodeWrapper>

---

## `$whoami`

我是 Wolf Yuan，人們都叫我 Wolf

以防你不知道，我是這個社團的網管

## 我的經驗

- Linux 用了四年，玩伺服器玩的
- 目前筆電 Arch、桌機 Fedora 服役中
- Linux 用過 Ubuntu Debian Fedora Arch Manjaro ZorinOS Deepin NixOS，可能比你吃過的 Linux 還多
- 前端會用 Astro，React (Next.js) & Vue 會一點點
- 後端會用 Node.js Docker nginx Caddy
- 主要學 JavaScript，但也會一點點 Java Python C C++ Bash (Shell script)
- 基本上社團的 OJ 是我在管理

---

## 課程安排

第一節課

- 網頁基本概念
- 網頁的三元素
- 網頁實作

第二節課

- 聽說是吃 Pizza，社長好棒 owo

---
layout: cover
---

# 網頁基本概念

---

## 網頁是什麼？

網頁其實是一個個的文字檔，透過瀏覽器渲染後顯示在使用者眼前。

<v-click>

## 網頁的三元素

既然網頁是一個文字檔，那麼瀏覽器要怎麼知道要怎麼顯示呢？這時就要講到網頁最基本的三元素：

- HTML (HyperText Markup Language)
- CSS (Cascade Style Sheet)
- JS (JavaScript)

</v-click>

---
layout: cover
---

# 那麼這三個元素到底是做什麼的呢？

---

## HTML

你可以把 HTML 想成網頁最基本的架構，它定義了網頁的結構，例如：

```html
<html>
  <body>
    <h1>Hello, world!</h1>
    <p>This is my awesome site!</p>
  </body>
</html>
```

那麼他會變成底下這個樣子：

![上面程式碼的渲染結果](/images/html-demo.png)

> 不理解上面在幹什麼？我們等等會講到 HTML 到底是怎麼寫出來的，不要擔心

---

## CSS

至於 CSS 則是來控制網頁樣式的小東東，它用來控制網頁的外觀，像是如果我把底下的 CSS 加到上面的 HTML 中：

```css
h1 {
  color: blue;
}
```

我的網頁就會變成這個樣子：

![加上了 CSS 的渲染結果](/images/css-demo.png)

> 還是不理解上面在幹什麼？我們等等會講到 CSS 到底是怎麼寫出來的，不要擔心

---

## JavaScript

嘿，等等，我得先說一件事，JavaScript **不是 Java**，他們兩個雖然看起來很像，但是實際上是兩個完全不同的東西。一個通常是用在網頁上的而另外一個是開發跨平臺的程式語言。~~Write once, debug everywhere~~

JavaScript 可以達成許多動態的效果，從簡單的數數到 API 請求、加密運算等都可以使用 JavaScript 達成。

JavaScript 最開始是在瀏覽器上執行的，但現在也可以在伺服器上執行，例如 Node.js，還有更新的像是 Deno、Bun。

JavaScript 跟你學過的 C 類型語言其實有點相近，這是一段會在主控臺 (Console) 輸出 `Hello, world!` 的 JavaScript 程式：


```javascript
console.log("Hello, world!");
```

---

## HTML 的基本結構

網頁最基礎的元件就是 HTML，它掌管了整個網頁的架構，鏈接了 CSS 跟 JavaScript。

HTML 是由一個個的標籤 (Tag) 組成的，這些標籤會告訴瀏覽器這個元素是什麼，它們以 `<` `>` 包起來，例如：

```html
<h1>Hello, world!</h1>
```

就是一個 `h1` 的標題標籤，這個標籤告訴瀏覽器這是一個標題，而裡面的 `Hello, world!` 則是這個標題的內容。

標籤裡面可以包含其他的標籤，例如：

```html
<div>
  <h1>Hello, world!</h1>
</div>
```

這個 `div` 標籤就是一個區塊，裡面包含了一個 `h1` 的標題標籤。

---

## 怎麼用標籤把這三個元素組合在一起？

這時候我們就可以用 HTML 來把這三個元素組合在一起，我們可以用一個十分基礎的 HTML 文件來看看：

````md magic-move
```html {*|2-20|3-5|4|6-19}{lines:true}
<!DOCTYPE html>
<html>
  <head>
    <title>Hello World</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>This is my awesome site!</p>

    <style>
      h1 {
        color: blue;
      }
    </style>

    <script>
      console.log("Hello, world!");
    </script>
  </body>
</html>
```

```html {2-13}
  <body>
    <h1>Hello, world!</h1>
    <p>This is my awesome site!</p>

    <style>
      h1 {
        color: blue;
      }
    </style>

    <script>
      console.log("Hello, world!");
    </script>
  </body>
```
````

---

## HTML 中的特殊標籤

HTML 有一些比較特別的標籤：

- `<!DOCTYPE html>`: 告訴瀏覽器這是一個 HTML 文件
  - Fun Fact，其實 HTML 有很多版本，這個標籤告訴瀏覽器這是 HTML5 的文件
  - 歷史上的 HTML 版本有這些，以及它們相對映的 `DOCTYPE`:
    - HTML 4.01: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">`
    - XHTML 1.0: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">`
- `<html>`: HTML 文件的根元素
- `<head>`: 網頁的標頭
- `<body>`: 網頁的主要內容

---

## HTML 的(一般)標籤

### 活在 body 裡面的標籤

- `<h1>`: 標題
- `<h2>`: 次標題
- `<h3>`: 次次標題
- `<h4>`: 次次次標題
- `<h5>`: 次次次次標題
- `<h6>`: 次次次次...次標題
- `<p>`: 段落
- `<a>`: 超連結
- `<img>`: 圖片
- `<div>`: 區塊
- `<style>`: CSS 樣式
- `<script>`: JavaScript 程式碼

---

### 活在 head 裡面的標籤

- `<title>`: 網頁標題
- `<link>`: 引入外部資源
- `<meta>`: 網頁資訊
- `<style>`: **CSS 樣式**
- `<script>`: **JavaScript 程式碼 (!! 慎用 !!)**


活在 `head` 跟 `body` 的標籤還有其他很多很多，可以到 [HTML Element Reference - W3Schools](https://www.w3schools.com/TAGs/) 查看

---

## CSS 的選擇器

CSS 的選擇器是用來選擇要套用樣式的元素，這時就要講到 HTML 的 ID 跟 Class 了。通常 ID 用來選擇唯一的元素 (常用於 JavaScript 中)，而 Class 則是用來選擇一群元素 (常用於 CSS 中)。

例如我們現在有一個 `h1` 的標題標籤，我們可以這樣做讓它有 ID 或是 class：

````md magic-move
```html
<h1>Hello, world!</h1>
```

```html
<h1 id="myHeadingTitle">Hello, world!</h1>
```

```html
<h1 id="myHeadingTitle" class="title">Hello, world!</h1>
```
````

<v-click>

我們在這裡加的 `id="..."` 跟 `class="..."` 就是 HTML 的屬性，它以 `key="value"` 的方式來設定元素的屬性。

</v-click>

<v-click>

CSS 的選擇器就是用來指定要選擇哪個標籤，它可以以 `.ID 名` 或是 `#Class 名` 來選擇元素，例如：

```css
#myHeadingTitle {
  color: blue;
}
```

將會選擇到 `id="myHeadingTitle"` 的元素，並將被**選擇到的所有元素**的 `color` (顏色) 設定為 `blue` (藍色)。

</v-click>

---

## CSS 的神奇之處

其實從剛剛的範例來看，你會發現 CSS 多個選擇器可以同時選擇到一個元素，這時就會有一個問題：**選擇器的優先順序**。

CSS 的選擇器有一個優先順序，這個優先順序是由高到低：

1. `!important`
  ```css
  h1 {
    color: red !important;
  }
  ```
2. `style` 屬性
  ```html
  <h1 style="color: red;">Hello, world!</h1>
  ```
3. ID (`#myHeadingTitle`)
4. Class (`.title`)
5. 標籤 (`h1`)
6. 全域 (`*`)
7. 繼承

---

例如說，我們現在有一個長這樣的 HTML：

```html
<h1 id="myHeadingTitle" class="title">Hello, world!</h1>

<style>
  h1 {
    color: red;
  }

  .title {
    color: blue;
  }

  #myHeadingTitle {
    color: green;
  }
</style>
```

瀏覽器則會這樣顯示，因為 `#myHeadingTitle` 是目前優先順序最高的選擇器

![加上了 CSS 的渲染結果](/images/selector-demo.png)

---

## JavaScript 的基本語法

學過了這些靜態網站的基礎，我們怎麼可以跳過這個最特別的 JavaScript 呢？

JavaScript 是一個動態的程式語言，它可以做很多事情，它有著*類似* C 語言的語法，又有著 Python 的動態型別，可說是~~夢想中的程式語言~~。

這是一個簡單的 JavaScript 程式：

```javascript
console.log("Hello, world!");
```

<v-click>

我們可以把這段程式碼拆解成幾個部分：

````md magic-move
```javascript
console // -> console (object)
```

```javascript
console.log // -> window.console.log (function)
```

```javascript
console.log("Hello, world!"); // -> (undefined)
```
````

</v-click>

<v-click>

跟其他程式語言一樣，JavaScript 也有變數、函數、條件判斷、迴圈等等

</v-click>

<v-click>

JavaScript 編寫上也有一個神奇的地方，也就是如果你有分行，那麼分號 (`;`) 就是可以省略的，這是一個合理且可以執行的 JavaScript 程式：

```javascript
console.log("Hello, world!")
```

</v-click>

---
layout: cover
---

# 網頁實作

---

講了那麼多，這時候我們該來一些實作了！

這堂課會使用 Visual Studio Code (以下簡稱 VSCode) 來編輯 HTML、CSS 跟 JavaScript，請在你的桌面上找到這個：

// TODO: Add VSCode screenshot

請點兩下來打開它

---

## 準備好專案環境

請先在你的桌面上新增一個資料夾，這會使管理你的檔案變得更加方便。你可以取任何一個你想要的資料夾名稱。

接著切換到 VSCode，點擊左上角的 檔案 `->` 開啟資料夾，選擇剛剛創建的資料夾。

<img src="/images/vscode-open-folder.png" class="aspect-auto w-80">

---

## 安裝幫助開發的 VSCode 擴充

請在 VSCode 的左邊找到 這個圖示：

<img src="/images/vscode-ext-icon.png" class="aspect-auto w-8">

點一下它，你的側邊欄應該就會變成 VSCode 的擴充頁面，請搜尋 `Live Server`，並安裝搜尋到的第一個擴充

<img src="/images/vscode-ext-live-server.png" class="aspect-auto w-56">

如果你未來要使用 VSCode 開發，請***慎選你用的擴充！***

安裝完擴充後，在點選左側最上面的資料夾圖示來回到檔案管理頁面。

---

## 建立第一個 HTML 檔案

請確定一下你現在應該有這些東西：

- 有一個 VSCode 程式開著
- 桌面上有一個用來存放今天作品的資料夾
- 有安裝 Live Server VSCode 擴充

接下來，請在你的 VSCode 找到這個按鈕：

<img src="/images/vscode-create-file.png" class="aspect-auto w-72">

這個按鈕是拿來新增檔案的，請點一下它，並在底下的框框輸入檔名。

**請將檔名取為 `index.html`**

---

你現在應該會有一個非常乾淨的編輯視窗

<img src="/images/vscode-init-file.png" class="aspect-auto h-96 mx-auto">

---

## 開始編寫 HTML 文件

請先輸入 `!`，VSCode 應該會顯示這個東西：

<img src="/images/html-emmet-init.png" class="aspect-auto h-48">

按下 Enter 後，它應該會生成一個預設的 HTML 範本：

<img src="/images/html-emmet-init-done.png" class="aspect-auto h-32">

---

等等，剛剛發生什麼事了？

為了加速網頁開發，有一個十分好用的工具叫做 `Emmet`，而 VSCode 有內建此功能。

當你按下 `!` 時，`Emmet` 就會叫出最基本的網頁範本來讓你自動填入

`Emmet` 還有許多用途，像是輸入 `div` 時，它可以自動插入一個 `div` 的標籤。這堂課不會多談此工具，有興趣可以回去自己查查看

---

## 寫出一個簡單的網頁

````md magic-move
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

</body>
</html>
```

```html
<body>

</body>
```

```html
<body>
  <h1>今天天氣超級好</h1>
</body>
```
````

<v-click>

現在我們需要將 VSCode 內建的 Live Server 啟動，請在視窗右下角找到這個寫著 `Go Live` 的按鈕：

<img src="/images/vscode-live-server-start.png" class="aspect-auto h-16">

</v-click>

---

## 看到你的第一個網頁！

點下 `Go Live` 後，你的瀏覽器應該會自動開啟，並且顯示你剛剛製作出的 HTML 文件。

<img src="/images/html-demo-1.png" class="aspect-auto h-96 mx-auto">

---

## 改變一下標題的顏色

現在我們來試著改變一下標題的顏色，請在你的 HTML 文件中加入這段 CSS：

````md magic-move
```html
<body>
  <h1>今天天氣超級好</h1>
</body>
```

```html{4-8}
<body>
  <h1>今天天氣超級好</h1>

  <style>
    h1 {
      color: blue;
    }
  </style>
</body>
```

```html
<style>
  h1 {
    color: blue;
  }
</style>
```
````

<v-click>

這段 CSS 會將所有的 `h1` 標籤的文字顏色設定為藍色，存檔後，重新整理你的網頁，你應該會看到標題變成藍色了。

<img src="/images/html-demo-color-css.png" class="aspect-auto h-36">

</v-click>

---

## 加入一些圖片

現在我們來試著加入一張圖片。請你找到一張你喜歡的圖片，打開你最一開始的專案資料夾，將你的圖片放進去。

<v-click>

放進去之後請把那張圖片**重新命名**成 `image.jpg`，接著我們來編輯我們的 HTML 文件：

````md magic-move
```html
<body>
  <h1>今天天氣超級好</h1>

  <style>
    h1 {
      color: blue;
    }
  </style>
</body>
```

```html{3}
<body>
  <h1>今天天氣超級好</h1>
  <img src="/image.jpg">

  <style>
    h1 {
      color: blue;
    }
  </style>
</body>
```
````

接著重新整理你的網頁，你應該會看到你的圖片出現在你的網頁上。

</v-click>

---
layout: cover
---

# 簡報結束

- - -

<small>
  Website: <a href="https://wolf-yuan.dev">wolf-yuan.dev</a>
  <br>
  Instagram: <code>wolf.yuan</code>
  <br>
  Fully open sourced! Visit <a href="https://gitlab.com/wolf-yuan/presentation/">wolf-yuan/presentation on GitLab</a>
</small>

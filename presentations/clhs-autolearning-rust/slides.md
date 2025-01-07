---
theme: theme
background: /background.jpg
title: Rust 自主學習成果
info: 高二上的自主學習計畫報告。介紹什麼是 Rust 程式語言，為什麼我想學它，還有它到底多優雅 ✨
drawings:
  persist: false
transition: slide-left
mdc: true
overviewSnapshots: true
sorting: 1
---

# Rust 自主學習成果

- - -

<small>Presented by **Wolf Yuan**</small>

---

<QRCodeWrapper href="clhs-autolearning-rust"></QRCodeWrapper>

---

## 為什麼我想學 Rust 程式語言？

我目前的主要程式語言是 JavaScript，我認為他的優點是像 Python 一樣的好寫，又同時有類似 C/C++ 的語法，還可以同時在前端 (通常指瀏覽器) 和後端 (伺服器) 執行。更不用說後來延伸出的 TypeScript、React Native 以及更新的 Bun 執行環境，簡直把 JavaScript 變成一個夢幻語言。

但由於 JavaScript 的動態型別以及它是直譯的程式語言，執行起來與預先編譯的 C/C++ 慢，也比有型別的 Java 慢 (JavaScript ≠ Java)。

而我後來發現了 Rust 程式語言，它是一個十分注重於效能與記憶體安全的程式語言，執行速度也頗快。

---

## 自主學習目標

依自主學習計畫：

1. 瞭解 Rust 程式語言的基本語法
2. 使用 `serenity` 製作由 Rust 製作的 Discord 機器人

- - -

實際執行結果：

1. 瞭解了 Rust 程式語言的基本語法
2. 製作出了<v-click>會 Hello World 的 Discord 機器人</v-click>

---
layout: cover
---

# 酷酷的 Rust 語法

---

## 基本的模版

我們可以先看看這個各位都熟悉的 C++ 程式

````md magic-move
```cpp {*}{lines:true}
#include <iostream>
using namespace std;

int main() {
  cout << "Hello World" << endl;
  return;
}
```

```rust {*}{lines:true}
use std::io;

fn main() {
  println!("Hello World");
}
```
````

<v-click>

由此可知，Rust 其實是一個~~十分優雅的語言~~，它的語法十分簡潔，但又不失強大。

</v-click>

---

## Rust 特別的地方

在 C++ 或是各大語言中，變數宣告後預設還可以改變它的值，但在 Rust 裡面，這個比較不一樣：

````md magic-move
```rust
use std::io;

fn main() {
  let myVaule = 10;

  myVaule = 20;
  // 炸了！會無法編譯

  println!("My value is {}", myVaule);
}
```

```rust
use std::io;

fn main() {
  let mut myVaule = 10;

  myVaule = 20;
  println!("My value is {}", myVaule);
}
```
````

<v-click>
  這樣子我們就可以變更變數的值了！這樣做可以讓 Rust 在管理記憶體上更加的安全也更加的有效率。
</v-click>

---

## Rust 的型別

Rust 是靜態型別的程式語言，代表變數只能擁有一種型別，整數有以下幾種：

|  型別   |   有號  |   無號   |
|--------|---------|---------|
| 8位元	  | `i8`    | `u8`    |
| 16位元  | `i16`   | `u16`   |
| 32位元  | `i32`   | `u32`   |
| 64位元  | `i64`   | `u64`   |
| 128位元 | `i128`  | `u128`  |
| 照 CPU 來看 | `isize` | `usize` |

---

## 聰明的 Rust 編譯器

前一個例子我們舉了加入 `mut 來變更變數的值，我們可以在編譯時看到 `rustc` 給了我們溫馨的提示：

<img src="/images/rust-noneedtomut.png" class="aspect-auto h-36">

這個提示告訴我們，我們其實不需要加上 `mut` 來變更變數的值，因為我們在前面那個範例中只是單純的變更變數的值而已。

Rust 的編譯器會告訴你這個程式碼哪裡會出問題，甚至提供解決方案。

---
layout: cover
---

# Rust Discord 機器人

---

## 使用 Serenity

這邊不贅述太多怎麼用 `cargo`，基本上就是 `cargo add serenity` 就好了。

然後就搞一個基本的程式：

````md magic-move
```rust
use std::env;

use serenity::async_trait;
use serenity::model::channel::Message;
use serenity::prelude::*;
```

```rust
use std::env;

use serenity::async_trait;
use serenity::model::channel::Message;
use serenity::prelude::*;

struct Handler;

#[async_trait]
impl EventHandler for Handler {

  async fn message(&self, ctx: Context, msg: Message) {
    if msg.content == "!ping" {
      if let Err(why) = msg.channel_id.say(&ctx.http, "Pong!").await {
        println!("Error sending message: {why:?}");
      }
    }
  }
}
```
````

---

## 主程式的部分

```rust
// 接續前面的程式碼

#[tokio::main]
async fn main() {
  let token = env::var("DISCORD_TOKEN").expect("Expected a token in the environment");
  let intents = GatewayIntents::GUILD_MESSAGES
    | GatewayIntents::DIRECT_MESSAGES
    | GatewayIntents::MESSAGE_CONTENT;

  let mut client =
    Client::builder(&token, intents).event_handler(Handler).await.expect("Err creating client");

  if let Err(why) = client.start().await {
    println!("Client error: {why:?}");
  }
}
```

---

## 做些小改變

我後來把 `!ping` 改成了 `!help` 加上了 embed，然後改東改西，最後變成了這樣：

<img src="/images/rust-result.png" class="aspect-auto h-36">

---
layout: cover
---

# 阻礙與心得

---

## 阻礙

過程中其實遇到了許多阻礙，像是：

- 根本搞不懂這個東西為什麼要出現在這裡，像是 `&`、`::`、`async`、`await` 等等，還有很玄的 `Result`、`Option`、`Some`、`None` 等等。這些東東使我的腦袋以 50000 RPM 的速度運轉，但還是搞不懂。
- Rust 的編譯器有時候會給我一些奇怪的錯誤訊息，明明都是英文，這些錯誤訊息還是讓我很難理解。
- `env_logger` 很難搞，不確定為什麼怎麼弄它都不會噴出東西來
- `serenity` 的文件有時候寫得很不清楚，但也有可能是我不習慣 Rust docs 的寫法

---

## 心得

我在這次的自主學習中學到了我一直以來十分喜歡的 Rust 程式語言，我也學到了如何使用 `serenity` 這個 Discord 機器人框架。但它畢竟對我來說是一個新的程式語言，有些地方會不習慣，我希望未來可以有寫 Rust 的機會，也希望我可以更加熟練 Rust 的語法。

這邊送一個 Rust... 的吉祥物給各位，是一隻可愛的螃蟹

<img src="/images/rustacean-orig-noshadow.png" class="aspect-auto h-36">

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

---
title: A-Frame 3D webside hand-on
description: A simple A-frame website intro for CLCS
order: 3
language: en
font: mono
---

<!-- .slide: class="cover" data-background-image="/decks/clcs-aframe/background.jpg" data-background-opacity="0.2" -->

# Introduction to A-Frame

<hr>

<small>Presented by **Wolf Yuan**</small>

<small>Inspired by <a href="https://jams.hackclub.com/jam/3d-website">Making 3D Worlds in HTML</a> Jam</small>

<!-- qr -->

## Special guest

It looks like we have a special guest in our class today!

The class will remain in Chinese, but the presentation itself will be in English.

---

## whoami

I'm Wolf Yuan. Currently, a student at CLHS.

Here's something I'm currently doing or done:

- Webmaster at this club, CLCS
- Some contributions to open source projects
- Tech team @ SCINT
- Tech team @ SITCON Camp 2025

---

## Coding experience

I primarily work on these languages:

- Frontend:
  - HTML
  - CSS
  - JavaScript
  - React, Next.js
  - Astro
- Backend:
  - Node.js
  - Python
- Server stuff:
  - Docker
  - Some webserver like nginx, caddy etc.

---

## So... What are we going to do today?

We are going to design a website with a virtual 3D world, please don't worry, the process to build it is straightforward.

We will be using a framework called **A-Frame** to build the website.

---

## Jump into the code, yay!

Please open a folder inside Visual Studio Code.

Create a file named: `index.html` and press `!` in editor, then press enter after this menu comes out:

<p>
  <img src="/decks/shared/html-emmet-init.png" class="image-small">
</p>

> Forgot how to do it? Review the previous [HTML introduction presentation here!](https://presentation.wolf-yuan.dev/clcs-1st-html-basic/)

Start "Live Server," and open `http://localhost:5500/index.html` in your web browser.

![VSCode Live Server](/decks/shared/vscode-live-server-start.png)

---

## Checkpoint

We've done:

- Open a folder inside VSCode
- Created a file named `index.html` inside your folder
- Has a HTML template inside `index.html` by pressing `!` followed by a `Enter` key
- Installed a VSCode extension called `Live Server`
- Started live server and opened `http://localhost:5500/index.html` in your web browser

---

## Adding A-Frame to our website

Open your `index.html` file:

<!-- .slide: data-auto-animate data-auto-animate-id="acbe65ec" -->

<pre data-id="code"><code class="language-html" data-trim data-line-numbers="">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
  &lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;

&lt;body&gt;

&lt;/body&gt;

&lt;/html&gt;</code></pre>

---

<!-- .slide: data-auto-animate data-auto-animate-id="acbe65ec" -->

## Adding A-Frame to our website

Open your `index.html` file:

<pre data-id="code"><code class="language-html" data-trim data-line-numbers="8">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
  &lt;title&gt;Document&lt;/title&gt;
  &lt;script src=&quot;https://aframe.io/releases/1.7.0/aframe.min.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;

&lt;/body&gt;

&lt;/html&gt;</code></pre>

---

## Verify if the A-Frame is working

Add this code inside the `<body>` tag:

<pre><code class="language-html" data-trim data-line-numbers="2-8">&lt;body&gt;
  &lt;a-scene&gt;
    &lt;a-box position=&quot;-1 0.5 -3&quot; rotation=&quot;0 45 0&quot; color=&quot;#4CC3D2&quot;&gt;&lt;/a-box&gt;
    &lt;a-sphere position=&quot;1 1 -3&quot; radius=&quot;1.25&quot; color=&quot;#EF2D5E&quot;&gt;&lt;/a-sphere&gt;
    &lt;a-cylinder position=&quot;0 0.75 -3&quot; radius=&quot;0.5&quot; height=&quot;1.5&quot; color=&quot;#FFC65D&quot;&gt;&lt;/a-cylinder&gt;
    &lt;a-plane position=&quot;0 0 -4&quot; rotation=&quot;-90 0 0&quot; width=&quot;4&quot; height=&quot;4&quot; color=&quot;#7BC8A4&quot;&gt;&lt;/a-plane&gt;
    &lt;a-sky color=&quot;#ECECEC&quot;&gt;&lt;/a-sky&gt;
  &lt;/a-scene&gt;
&lt;/body&gt;</code></pre>

---

## Did you see some 3D objects?

If **_nothing went wrong_**, you should see some 3D objects in your web browser. Like so:

<p>
<img src="/decks/clcs-aframe/images/a-frame.png" class="image-tall image-center">
</p>

> Use your mouse the click and drag to rotate the view.

---

## Checkpoint!

At this point you should have:

- A working A-Frame website
- Some 3D objects inside your website

---

## Adding more shapes

Now, let's add some more shapes to our website.

According to the [official A-Frame documentation](https://aframe.io/docs/1.7.0/introduction/), there are some predefined shapes you can use.

<p>
<img src="/decks/clcs-aframe/images/a-frame-shapes.png" class="image-tall image-center">
</p>

---

Now we can start designing our own 3D world!

Firstly, I will want to remove all shapes from the previous example:

<!-- .slide: data-auto-animate data-auto-animate-id="acbe65ec" -->

<pre data-id="code"><code class="language-html" data-trim data-line-numbers="2-8">&lt;body&gt;
  &lt;a-scene&gt;
    &lt;a-box position=&quot;-1 0.5 -3&quot; rotation=&quot;0 45 0&quot; color=&quot;#4CC3D2&quot;&gt;&lt;/a-box&gt;
    &lt;a-sphere position=&quot;1 1 -3&quot; radius=&quot;1.25&quot; color=&quot;#EF2D5E&quot;&gt;&lt;/a-sphere&gt;
    &lt;a-cylinder position=&quot;0 0.75 -3&quot; radius=&quot;0.5&quot; height=&quot;1.5&quot; color=&quot;#FFC65D&quot;&gt;&lt;/a-cylinder&gt;
    &lt;a-plane position=&quot;0 0 -4&quot; rotation=&quot;-90 0 0&quot; width=&quot;4&quot; height=&quot;4&quot; color=&quot;#7BC8A4&quot;&gt;&lt;/a-plane&gt;
    &lt;a-sky color=&quot;#ECECEC&quot;&gt;&lt;/a-sky&gt;
  &lt;/a-scene&gt;
&lt;/body&gt;</code></pre>

---

<!-- .slide: data-auto-animate data-auto-animate-id="acbe65ec" -->

Now we can start designing our own 3D world!

Firstly, I will want to remove all shapes from the previous example:

<pre data-id="code"><code class="language-html" data-trim data-line-numbers="2-5">&lt;body&gt;
  &lt;a-scene&gt;
    &lt;a-plane position=&quot;0 0 -4&quot; rotation=&quot;-90 0 0&quot; width=&quot;4&quot; height=&quot;4&quot; color=&quot;#7BC8A4&quot;&gt;&lt;/a-plane&gt;
    &lt;a-sky color=&quot;#ECECEC&quot;&gt;&lt;/a-sky&gt;
  &lt;/a-scene&gt;
&lt;/body&gt;</code></pre>

<div class="fragment">

Now we will have a clean world with only the bottom plane and a beautiful sky.

</div>

---

## Adding a box

Now, let's add a box to our world.

<!-- .slide: data-auto-animate data-auto-animate-id="f34f5c99" -->

<pre data-id="code"><code class="language-html" data-trim data-line-numbers="2-5">&lt;body&gt;
  &lt;a-scene&gt;
    &lt;a-plane position=&quot;0 0 -4&quot; rotation=&quot;-90 0 0&quot; width=&quot;4&quot; height=&quot;4&quot; color=&quot;#7BC8A4&quot;&gt;&lt;/a-plane&gt;
    &lt;a-sky color=&quot;#ECECEC&quot;&gt;&lt;/a-sky&gt;
  &lt;/a-scene&gt;
&lt;/body&gt;</code></pre>

---

<!-- .slide: data-auto-animate data-auto-animate-id="f34f5c99" -->

## Adding a box

Now, let's add a box to our world.

<pre data-id="code"><code class="language-html" data-trim data-line-numbers="5">&lt;body&gt;
  &lt;a-scene&gt;
    &lt;a-plane position=&quot;0 0 -4&quot; rotation=&quot;-90 0 0&quot; width=&quot;4&quot; height=&quot;4&quot; color=&quot;#7BC8A4&quot;&gt;&lt;/a-plane&gt;
    &lt;a-sky color=&quot;#ECECEC&quot;&gt;&lt;/a-sky&gt;
    &lt;a-box position=&quot;0 1 -3&quot; rotation=&quot;0 45 0&quot; color=&quot;#4CC3D2&quot;&gt;&lt;/a-box&gt;
  &lt;/a-scene&gt;
&lt;/body&gt;</code></pre>

<div class="fragment">

<p>
<img src="/decks/clcs-aframe/images/a-frame-box.png" class="image-medium image-center">
</p>

</div>

---

## Customizing the box

We now have a box inside our world, but how can we change its color, size and position?

<pre><code class="language-html" data-trim data-line-numbers="">&lt;a-box position=&quot;0 1 -3&quot; rotation=&quot;0 45 0&quot; color=&quot;#4CC3D2&quot;&gt;&lt;/a-box&gt;
&lt;!--             ^ ^ ^^            ^ ^^ ^         ^^^^^^^       --&gt;
&lt;!--             X Y Z             X Y Z      HEX or color name --&gt;
&lt;!--            Position          Rotation         Color        --&gt;</code></pre>

After changing `color` to `#00FF00`, position to `0 0 0`, you should see a green box at the place where you initially enter the world.

<pre><code class="language-html" data-trim data-line-numbers="">&lt;a-box position=&quot;0 0 0&quot; rotation=&quot;0 45 0&quot; color=&quot;#00FF00&quot;&gt;&lt;/a-box&gt;</code></pre>

<p>
<img src="/decks/clcs-aframe/images/a-frame-green-box.png" class="image-small image-center">
</p>

---

## Checkpoint!

At this point you should have:

- A working A-Frame website (IMPORTANT!)
- A plane and a sky
- Probably a box, a triangle, a cylinder or a sphere
- Know how to move the shape around and change the color

> Need some help when positioning the shape?
>
> Press `Ctrl + Alt + I`, this will bring up A-Frame Inspector. You can use this tool to move the shape around and change its color, then use it within your code.
>
> <img src="/decks/clcs-aframe/images/a-frame-inspect.png" class="image-medium">

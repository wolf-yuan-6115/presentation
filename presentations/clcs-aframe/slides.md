---
theme: theme
background: /background.jpg
title: A-Frame 3D webside hand-on
info: A simple A-frame website intro for CLCS
drawings:
  persist: false
transition: slide-left
mdc: true
overviewSnapshots: true
fonts:
  sans: Space Mono
  serif: Space Mono
  mono: JetBrains Mono
sorting: 3
---

# Introduction to A-Frame

<hr>

<small>Presented by **Wolf Yuan**</small>

<small>Inspired by <a href="https://jams.hackclub.com/jam/3d-website">Making 3D Worlds in HTML</a> Jam</small>

---

<QRCodeWrapper href="clcs-aframe"></QRCodeWrapper>

---

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
  <img src="/images/html-emmet-init.png" class="aspect-auto h-36">
</p>

> Forgot how to do it? Review the previous [HTML introduction presentation here!](https://presentation.wolf-yuan.dev/clcs-1st-html-basic/)

Start "Live Server," and open `http://localhost:5500/index.html` in your web browser.

![VSCode Live Server](/images/vscode-live-server-start.png)

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

````md magic-move
```html {*}{lines:true}
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

```html {8}{lines:true}
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="https://aframe.io/releases/1.7.0/aframe.min.js"></script>
</head>

<body>

</body>

</html>
```
````

---

## Verify if the A-Frame is working

Add this code inside the `<body>` tag:

```html {2-8}
<body>
  <a-scene>
    <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D2"></a-box>
    <a-sphere position="1 1 -3" radius="1.25" color="#EF2D5E"></a-sphere>
    <a-cylinder position="0 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
    <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
    <a-sky color="#ECECEC"></a-sky>
  </a-scene>
</body>
```

---

## Did you see some 3D objects?

If ***nothing went wrong***, you should see some 3D objects in your web browser. Like so:

<p>
<img src="/images/a-frame.png" class="aspect-auto h-76 mx-auto">
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
<img src="/images/a-frame-shapes.png" class="aspect-auto h-76 mx-auto">
</p>

---

Now we can start designing our own 3D world!

Firstly, I will want to remove all shapes from the previous example:

````md magic-move
```html {2-8}
<body>
  <a-scene>
    <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D2"></a-box>
    <a-sphere position="1 1 -3" radius="1.25" color="#EF2D5E"></a-sphere>
    <a-cylinder position="0 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
    <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
    <a-sky color="#ECECEC"></a-sky>
  </a-scene>
</body>
```

```html {2-5}
<body>
  <a-scene>
    <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
    <a-sky color="#ECECEC"></a-sky>
  </a-scene>
</body>
```
````

<v-click>

Now we will have a clean world with only the bottom plane and a beautiful sky.

</v-click>

---

## Adding a box

Now, let's add a box to our world.

````md magic-move
```html {2-5}
<body>
  <a-scene>
    <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
    <a-sky color="#ECECEC"></a-sky>
  </a-scene>
</body>
```

```html {5}
<body>
  <a-scene>
    <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
    <a-sky color="#ECECEC"></a-sky>
    <a-box position="0 1 -3" rotation="0 45 0" color="#4CC3D2"></a-box>
  </a-scene>
</body>
```
````

<v-click>

<p>
<img src="/images/a-frame-box.png" class="aspect-auto h-64 mx-auto">
</p>

</v-click>

---

## Customizing the box

We now have a box inside our world, but how can we change its color, size and position?

```html
<a-box position="0 1 -3" rotation="0 45 0" color="#4CC3D2"></a-box>
<!--             ^ ^ ^^            ^ ^^ ^         ^^^^^^^       -->
<!--             X Y Z             X Y Z      HEX or color name -->
<!--            Position          Rotation         Color        -->
```

After changing `color` to `#00FF00`, position to `0 0 0`, you should see a green box at the place where you initially enter the world.

```html
<a-box position="0 0 0" rotation="0 45 0" color="#00FF00"></a-box>
```

<p>
<img src="/images/a-frame-green-box.png" class="aspect-auto h-36 mx-auto">
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
> Press `Ctrl + Alt + I`, this will bring up A-Frame Inspector.
> You can use this tool to move the shape around and change its color, then use it within your code.
> 
> <img src="/images/a-frame-inspect.png" class="aspect-auto h-48">
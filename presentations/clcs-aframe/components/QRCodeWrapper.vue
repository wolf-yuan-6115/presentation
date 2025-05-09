<script setup>
const props = defineProps(["href"]);
import qrcodeVue from "qrcode.vue";

const presentationHref = `https://presentation.wolf-yuan.dev/${props.href}`;
</script>

<template>
  <div class="grid grid-cols-2 gap-4 place-items-center h-full">
    <div>
      <qrcodeVue
        :value="presentationHref"
        :size="300"
        :margin="2"
        level="M"
        render-as="svg"
        background="#1e1e2e"
        foreground="#f9fafb"
      />
    </div>
    <div class="text-center">
      <h1>It's online!</h1>

      <hr />
      <p>
        <span class="text-sm">Visit</span>
        <br />
        <a :href="presentationHref" target="_blank">
          {{ presentationHref }}
        </a>
        <br />
        <span class="text-sm">Or scan the QR code</span>
        <br /><br />
        <small class="text-gray"
          >PDF format doesn't have animations, please use the web version to
          view some of the PDF static files that cannot display the
          animation</small
        >
      </p>
    </div>
  </div>
</template>

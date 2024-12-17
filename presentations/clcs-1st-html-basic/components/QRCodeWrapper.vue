<script setup>
  import qrcodeVue from 'qrcode.vue';

  const presentationHref = window.location.origin + "/" + window.location.pathname.split("/").filter(Boolean)[0];
</script>

<template>
  <div class="grid grid-cols-2 gap-4 place-items-center h-full">
    <div>
      <qrcodeVue
          :value=presentationHref
          size=300
          margin="2"
          level="M"
          render-as="svg"
          background="#1e1e2e"
          foreground="#f9fafb"
      />
    </div>
    <div class="text-center">
      <h1>這個簡報可以線上檢視</h1>

      <hr>
      <p>
        您可以前往
        <br>
        <a :href=presentationHref target="_blank">
          {{presentationHref}}
        </a>
        <br>
        來查看此簡報
        <br><br>
        <small class="text-gray">若您目前正在以 PDF 方式查看，建議您使用網頁版來查看部分 PDF 靜態檔案無法展示出的動畫</small>
      </p>
    </div>
  </div>
</template>

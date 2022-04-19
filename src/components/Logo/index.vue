<template>
  <div class="logo">
    <a
      target="_blank"
      data-cidx="3049"
      data-infostrip_color="#036fd3"
      data-infostrip_title=""
      data-infostrip_activated="false"
      href="http://www.youtube.com/"
      ><img
        alt=""
        src="https://www.kadaza.hk/system/custom_logo_images/3049/original/youtube.gif"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: "Logo",
  props: ["img_url", "href_url", "title"],
};
</script>

<style>
.logo {
  width: 89px;
  height: 79px;
  margin: 0.55%;
}
</style>
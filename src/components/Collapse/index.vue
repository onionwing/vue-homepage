<template>
  <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item title="New" name="1"> </el-collapse-item>
    <div class="logos-wrapper">
      <div class="logo">
        <a
          target="_blank"
          data-cidx="3049"
          data-infostrip_color="#036fd3"
          data-infostrip_title=""
          data-infostrip_activated="false"
          href="http://www.youtube.com/"
          ><img
            alt="YouTube"
            src="https://www.kadaza.hk/system/custom_logo_images/3049/original/youtube.gif"
          />
        </a>
      </div>
    </div>
  </el-collapse>
</template>

<script>
export default {
  name: "Collapse",
};
</script>

<style>
.logo {
  width: 89px;
  height: 79px;
  margin: 0.55%;
}
</style>
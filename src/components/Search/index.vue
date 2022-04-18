<template>
  <div>
    <el-form method="get" >
      <div class="searchbar">
        <div class="search-logo">
          <img
            style="width: 84px; height: 35px"
            src="/searchLogo/baidulogo.png"
            alt=""
          />
        </div>
        <div class="query-input-wrapper">
          <input
            type="text"
            name="query"
            id="query"
            v-model="keyword"
            autocomplete="off"
          />
        </div>
        <div class="input-group-btn">
          <el-select v-model="title">
            <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.title"
              :value="item.title"
            >
            </el-option>
          </el-select>
        </div>
        <div class="input-submit">
          <el-input type="submit" value="Search" @click="goSearch"></el-input>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      keyword: "",
      title: "百度",
      searchUrl: "https://www.baidu.com/s?wd=",
      options: [
        { id: 1, title: "百度", searchUrl: "https://www.baidu.com/s?wd=" },
        {
          id: 2,
          title: "B站",
          searchUrl: "https://search.bilibili.com/all?keyword=",
        },
      ],
    };
  },
  methods: {
    goSearch() {
      let url = this.searchUrl + this.keyword;
    },
  },
};
</script>

<style>
.searchbar {
  position: relative;
  max-width: 800px;
  box-sizing: border-box;
  border-radius: 7px;
  padding: 8px;
  background-color: #fff;
  /*margin: 4px 4px 18px 4px;*/
  margin: 0 4px 0 4px;
  border: 1px solid #ddd;
}
.search-logo {
  float: left;
}
.query-input-wrapper {
  font-size: 16px;
  flex: 1;
  border: 1px solid #d3d3d3;
  margin-left: 1px;
  /*margin-top: 3px;*/
  margin-right: 3px;
  height: 38px;
  float: left;
}
.query-input-wrapper input[type="text"] {
  width: 100%;
  height: 100%;
  border: none;
  line-height: normal;
  padding-left: 3px;
}
.input-group-btn {
  width: 100px;
  text-align: left;
  border-right: none;
  padding-top: 0;
  padding-right: 0;
  height: 38px;
  line-height: 38px;
  background-color: #f6f6f6;
  background-image: none;
  text-shadow: none;
  box-shadow: none;
}

.input-group-btn,
.search-logo,
.elinput,
.input-submit {
  display: inline-block;
  margin: 3px;
}
</style>
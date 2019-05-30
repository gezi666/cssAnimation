<template>
  <div id="app">
    <header>
      <span class="title">表格数据查询</span>
    </header>
    <section class="main">
      <Search/>
    </section>
  </div>
</template>

<script>
import Search from './components/search'

export default {
  name: 'app',
  components: {
    Search
  }
}
</script>

<style>
#app {
  font-family: '微软雅黑', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
header{
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  height: 60px;
  box-shadow: 0px 1px 10px 0px rgba(16, 16, 16, 0.13);
}
.title{
  display: inline-flex;
  width: 960px;
  justify-content: flex-start;
  align-items: center;
  font-size: 22px;
  padding-left: 19px;
}
.main{
  width: 960px;
  margin: 20px auto 0;
  padding: 39px 44px;
  background: #fff;
  box-shadow: 0px 3px 12px 0px rgba(201, 209, 219, 0.7);
}
</style>

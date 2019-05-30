<template>
  <div class="content-wrap">
    <h1 class="dialog-title"><i class="title-ico"></i><span>查询结果</span><i class="title-ico reverse"></i></h1>
      <ul class="result-wrap">
        <li class="result-item inner-item">
          <span class="result-label">数据总数：</span>
          <span class="result">{{result.totalNum}} 人</span>
        </li>
        <li class="result-item">
          <span class="result-label">查询结果（符合查询条件）：</span>
          <span class="result">{{result.fitNum}} 人</span>
        </li>
        <li class="result-item right-line">
          <i class="right inner-item"></i>
          <span class="inner-item">查询完成，查询共耗时</span>
          <span class="total-time">{{result.searchTime}}ms</span>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'resultDialog',
  data(){
    return {
    }
  },
  props: {
    result:{
      type: Object,
      default(){
        return {
          totalNum: '--',
          fitNum: '--',
          searchTime: '--'
        }
      }
    }
  },
  methods:{
  },
  mounted(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .result-wrap{
    margin-top: 40px;
  }
  .result-item{
    font-size: 14px;
  }
  .inner-item{
    margin-bottom: 20px;
  }
  .result-label{
    display: inline-block;
    width: 50%;
    text-align: right;
  }
  .result{
    display: inline-block;
    width: 50%;
    text-align: left;
    padding-left: 15px;
  }
  .right-line{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 38px;
  }
  i.right{
    display: inline-block;
    height: 56px;
    width: 56px;
    background: url('../assets/img/complete-ico2.png') right bottom no-repeat;
  }
</style>

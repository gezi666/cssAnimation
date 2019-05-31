<template>
  <div class="state">
    <span class="flag" v-if="state===1">查询中
      <span class="ico-wrap">
        <i class="ico search"></i>
      </span>
    </span>
    <span class="flag" v-else-if="state===2">成功<i class="ico complite"></i></span>
    <span class="flag" v-else>就绪</span>
  </div>
</template>

<script>
export default {
  name: 'searchState',
  props: {
    state:{
      type: Number,
      default: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .state{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 70px;
  }
  .flag{
    display: inline-flex;
    align-items: center;
  }
  .ico-wrap{
    transform-origin: 70% 50%;
    animation: search 1s linear infinite;
  }
  @keyframes search 
  {
    from {transform: rotate(0deg)}
    to {transform: rotate(360deg)}
  }
  i.ico{
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: 10px;
  }
  i.search{
    background: url('../assets/img/search-ico.png') center no-repeat;
    animation:inherit;
    animation-direction: reverse;
  }
  i.complite{
    background: url('../assets/img/complete-ico.png') center no-repeat;
  }
</style>

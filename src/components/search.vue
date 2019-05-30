<template>
  <div class="wrap">
    <ul class="types-wrap">
      <li class="types-item">
        <p class="label-line">数据总量说明</p>
        <div class="list-wrap">
          <p class="list-item total-item family-item">
            <span class="total-label family-num">A表总数（户）</span>
            <!-- <span class="total-num">{{familyNum}}</span> -->
            <span class="total-num">
              <count-to :startVal='0' :endVal='familyNum' :duration=2000></count-to>
            </span>
          </p>
          <p class="list-item total-item person-item">
            <span class="total-label person-num">B表总数（人）</span>
            <!-- <span class="total-num">{{personNum}}</span> -->
            <span class="total-num">
              <count-to :startVal='0' :endVal='personNum' :duration=2000></count-to>
            </span>
          </p>
        </div>
      </li>
      <li class="types-item">
        <p class="label-line">单表查询（B表）</p>
        <div class="list-wrap table-wrap">
          <div class="list-item search-item">
            <span class="label">查询模板1：全表***总人数</span>
            <el-button type="primary" size="small" @click="search('family')">查询</el-button>
            <p class="state-wrap">
              <span class="time">{{familySearchTime}}ms</span>
              <search-state :state="familySearchState" />
            </p>
          </div>
          <div class="list-item search-item">
            <span class="label">查询模板2：全表*****总人数</span>
            <el-button type="primary" size="small" @click="search('person')">查询</el-button>
            <p class="state-wrap">
              <span class="time">{{personSearchTime}}ms</span>
              <search-state :state="personSearchState" />
            </p>
          </div>
        </div>
      </li>
      <li class="types-item">
        <p class="label-line">跨表查询（A表、B表）</p>
        <div class="list-wrap table-wrap">
          <div class="list-item search-item">
            <span class="label">查询模板1：A表出生人口数与B表出生人数不一致的总户数</span>
            <el-button type="primary" size="small" @click="search('cross')">查询</el-button>
            <p class="state-wrap">
              <span class="time">{{crossSearchTime}}ms</span>
              <search-state :state="crossSearchState" />
            </p>
          </div>
        </div>
      </li>
      <li class="types-item">
        <p class="label-line">自定义查询</p>
        <div class="list-wrap table-wrap">
          <div class="list-item search-item">
            <span class="label select" @click="showTip(null,1)">选择指标</span>
            <el-button type="primary" size="small" @click="search('diy')">查询</el-button>
            <p class="state-wrap">
              <span class="time">{{diySearchTime}}ms</span>
              <search-state :state="diySearchState" />
            </p>
          </div>
        </div>
      </li>
    </ul>
    <!-- 弹框 -->
    <el-dialog
      :visible.sync="dialogVisible"
      :custom-class="customClass">
      <result-dialog :result="resultObj" v-if="dialogFlag === 0" />
      <select-dialog :result="resultObj" v-if="dialogFlag === 1" />
    </el-dialog>
  </div>
</template>

<script>
import searchState from './searchState'
import resultDialog from './resultDialog'
import selectDialog from './selectDialog'
import countTo from 'vue-count-to'
import { setTimeout, setInterval, clearInterval } from 'timers'
export default {
  name: 'search',
  components: {
    searchState,
    resultDialog,
    selectDialog,
    countTo
  },
  data(){
    return {
      familyNum: 223452,
      personNum: 134543804,
      familySearchTime: 0,
      familySearchState: 0,
      personSearchTime: 0,
      personSearchState: 0,
      crossSearchTime: 0,
      crossSearchState: 0,
      diySearchTime: 0,
      diySearchState: 0,
      dialogVisible: false,
      resultObj:{
        totalNum: '223,452,345',
        fitNum: '223,452,34',
        searchTime: 466
      },
      dialogFlag: 0       // 0-查询结果弹框；1-选择指标弹框
    }
  },
  computed:{
    customClass(){
      if (this.dialogFlag === 1){
        return "tip-dialog select-dialog"
      } else {
        return "tip-dialog"
      }
    }
  },
  methods:{
    /**
     * 查询
     * @params {String} type  查询类型
     */
    search(type){
      if (!type) return
      switch (type) {
      case "family":
        this.getResult("family")
        break
      case "person":
        this.getResult("person")
        break
      case "cross":
        this.getResult("cross")
        break
      case "diy":
        this.getResult("diy")
        break
      default:
        break
      }
    },
    /**
     * 按条件查询结果
     * @params {String} type  查询类型
     */
    getResult(type){
      let state = `${type}SearchState`
      let time = `${type}SearchTime`
      let self = this

      let intervalTime = Math.floor(Math.random() * 3000)
      let randomTotalNum = Math.floor(Math.random() * 100000)
      let randomFitNum = Math.floor(Math.random() * 100000)

      self[state] = 1
      self[time] = 0

      const timer = setInterval(()=>{
        self[time] += 4
      })

      setTimeout(()=>{
        self[state] = 2
        clearInterval(timer)
        self[time] = intervalTime
        this.showTip({
          totalNum: randomTotalNum,
          fitNum: randomFitNum,
          searchTime: self[time]
        })
      }, intervalTime)
    },
    /**
     * 查询完成提示框
     * @params {Object} obj 提示框显示信息
     * @params {Number} dialogType 提示框类型  0-查询结果弹框；1-选择指标弹框
     */
    showTip(obj, dialogType = 0){
      this.dialogFlag = dialogType ? 1 : 0
      this.dialogVisible = true
      if (obj){
        this.resultObj = {
          totalNum: obj.totalNum,
          fitNum: obj.fitNum,
          searchTime: obj.searchTime
        }
      }
    }
  },
  mounted(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .wrap,.types-wrap{
    width: 100%;
  }
  .types-item{
    margin-bottom: 36px;
  }
  .label-line{
    text-align: left;
    font-size: 16px;
    color: #444f5c;
    margin-bottom: 21px;
    padding-left: 22px;
    background: url('../assets/img/list-ico.png') left center no-repeat;
  }
  .list-wrap{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .table-wrap{
    flex-direction: column;
  }
  .list-item{
    box-shadow: 0px 3px 12px 0px rgba(201, 209, 219, 0.5);
  }
  .total-item{
    margin-right: 63px;
    width: 300px;
    height: 100px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .total-item:last-child{
    margin-right: 0
  }
  .total-label{
    font-size: 14px;
    color: #098dff;
  }
  .family-item{
    background: url('../assets/img/label-ico1.png') right bottom no-repeat;
  }
  .person-item{
    background: url('../assets/img/label-ico2.png') right bottom no-repeat;
  }
  .person-num{
    color: #0cab77;
  }
  .total-num{
    font-size: 30px;
  }
  .search-item{
    width: 800px;
    height: 56px;
    flex: none;
    margin-bottom: 21px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .search-item:last-child{
    margin-bottom: 0
  }
  .search-item .label{
    display: inline-block;
    width: 380px;
    text-align: left;
  }
  .time{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 75px;
    margin-right: 50px;
  }
  span.select{
    color: #409eff;
    cursor: pointer;
    transition: all .1s;
  }
  span.select:hover{
    color: #66b1ff;
  }
  .el-dialog__wrapper{
    overflow: hidden;
  }
  .tip-dialog{
    margin: 0 auto;
    width: 646px !important;
    height: 430px !important;
    margin-top: 50vh !important;
    transform: translateY(-50%) !important;
  }
  .select-dialog{
    width: 834px !important;
    height: 472px !important;
  }
  .el-dialog__body{
    padding: 10px 20px;
  }
  .el-icon-close{
    font-size: 21px;
    font-weight: bold;
  }
  .dialog-title{
    font-size: 16px;
    font-weight: normal;
  }
  .dialog-title span{
    margin: 0 10px;
  }
  i.title-ico{
    display: inline-block;
    width: 190px;
    height: 6px;
    background: url('../assets/img/title-ico.png') center no-repeat;
  }
  i.reverse{
    transform: rotateY(180deg);
  }
</style>

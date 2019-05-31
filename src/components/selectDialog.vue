<template>
  <div class="content-wrap">
    <h1 class="dialog-title"><i class="title-ico"></i><span>设置查询条件</span><i class="title-ico reverse"></i></h1>
    <ul class="tab">
      <li :class="['tab-item', {'active':currentIndex===index}]" v-for="(item, index) in ['A表', 'B表']" :key="index" @click="changeTable(index)">{{item}}</li>
    </ul>
    <ul class="select-wrap">
      <li class="select-item" v-for="(item, index) in conditionList.length" :key="`c${index}`">
        <section class="left-wrap">
          <el-select clearable v-if="index>0" v-model="conditionList[index].logic1" placeholder="请选择逻辑关系">
            <el-option
              v-for="item in logicList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select clearable v-model="conditionList[index].target" placeholder="请选择指标">
            <el-option
              v-for="item in targetList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select clearable v-model="conditionList[index].logic2" placeholder="请选择逻辑关系">
            <el-option
              v-for="item in logicList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-input v-model="conditionList[index].input" placeholder="请输入内容"></el-input>
        </section>
        <p class="option-wrap">
          <span class="option-item add" v-if="index<4" @click="addLine(index)">增加</span>
          <span class="option-item" v-if="index!==0" @click="delLine(index)">删除</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'selectDialog',
  data(){
    return {
      currentIndex:0,   // 0-A表;1-B表
      logicList:[
        {
          value: "and",
          label: "并且（and）"
        },
        {
          value: "or",
          label: "或者（or）"
        }
      ],
      targetList:[
        {
          value: "年龄",
          label: "年龄"
        },
        {
          value: "籍贯",
          label: "籍贯"
        },
        {
          value: "婚姻状况",
          label: "婚姻状况"
        }
      ],
      conditionList:[
        {
          logic1:"",
          target:"",
          logic2:"",
          input:""
        }
      ]
    }
  },
  props: {
    result:{
    }
  },
  methods:{
    /**
     * 切换表
     * @params {Number}  index  增加行索引
     */
    changeTable(index){
      this.currentIndex = index
      this.conditionList.splice(0, this.conditionList.length, {
        logic1:"",
        target:"",
        logic2:"",
        input:""
      })
    },
    /**
     * 增加行
     * @params {Number}  index  增加行索引
     */
    addLine(index){
      if (this.conditionList.length === 5) return
      this.conditionList.splice(index + 1, 0, {
        logic1:"",
        target:"",
        logic2:"",
        input:""
      })
    },
    /**
     * 增加行
     * @params {Number}  index  删除行索引
     */
    delLine(index){
      this.conditionList.splice(index, 1)
    }
  },
  mounted(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tab{
    display: flex;
    width: 96px;
    margin: 20px auto 40px;
    border-bottom: 1px solid #dcdcdc;
  }
  .tab-item{
    position: relative;
    cursor: pointer;
    flex: auto;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-top: 1px;
    font-size: 16px;
    transition: all .1s;
  }
  .tab-item.active,
  .tab-item:hover{
    color: #409eff;
  }
  .tab-item.active:after{
    position: absolute;
    content: '';
    right: 0;
    left: 0;
    bottom: -1px;
    height: 2px;
    background: #098dff;
  }
  .select-item{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .select-item div[class^='el-']{
    margin-right: 10px;
    width: 168px;
    flex: none;
  }
  .option-wrap{
    display: flex;
    width: 74px;
    justify-content: flex-start;
    align-items: center;
  }
  .option-item{
    color: #409eff;
    cursor: pointer;
    transition: all .1s;
  }
  .option-item:hover{
    color: #66b1ff;
  }
  .option-item.add{
    margin-right: 15px;
  }
</style>

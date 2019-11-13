<!--
 * @作用: 
 * @Author: xufanghe
 * @Date: 2019-11-13 10:56:22
 * @LastEditors: xufanghe
 * @LastEditTime: 2019-11-13 15:24:30
 -->
<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>信息统计</el-breadcrumb-item>
      <el-breadcrumb-item>巡检记录统计</el-breadcrumb-item>
    </el-breadcrumb>

    <!--查询  -->

    <!-- 显示列表 -->
    <el-table :data="tableData"
              stripe
              style="width: 100%">
      <el-table-column type="index"></el-table-column>

      <el-table-column prop="name"
                       label="任务编号"
                       width="180">
      </el-table-column>
      <el-table-column prop="date"
                       label="发现时间"
                       width="180">
      </el-table-column>
      <el-table-column prop="address"
                       label="缺陷描述">
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
                   :current-page="currentPage4"
                   :page-sizes="[1, 5, 6, 10]"
                   :page-size="100"
                   layout="total, sizes, prev, pager, next, jumper"
                   :total="40">
    </el-pagination>
  </div>

</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }

  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
    }
  }

}
</script>

<style lang=less scoped>
.el-input {
}
</style>
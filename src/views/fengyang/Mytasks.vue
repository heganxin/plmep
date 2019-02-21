<template>
    <div class="app-container">
      <el-card class="box-card">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column show-overflow-tooltip="true"  prop="name"  :label="$t('table.name')" width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true"  prop="theme"  :label="$t('table.theme')" width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.theme}}</span>
          </template>
        </el-table-column>
        <el-table-column show-overflow-tooltip="true"  sortable prop="state"  :label="$t('table.state')" width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.state}}</span>
          </template>
        </el-table-column>
        <el-table-column show-overflow-tooltip="true" prop="tasksType"  :label="$t('table.tasksType')" width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.tasksType}}</span>
          </template>
        </el-table-column>
        <el-table-column show-overflow-tooltip="true"  sortable prop="allocated"  :label="$t('table.allocated')" width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.allocated}}</span>
          </template>
        </el-table-column>
        <el-table-column show-overflow-tooltip="true"  prop="context"  :label="$t('table.context')" width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.context}}</span>
          </template>
        </el-table-column>
        <el-table-column show-overflow-tooltip="true"  prop="role"  :label="$t('table.role')" width="180">
          <template
            slot-scope="scope">
            <span>{{scope.row.role}}</span>
          </template>
        </el-table-column>
      </el-table>
      </el-card>
    </div>
</template>
<script>export default {
  name: 'HelloWorld',
  mounted: function () {
  },
  methods: {},
  data () {
    return {
      tableData: [{
        name: '提交封样资料',
        theme: '美国GAO武器系统物料环保资料',
        state: '正在工作',
        tasksType: '潜在的',
        context: '龙旗封样库',
        role: '供应商封样接口人',
        allocated: '2019-11-02 14:00:25'
      }, {
        name: '提交封样资料',
        theme: '萨德反导系统',
        state: '正在工作',
        tasksType: '潜在的',
        context: '龙旗封样库',
        role: '供应商封样接口人',
        allocated: '2019-02-02 11:02:25'
      }]
    }
  }
}
</script>

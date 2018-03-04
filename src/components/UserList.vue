<template>
  <div class="flex-container">
    <div class="person-list">
    <div class="loading" v-if="loading">
      Loading...
    </div>
    <router-link :to="{ name: 'user_detail', params: { isNew: true, editingPerson: {id: '', name: '', email: ''} }}">
      New Item
    </router-link>
    <el-table
      :data="tableData"
      style="width: 100%">
        <el-table-column
          label="姓名"
          width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="地址"
          width="240">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.name }}</p>
              <p>email: {{ scope.row.email }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.email }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>

import UserService from '../services/UserService.js'
import MsgBox from '../utils/MsgBox.js'

export default {
  name: 'PersonList',
  data() {
    return {
      loading: false,
      tableData: []
    }            
  },
  created () {
    this.fetchData()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  methods: {
    fetchData() {
      this.loading = true
      UserService.findAll(
        response => {
          this.tableData.splice(0, this.tableData.length)
          for(var i in response.data) {
            this.tableData.push(response.data[i])
          }
          this.loading = false
        },
        error => {
          this.loading = false
        }
      )
    },
    handleEdit(index, row) {
      const param = {
        isNew: false,
        editingPerson: {
          id: row.id,
          name: row.name,
          email: row.email
        }
      }
      this.$router.push({ name: 'user_detail', params: param})
    },
    handleDelete(index, row) {
      MsgBox.show(this, () => {
        const id = row.id
        UserService.deleteUser(id,
          response => {
            this.tableData = this.tableData.filter(a => a.id != id)
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          }
        )
      },
      () => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });  
      })
    }
  }
}
</script>

<style scoped>

.flex-container {
    display: -webkit-flex;
    display: flex;
}

.person-list {
  width: 80%;
  margin: auto;
}

</style>

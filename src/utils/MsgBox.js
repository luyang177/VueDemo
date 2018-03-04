
export default {
  show(self, confirmCallback, cancelCallback) {
    self.$confirm('此操作将永久删除, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      confirmCallback()
    }).catch(() => {
      cancelCallback()         
    });
  }
}
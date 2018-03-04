<template>
  <div style="text-align: center;"> 
    <h1>{{title}}</h1>
    <form>
      Name <br>
      <input type="text" v-model="editingPerson.name"><br>
      Email <br>
      <input type="text" v-model="editingPerson.email"><br>
    </form>
    <button v-if="isNew" @click="onAdd">Add</button>
    <button v-if="!isNew" @click="onEdit">Edit</button>
    <router-link :to="{ name: 'user_list'}">View List</router-link>
  </div>
</template>

<script>

import UserService from '../services/UserService.js'

export default {
  name: "PersonDetail",
  props: {
    isNew: Boolean,
    editingPerson: {
      type: Object,
      default() {
        return {
          id: '',
          name: '',
          email: ''
        }
      }
    }
  },
  computed: {
    title: function () {
      return this.isNew ? "New" : "Edit"
    }
  },
  methods: {
    onAdd: function (event) {
      UserService.addUser(this.editingPerson)
      this.$router.push({ name: 'user_list'})
    },
    onEdit: function (event) {
      UserService.editUser(this.editingPerson)
      this.$router.push({ name: 'user_list'})
    },
  }
}
</script>

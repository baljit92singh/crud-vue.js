// Index.vue

<template>
  <div>
    <h1>List</h1>

    <table class="table table-hover">
      <thead>
        <tr>
          <td>ID</td>
          <td>Title</td>
          <td>Body</td>
          <td>Actions</td>
          <td></td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.body }}</td>
          <td>
            <router-link :to="{name: 'Edit', params: { id: item.id }}" class="btn btn-primary">Edit</router-link>
          </td>
          <td>
            <button class="btn btn-danger" v-on:click="deleteItem(item.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: []
    };
  },

  created: function() {
    this.fetchItems();
  },

  methods: {
    fetchItems() {
      let uri = "https://jsonplaceholder.typicode.com/posts";
      this.axios.get(uri).then(response => {
        this.items = response.data;
      });
    },
    deleteItem(id) {
      let uri = "https://jsonplaceholder.typicode.com/posts/" + id;
      this.items.splice(id, 1);
      this.axios.get(uri);
    }
  }
};
</script>
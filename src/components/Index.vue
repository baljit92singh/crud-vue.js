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
            <router-link
              :to="{ name: 'Edit', params: { id: item.id } }"
              class="btn btn-primary"
              >Edit</router-link
            >
          </td>
          <td>
            <button class="btn btn-danger" v-on:click="deleteItem(item.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  mounted() {
    this.$store.dispatch("loadItems");
  },
  computed: mapState(["items"]),
  methods: {
    deleteItem(id) {
      this.$store
        .dispatch("deleteItem", id)
        .then(res => {
          console.log(res);
          this.$toasted.show("Deleted successfully!", {
            theme: "bubble",
            position: "top-right",
            duration: 5000
          });
        })
        .catch(err => console.log(err));
    }
    // deleteItem(id) {
    //   let uri = "https://jsonplaceholder.typicode.com/posts/" + id;
    //   // this.items.splice(id, 1);
    //   this.axios.get(uri);
    //   const index = this.itemsList.findIndex(order => order.id === id);
    //   this.itemsList.splice(index, 1);
    //   this.$toasted.show("Deleted successfully", {
    //     theme: "bubble",
    //     position: "top-right",
    //     duration: 5000
    //   });
    // }
  }
};
</script>

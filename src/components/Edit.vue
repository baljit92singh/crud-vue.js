// Edit.vue

<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Edit</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="updateItem">
          <div class="form-group">
            <label>Title:</label>
            <input type="text" class="form-control" v-model="item.title" />
          </div>
          <div class="form-group">
            <label>Body:</label>
            <input type="text" class="form-control" v-model="item.body" />
          </div>
          <div class="form-group">
            <div class="set_button">
              <input type="submit" class="btn btn-primary" value="Update" />
              <router-link :to="{ name: 'Index' }" class="nav-link"
                >Cancel</router-link
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      item: {}
    };
  },

  created: function() {
    this.getItem();
  },

  methods: {
    getItem() {
      let uri =
        "https://jsonplaceholder.typicode.com/posts/" + this.$route.params.id;
      this.axios.get(uri).then(response => {
        this.item = response.data;
      });
    },
    updateItem() {
      let uri =
        "https://jsonplaceholder.typicode.com/posts/" + this.$route.params.id;
      this.axios.put(uri, this.item).then(response => {
        console.log(response);
        this.$router.push({ name: "Index" });
      });
    }
  }
};
</script>

<style scoped>
.set_button {
  display: flex;
  flex-wrap: wrap;
}
</style>

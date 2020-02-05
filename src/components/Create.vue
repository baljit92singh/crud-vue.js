<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Add</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="addItem">
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
              <input type="submit" class="btn btn-primary" value="Add" />
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
  components: {},
  data() {
    return {
      item: {
        title: "",
        body: ""
      }
    };
  },
  methods: {
    // setNewTodo(e) {
    //   this.$store.dispatch("setNewTodo", e.target.value);
    // },
    addItem() {
      // console.log(this.item);
      // this.$store.dispatch("addItems", this.item);
      // // this.$store.dispatch("clearNewTodo");
      // this.item = {};
      console.log(this.item);
      let uri = "https://jsonplaceholder.typicode.com/posts";
      this.axios.post(uri, this.item).then(response => {
        console.log(response.data);
        this.item = {};
        this.$toasted.show("Added successfully!", {
          theme: "bubble",
          position: "top-right",
          duration: 5000
        });
      });
    }
    // computed: {
    //   newItem() {
    //     return this.$store.getters.newItem;
    //   },
    //   itemsList() {
    //     return this.$store.getters.items;
    //   }
    // }
  }
};
</script>

<style scoped>
.set_button {
  display: flex;
  flex-wrap: wrap;
}
</style>

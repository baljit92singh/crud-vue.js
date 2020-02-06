import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //data
    items: [],
    newItem: {
      title: "",
      body: ""
    },
    loading: false
  },
  getters: {},
  mutations: {
    // Used for the changing the state
    startLoading(state) {
      state.loading = true;
    },
    stopLoading(state) {
      state.loading = false;
    },
    SET_ITEMS_LIST(state, items) {
      state.items = items;
    },
    ADD_ITEM_TO_LIST(state, items) {
      console.log(state, items);
      state.items.push(items);
    },
    UPDATE_ITEM_TO_LIST(state, items) {
      console.log(state, items);
      // console.log(state.items);
      // let updateItem = state.items.find(a => a.id === items.data.id);
      // console.log(updateItem);
      // let index = state.items.indexOf(updateItem);
      // state.items[index].push(items);
    },
    DELETE_ITEM_TO_LIST(state, items) {
      console.log(state, items);
    }
  },
  actions: {
    //load items methods
    loadItems({ commit }) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(r => r.data)
        .then(items => {
          commit("SET_ITEMS_LIST", items);
        });
    },
    addItem(context, data) {
      console.log(context, data);
      axios
        .post("https://jsonplaceholder.typicode.com/posts", data)
        .then(response => {
          context.commit("ADD_ITEM_TO_LIST", response);
          // state.tasks = response.data.data;
        });
    },
    updateItem(context, data) {
      console.log(context, data);
      axios
        .put("https://jsonplaceholder.typicode.com/posts/" + data.id, data)
        .then(response => {
          context.commit("UPDATE_ITEM_TO_LIST", response);
          // state.tasks = response.data.data;
        });
    },
    deleteItem(context, id) {
      axios
        .delete("https://jsonplaceholder.typicode.com/posts/" + id)
        .then(response => {
          context.commit("DELETE_ITEM_TO_LIST", response);
          // state.tasks = response.data.data;
        });
    }
  },
  modules: {}
});

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
    }
  },
  getters: {
    newItem: state => state.newItem,
    items: state => state.items
  },
  mutations: {
    // Used for the changing the state
    SET_ITEMS_LIST(state, items) {
      state.items = items;
    },
    ADD_ITEMS_LIST(state, todoObject) {
      console.log(state, todoObject);
      state.items.push(todoObject);
    }
    // CLEAR_NEW_ITEM(state) {
    //   state.newItem = "";
    // }
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
    addItems({ commit, state }) {
      console.log(commit, state);
      // if (!state.newItem) {
      //   // do not add empty newItem
      //   return;
      // }
      // const todo = {
      //   title: state.title,
      //   body: state.body,
      //   // completed: false
      // };
      // console.log(todo);
      axios
        .get("https://jsonplaceholder.typicode.com/posts", state.newItem)
        .then(r => r.data)
        .then(items => {
          commit("ADD_ITEMS_LIST", items);
        });
    }
    // clearNewTodo({ commit }) {
    //   commit("CLEAR_NEW_ITEM");
    // }
  },
  modules: {}
});

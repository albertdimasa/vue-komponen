import Vue from "vue";
import Vuex from "vuex";
import CreatePerState from "vuex-persistedstate";

Vue.use(Vuex);

const perstate = CreatePerState({
  state: ["name", "listTodo", "hapusTodo", "editTodo"],
});

export default new Vuex.Store({
  plugins: [perstate],
  state: {
    name: "",
    listTodo: [],
  },
  getters: {},
  mutations: {
    setName(state, payload) {
      state.name = payload;
    },
    tambahTodo(state, payload) {
      if (payload != "") {
        state.listTodo.push(payload);
      } else {
        alert("Data tidak boleh kosong");
      }
    },
    hapusTodo(state, payload) {
      state.listTodo = state.listTodo.filter((item, id) => id != payload);
    },
    editTodo(state, index, payload) {
      if (payload != "") {
        state.listTodo.map((item, id) =>
          id === index ? console.log(index, " - ", item, " - ", payload) : ""
        );
      } else {
        alert("Data baru tidak boleh kosong");
      }
    },
  },
  actions: {
    changeName(store, payload) {
      store.commit("setName", payload);
    },
    tambahTodo(store, payload) {
      store.commit("tambahTodo", payload);
    },
    hapusTodo(store, payload) {
      store.commit("hapusTodo", payload);
    },
    editTodo(store, index, payload) {
      console.log(payload);
      store.commit("editTodo", index, payload);
    },
  },
  modules: {},
});

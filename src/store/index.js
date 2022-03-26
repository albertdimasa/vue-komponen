import Vue from "vue";
import Vuex from "vuex";
import CreatePerState from "vuex-persistedstate";

Vue.use(Vuex);

const PerState = CreatePerState({
  state: ["name", "listTodo", "baruTodo"],
});

export default new Vuex.Store({
  plugins: [PerState],
  state: {
    name: "",
    baruTodo: "",
    listTodo: [],
  },
  getters: {},
  mutations: {
    setName(state, payload) {
      state.name = payload;
    },
    setBaruTodo(state, payload) {
      state.baruTodo = payload;
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
    editTodo(state, index) {
      if (state.baruTodo != "") {
        state.listTodo.map((item, id) =>
          id === index ? Vue.set(state.listTodo, id, state.baruTodo) : ""
        );
      } else {
        alert("Data input baru tidak boleh kosong");
      }
    },
  },
  actions: {
    changeName(store, payload) {
      store.commit("setName", payload);
    },
    tambahTodo(store, todoBaru) {
      store.commit("tambahTodo", todoBaru);
    },
    hapusTodo(store, index) {
      store.commit("hapusTodo", index);
    },
    editTodoValue(store, value) {
      store.commit("setBaruTodo", value);
    },
    editTodo(store, index) {
      store.commit("editTodo", index);
    },
  },
  modules: {},
});

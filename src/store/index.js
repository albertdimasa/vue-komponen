import Vue from "vue";
import Vuex from "vuex";
import CreatePerState from "vuex-persistedstate";

Vue.use(Vuex);

const PerState = CreatePerState({
  state: ["listTodo", "baruTodo", "baruDesc"],
});

export default new Vuex.Store({
  plugins: [PerState],
  state: {
    baruTodo: "",
    baruDesc: "",
    listTodo: [],
  },
  getters: {},
  mutations: {
    setBaruTodo(state, payload) {
      state.baruTodo = payload;
    },
    setBaruDesc(state, payload) {
      state.baruDesc = payload;
    },
    tambahTodo(state, payload) {
      if (payload != "") {
        state.listTodo.push({
          title: payload,
          desc: "Belum ada deskripsi nih",
        });
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
          id === index
            ? Vue.set(state.listTodo, id, {
                title: state.baruTodo,
                desc: state.listTodo[id].desc,
              })
            : ""
        );
      } else {
        alert("Data input baru tidak boleh kosong");
      }
    },
    editDesc(state, index) {
      if (state.baruDesc != "") {
        state.listTodo.map((item, id) =>
          id === index
            ? Vue.set(state.listTodo, id, {
                title: state.listTodo[id].title,
                desc: state.baruDesc,
              })
            : ""
        );
      } else {
        alert("Data deskripsi baru tidak boleh kosong");
      }
    },
  },
  actions: {
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
    editDescValue(store, value) {
      store.commit("setBaruDesc", value);
    },
    editDesc(store, index) {
      store.commit("editDesc", index);
    },
  },
  modules: {},
});

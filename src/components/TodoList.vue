<template>
  <div id="todolist">
    <ol>
      <TodoListItem
        v-for="(Todo, index) in listTodo"
        :key="index"
        :todo="Todo"
        :index="index"
        @edit-list-baru="editBaru"
        @hapus-list="hapusList"
      />
    </ol>
    <div class="tambahInput">
      <input type="text" v-model="userTodo" />
      <button @click="tambahTodo">Tambahkan</button>
    </div>

    <TextHebat :list-todo="listTodo.length >= 5" />
  </div>
</template>

<script>
import TodoListItem from "@/components/TodoListItem.vue";
import TextHebat from "@/components/TextHebat.vue";

export default {
  name: "TodoList",
  components: {
    TodoListItem,
    TextHebat,
  },
  data() {
    return {
      listTodo: [],
      userTodo: "",
    };
  },

  methods: {
    tambahTodo() {
      if (this.userTodo != "") {
        this.listTodo.push(this.userTodo);
        this.userTodo = "";
      } else {
        alert("Data tidak boleh kosong");
      }
    },
    hapusList(index) {
      this.listTodo = this.listTodo.filter((item, id) => id != index);
    },

    //Hasil sudah benar tapi tidak langsung ke load
    editBaru(index, value) {
      if (value != "") {
        this.listTodo.map((item, id) =>
          id === index ? (this.listTodo[id] = value) : ""
        );
      } else {
        alert("Data baru tidak boleh kosong");
      }
    },
  },
};
</script>
<style scoped>
input {
  width: 80%;
}
button {
  margin-left: 20px;
  padding: 3px;
}
.tambahInput {
  margin-top: 25px;
  width: 100%;
  display: flex;
}
</style>

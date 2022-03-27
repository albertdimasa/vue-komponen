<template>
  <div>
    <ol>
      <TodoListItem
        v-for="(Todo, index) in listTodoNow"
        :key="index"
        :todo="Todo"
        :index="index"
        @edit-list-baru="editBaru"
        @edit-list-value="editValue"
        @hapus-list="hapusList"
      />
    </ol>
    <div class="tambahInput">
      <input type="text" v-model="userTodo" @keyup.enter="todoBaru" />
      <button @click="todoBaru">Tambahkan</button>
    </div>

    <TextHebat :list-todo="listTodoNow.length >= 5" />
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
      userTodo: "",
    };
  },
  computed: {
    listTodoNow() {
      return this.$store.state.listTodo;
    },
  },
  methods: {
    todoBaru() {
      this.$store.dispatch("tambahTodo", this.userTodo);
      this.userTodo = "";
    },

    hapusList(index) {
      this.$store.dispatch("hapusTodo", index);
    },

    editBaru(index) {
      this.$store.dispatch("editTodo", index);
    },

    editValue(value) {
      this.$store.dispatch("editTodoValue", value);
    },
  },
};
</script>
<style scoped>
input {
  width: 100%;
  text-transform: capitalize;
}
button {
  margin-left: 10px;
  padding: 3px;
}
.tambahInput {
  margin-top: 25px;
  width: 100%;
  display: flex;
}
</style>

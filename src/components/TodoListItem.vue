<template>
  <li>
    <label v-if="!editMode" @click="oneTodo"> {{ todo.title }} </label>

    <input
      v-if="editMode"
      v-model="inputEdited"
      @keyup.enter="editListBaru(index)"
    />

    <span class="allButton">
      <button v-if="!editMode" @click="editList">Edit</button>
      <button v-if="!editMode" @click="hapusList(index)">Hapus</button>
      <button v-if="editMode" @click="editListBaru(index)">Input Edit</button>
    </span>
  </li>
</template>
<script>
export default {
  name: "TodoListItem",
  data() {
    return {
      inputEdited: "",
      editMode: false,
    };
  },
  props: {
    todo: Object,
    index: Number,
  },

  mounted() {
    this.inputEdited = this.todo.title;
  },

  watch: {
    todo(value) {
      this.inputEdited = value.title;
    },
  },

  methods: {
    editList() {
      this.editMode = !this.editMode;
    },
    hapusList(index) {
      this.$emit("hapus-list", index);
    },
    editListBaru(index) {
      this.editListValue();
      this.$emit("edit-list-baru", index);
    },
    editListValue() {
      this.$emit("edit-list-value", this.inputEdited);
      this.editList();
    },
    oneTodo() {
      this.$router.push({
        name: "todo",
        params: { id: this.index },
      });
    },
  },
};
</script>

<style scoped>
li {
  margin: 15px;
  text-transform: capitalize;
}

li label {
  cursor: pointer;
}

li input {
  text-transform: capitalize;
}

button {
  margin-right: 15px;
}
.allButton {
  position: absolute;
  right: 5%;
}
</style>

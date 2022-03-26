<template>
  <li>
    <label v-if="!editMode"> {{ todo }} </label>
    <input v-if="editMode" v-model="inputEdited" />

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
    todo: String,
    index: Number,
  },
  mounted() {
    this.inputEdited = this.todo;
  },

  methods: {
    editList(index) {
      this.$emit("edit-todo", index);
      this.editMode = !this.editMode;
    },
    hapusList(index) {
      this.$emit("hapus-list", index);
    },
    editListBaru(index) {
      this.$emit("edit-list-baru", index, this.inputEdited);
      this.editList();
    },
  },
};
</script>

<style scoped>
li {
  margin: 15px;
}
button {
  margin-right: 15px;
}
.allButton {
  position: absolute;
  right: 15%;
}
</style>

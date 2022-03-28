<template>
  <div class="app">
    <button @click="backTo">Kembali</button>
    <h1>{{ oneTodo.title }}</h1>

    <p v-if="!editMode">{{ oneTodo.desc }}</p>

    <button v-if="!editMode" @click="ubahMode">Ubah Deskripsi</button>
    <div class="ubah-deskripsi">
      <input type="text" v-if="editMode" v-model="descBaru" />
      <button v-if="editMode" @click="ubahDesc(index)">Simpan</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailTodo",
  data() {
    return {
      oneTodo: [],
      index: 0,
      descBaru: "",
      editMode: false,
    };
  },

  watch: {
    oneTodo(value) {
      this.descBaru = value.desc;
    },
  },

  mounted() {
    this.descBaru = this.oneTodo.desc;
    this.getDatabyId();
  },

  methods: {
    backTo() {
      this.$router.go(-1);
    },
    getDatabyId() {
      this.index = this.$route.params.id;

      this.oneTodo = this.$store.state.listTodo.find(
        (item, id) => id == this.index
      );
    },
    ubahMode() {
      this.editMode = !this.editMode;
    },
    ubahDesc(index) {
      this.$store.dispatch("editDescValue", this.descBaru);
      this.$store.dispatch("editDesc", index);
      this.ubahMode();
    },
  },
};
</script>

<style scoped>
h1 {
  text-transform: capitalize;
}
button {
  padding: 3px;
}

input {
  width: 90%;
}

.ubah-deskripsi {
  margin-top: 25px;
  width: 100%;
  display: flex;
}

.ubah-deskripsi button {
  margin-left: 10px;
}
</style>

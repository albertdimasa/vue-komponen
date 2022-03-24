<template>
  <p v-if="listTodo">Hebat!</p>
</template>

<script>
export default {
  name: "TextHebat",
  props: ["listTodo"],
};
</script>

<style scoped></style>

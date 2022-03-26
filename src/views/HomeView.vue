<template>
  <div id="app">
    <h2>Todo List</h2>
    <TodoList />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";

export default {
  name: "HomeView",
  components: {
    TodoList,
  },
};
</script>

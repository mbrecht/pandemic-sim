<template>
  <div class="container">
    <h1 class="title">Pandemic Simulator</h1>
    <App />
  </div>
</template>

<script>
import App from "@/components/App.vue";

export default {
  name: "page",
  components: {
    App
  }
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Segoe UI";
  height: 100vh;
}

.title {
  font-size: 5rem;
  margin: 2rem 0;
  font-weight: normal;
}
</style>

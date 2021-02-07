<template>
  <p class="input-field">
    {{ label }}
    <input
      type="number"
      name="input-field"
      v-model="value"
      @change="handleChange"
      class="input"
    />
  </p>
</template>

<script>
export default {
  name: "Input Field",
  props: ["label"],
  data() {
    return {
      value: ""
    };
  },
  methods: {
    handleChange() {
      this.$emit("on-change", this.value);
    }
  }
};
</script>

<style scoped>
.input-field {
  font-size: 2rem;
  width: 20rem;
  display: flex;
  justify-content: space-between;
}

.input {
  font-size: 1.5rem;
  padding: 0.5rem;
  width: 10rem;
}
</style>

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

<template>
  <div class="input-group">
    <h3 class="name">Please enter your desired 2D Grid Size</h3>
    <InputField label="height" v-on:on-change="updateInput" />
    <InputField label="width" v-on:on-change="updateInput" />
    <Button content="Create Grid" v-on:on-click="handleClick" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: "",
      height: ""
    };
  },
  methods: {
    handleClick() {
      const { width, height } = this;
      console.log(this, width, height);
      this.$emit("on-click", { width, height });
    },
    updateInput(prop, val) {
      this[prop] = val;
    }
  }
};
</script>

<style scoped>
.input-group {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-items: center;
}

.name {
  font-size: 3rem;
  font-weight: normal;
}
</style>

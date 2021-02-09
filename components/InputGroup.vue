<template>
  <div class="input-group">
    <h3 class="name">Please enter your desired 2D Grid Size</h3>
    <p class="error-msg" v-if="validationError">
      Error: Values must be numbers greater than 0.
    </p>
    <InputField
      type="number"
      min="1"
      label="height"
      v-on:on-change="updateInput"
    />
    <InputField
      type="number"
      min="1"
      label="width"
      v-on:on-change="updateInput"
    />
    <Button content="Create Grid" v-on:on-click="handleClick" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: "",
      height: "",
      validationError: false
    };
  },
  methods: {
    handleClick() {
      const { width, height } = this;

      if (this.validate()) this.$emit("on-click", { width, height });
    },

    updateInput(prop, val) {
      this[prop] = val;
    },

    validate() {
      const { width, height } = this;

      if (width < 1 || height < 1) {
        this.validationError = true;
        return false;
      } else {
        this.validationError = false;
        return true;
      }
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

.error-msg {
  background-color: lightcoral;
  padding: 1rem;
}
</style>

<template>
  <td
    :class="className"
    @mouseover="addHover"
    @mouseout="removeHover"
    @click="toggleTile"
  ></td>
</template>

<script>
export default {
  name: "Tile",
  props: ["status", "pos", "selection", "setTile"],
  data() {
    const classList = ["tile", this.status];
    const className = classList.join(" ");

    return {
      classList,
      className,
      hover: false
    };
  },
  methods: {
    addHover() {
      if (this.selection && this.selection !== "healthy") {
        this.removeClass(this.status);
        this.addClass(this.selection);
      }
    },

    removeHover() {
      this.removeClass(this.selection);
      this.addClass(this.status);
    },

    removeClass(className) {
      this.classList = this.classList.filter(name => name !== className);
      this.updateClass();
    },

    addClass(className) {
      this.classList.push(className);
      this.updateClass();
    },

    updateClass() {
      this.className = this.classList.join(" ");
    },

    toggleTile() {
      if (this.selection && this.selection !== "healthy") {
        this.setTile({ ...this.pos, status: this.selection });
      }
    }
  }
};
</script>

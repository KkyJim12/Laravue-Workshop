<template>
  <div>
    <div class="styles">
      <h1>
        <slot></slot>
      </h1>
    </div>
  </div>
</template>

<style scoped>
.styles {
  border-radius: 10px;
  background: blue;
}
</style>

<script>
export default {};
</script>
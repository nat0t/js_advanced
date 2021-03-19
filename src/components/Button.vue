<template>
  <div class="wrapper" @click="$emit('clicked')">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
.wrapper {
  display: inline-block;
  padding: 5px;
  background: #ccc;
  color: #000;
}
</style>
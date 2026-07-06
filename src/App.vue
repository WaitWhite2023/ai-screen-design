<!--
 * new page
 * @author: RainyLover
 * @since: 2026-07-06
 * App.vue
-->

<template>
  <div class="container">
    <el-button>{{ title }}</el-button>
  </div>
</template>
<script setup lang="ts">
const title = ref('你好啊')
const obj = {
  name: 111,
}
</script>
<style scoped lang="scss"></style>

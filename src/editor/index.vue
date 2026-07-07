<!--
 * new page
 * @author: RainyLover
 * @since: 2026-07-07
 * index.vue
-->

<template>
  <div class="bg-[#23272e] h-screen editor">
    <header class="h-56 border-b border-[#30343d] header flex items-center px-20">
      <div class="w-300">
        <toolbar-left />
      </div>
      <div class="flex-1 text-center">中</div>
      <div class="w-300">右</div>
    </header>

    <main class="h-[calc(100%-56px)] flex w-full">
      <!-- Editor will be rendered here -->
      <!-- 物料 -->
      <aside class="w-3xs border-r border-[#30343d]">aside</aside>
      <!-- 图层 -->
      <aside class="w-156 border-r border-[#30343d]">layer</aside>
      <!-- 画布 -->
      <div class="canvas flex-1">画布</div>
      <!-- 属性 -->
      <aside class="w-3xs border-l border-[#30343d]">属性</aside>
    </main>
  </div>
</template>
<script setup lang="ts">
import ToolbarLeft from './toolbar/ToolbarLeft.vue'

defineOptions({
  name: 'ScreenEditor',
})
</script>
<style scoped lang="scss"></style>

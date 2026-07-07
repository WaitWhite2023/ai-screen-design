<!--
 * 顶部工具栏左侧区域
 * @author: RainyLover
 * @since: 2026-07-07
 * ToolbarLeft.vue
-->

<template>
  <div class="toolbar-left flex gap-20">
    <span>
      <Icon icon="qlementine-icons:ui-panel-left-16" />
    </span>
    <span>
      <Icon icon="qlementine-icons:ui-panel-right-16" />
    </span>
    <span>
      <Icon icon="streamline-plump:layers-1"></Icon>
    </span>
    <span>
      <Icon icon="gridicons:undo" />
    </span>
    <span>
      <Icon icon="gridicons:redo" />
    </span>
  </div>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue'
defineOptions({
  name: 'ToolbarLeft',
})
</script>
<style scoped lang="scss">
.toolbar-left {
  span {
    border: 1px solid #30343d;
    border-radius: 4px;
    cursor: pointer;
    padding: 4px;
  }
}
</style>

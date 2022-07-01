<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { onUnmounted, watch } from 'vue'
import LoadingComponent from './components/LoadingComponent.vue'
import { useConfigStore } from './stores/ConfigStore'
import FullscreenPhotoView from './views/FullscreenPhotoView.vue'

const config = useConfigStore()
config.load()

const { loaded } = storeToRefs(config)
let timerId = 0
watch([loaded], () => {
  // Start configuration refresh interval
  timerId = setInterval(() => config.load(), config.configRefreshIntervalSeconds * 1000)
})

onUnmounted(() => {
  clearInterval(timerId)
})
</script>

<template>
  <LoadingComponent v-if="!loaded" />
  <FullscreenPhotoView v-if="loaded" />
</template>

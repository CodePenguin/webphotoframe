<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { onUnmounted, watch } from 'vue'
import LoadingComponent from './components/LoadingComponent.vue'
import { useConfigStore } from './stores/ConfigStore'
import FullscreenPhotoView from './views/FullscreenPhotoView.vue'

const config = useConfigStore()
config.load()

const { configError, loaded } = storeToRefs(config)
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
  <LoadingComponent v-if="!loaded && !configError" />
  <div v-if="!loaded && configError" class="w-screen h-screen grid place-items-center">
    <p class="bg-orange-100 border-1 border-orange-500 rounded text-orange-900 m-4 px-4 py-3 font-bold">Photo Frame configuration is not available!</p>
  </div>
  <div v-if="loaded && configError" class="absolute z-50 m-2">
    <svg class="fill-current h-8 w-8 text-orange-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
      <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
    </svg>
  </div>
  <FullscreenPhotoView v-if="loaded" />
</template>

<script setup lang="ts">
import PhotoComponent from '@/components/PhotoComponent.vue'
import { useConfigStore } from '@/stores/ConfigStore'
import { storeToRefs } from 'pinia'
import { onMounted, onUnmounted, ref, watch } from 'vue'

const { photoSwitchIntervalSeconds, photos } = storeToRefs(useConfigStore())

let index = 0
const photo = photos.value[index]
const caption = ref(photo.caption)
const url = ref(photo.url)

let timerId = 0
function setPhotoSwitchChangeInterval() {
  clearInterval(timerId)
  timerId = setInterval(() => switchPhoto(), photoSwitchIntervalSeconds.value * 1000)
}

function switchPhoto() {
  index = index + 1 < photos.value.length ? index + 1 : 0
  const photo = photos.value[index]
  caption.value = photo.caption
  url.value = photo.url
}

onMounted(() => setPhotoSwitchChangeInterval())
onUnmounted(() => clearInterval(timerId))
watch([photoSwitchIntervalSeconds], () => setPhotoSwitchChangeInterval())
</script>

<template>
  <main>
    <div class="relative w-screen h-screen overflow-hidden">
      <PhotoComponent :caption="caption" :url="url" />
    </div>
  </main>
</template>
<script setup lang="ts">
import PhotoComponent from "@/components/PhotoComponent.vue";
import { useConfigStore } from "@/stores/ConfigStore";
import { onMounted, onUnmounted, ref } from "vue";

const config = useConfigStore();

let index = 0;
const photo = config.photos[index];
const url = ref(photo.url);

function switchPhoto() {
  index = index + 1 < config.photos.length ? index + 1 : 0;
  const photo = config.photos[index];
  url.value = photo.url;
}

let timerId = 0;
onMounted(() => {
  timerId = setInterval(() => switchPhoto(), 10000);
});

onUnmounted(() => {
  if (timerId != 0) {
    clearInterval(timerId);
  }
});
</script>

<template>
  <main>
    <PhotoComponent :url="url" @click="switchPhoto" />
  </main>
</template>

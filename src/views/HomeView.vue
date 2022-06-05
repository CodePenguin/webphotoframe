<script setup lang="ts">
import PhotoComponent from "@/components/PhotoComponent.vue";
import { onMounted, onUnmounted, ref } from "vue";

const url = ref("hummingbird.jpg");

function switchPhoto() {
  url.value =
    url.value === "hummingbird.jpg" ? "plates.jpg" : "hummingbird.jpg";
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

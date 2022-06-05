<script setup lang="ts">
import PhotoComponent from "@/components/PhotoComponent.vue";
import { ref } from "vue";

const url = ref("hummingbird.jpg");

function switchPhoto() {
  url.value =
    url.value === "hummingbird.jpg" ? "plates.jpg" : "hummingbird.jpg";
}
</script>

<template>
  <main>
    <PhotoComponent :url="url" @click="switchPhoto" />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import LoadingComponent from "./components/LoadingComponent.vue";
import { useConfigStore } from "./stores/ConfigStore";

const config = useConfigStore();
config.load();
</script>

<template>
  <LoadingComponent v-if="!config.loaded" />
  <RouterView v-if="config.loaded" />
</template>

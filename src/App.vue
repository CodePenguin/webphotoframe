<script setup lang="ts">
import { RouterView } from "vue-router";
import Loading from "./components/Loading.vue";
import { useConfigStore } from "./stores/ConfigStore";

const config = useConfigStore();
config.load();
</script>

<template>
  <Loading v-if="!config.loaded" />
  <RouterView v-if="config.loaded" />
</template>

<style>
@import "@/assets/base.css";
</style>

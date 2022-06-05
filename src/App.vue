<script setup lang="ts">
import { RouterView } from "vue-router";
import ConfigLoader from "./classes/ConfigLoader";
import Loading from "./components/Loading.vue";
import { useConfigStore } from "./stores/ConfigStore";

let configLoader = new ConfigLoader();
configLoader.load();

const config = useConfigStore();
</script>

<template>
  <Loading v-if="!config.loaded" />
  <RouterView v-if="config.loaded" />
</template>

<style>
@import "@/assets/base.css";
</style>

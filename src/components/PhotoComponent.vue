<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps<{
  url: string;
}>();

const photo = ref<HTMLImageElement>();
const photoUrl = ref(props.url);
const transitionPhoto = ref<HTMLImageElement>();
const transitionPhotoUrl = ref(props.url);

watch(
  () => props.url,
  (newValue, oldValue) => {
    if (transitionPhoto.value?.classList.contains("opacity-100")) {
      transitionPhotoUrl.value = oldValue;
      photoUrl.value = newValue;
      transitionPhoto.value?.classList.remove("opacity-100");
      transitionPhoto.value?.classList.add("opacity-0");
    } else {
      transitionPhotoUrl.value = newValue;
      photoUrl.value = oldValue;
      transitionPhoto.value?.classList.remove("opacity-0");
      transitionPhoto.value?.classList.add("opacity-100");
    }
  }
);
</script>

<template>
  <div class="relative w-full h-full overflow-hidden">
    <img
      :src="photoUrl"
      ref="photo"
      alt="Photo"
      class="object-cover w-full h-full"
    />
    <img
      :src="transitionPhotoUrl"
      ref="transitionPhoto"
      alt="Transition Photo"
      class="absolute top-0 left-0 object-cover w-full h-full transition-opacity duration-3000 ease-in-out opacity-0"
    />
    <div
      class="absolute w-full py-2.5 bottom-0 inset-x-0 text-white text-xs text-center"
    >
      {{ url }}
    </div>
  </div>
</template>

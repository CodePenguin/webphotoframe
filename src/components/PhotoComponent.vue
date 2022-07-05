<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  caption: string
  url: string
}>()

const photo = ref<HTMLDivElement>()
const photoUrl = ref(props.url)
const transitionPhoto = ref<HTMLDivElement>()
const transitionPhotoUrl = ref(props.url)
const photoLoaded = ref(true)
const transitionPhotoLoaded = ref(true)

watch(
  () => props.url,
  (newValue, oldValue) => {
    if (transitionPhoto.value?.classList.contains('opacity-100')) {
      transitionPhotoUrl.value = oldValue
      photoUrl.value = newValue
      transitionPhoto.value?.classList.remove('opacity-100')
      transitionPhoto.value?.classList.add('opacity-0')
    } else {
      transitionPhotoUrl.value = newValue
      photoUrl.value = oldValue
      transitionPhoto.value?.classList.remove('opacity-0')
      transitionPhoto.value?.classList.add('opacity-100')
    }
  }
)
</script>

<template>
  <div ref="photo" class="w-full h-full">
    <div v-if="!photoLoaded" class="bg-black object-cover w-full h-full grid place-items-center">
      <p class="bg-orange-100 border-1 border-orange-500 rounded text-orange-900 m-4 px-4 py-3 font-bold">Photo not available</p>
    </div>
    <img :src="photoUrl" alt="Photo" class="object-cover w-full h-full" @load="photoLoaded = true" @error="photoLoaded = false" />
  </div>
  <div ref="transitionPhoto" class="bg-black absolute top-0 left-0 w-full h-full transition-opacity duration-3000 ease-in-out opacity-0">
    <div v-if="!transitionPhotoLoaded" class="object-cover w-full h-full grid place-items-center">
      <p class="bg-orange-100 border-1 border-orange-500 rounded text-orange-900 m-4 px-4 py-3 font-bold">Photo not available</p>
    </div>
    <img :src="transitionPhotoUrl" alt="Transition Photo" class="object-cover w-full h-full" @load="transitionPhotoLoaded = true" @error="transitionPhotoLoaded = false" />
  </div>
  <div v-if="caption" class="photo-caption absolute w-full py-2.5 bottom-0 inset-x-0 text-white text-xs text-center">
    {{ caption }}
  </div>
</template>

<style scoped>
.photo-caption {
  text-shadow: 0 2px 2px #000000;
}
</style>

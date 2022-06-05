import { defineStore } from "pinia";
import type IPhoto from "@/interfaces/IPhoto";

export type ConfigModel = {
  loaded: boolean,
  photos: Array<IPhoto>
};

export const useConfigStore = defineStore({
  id: "config",
  state: () => ({
    loaded: false,
    photos: [],
  } as ConfigModel),
  getters: {},
  actions: {
    setLoaded(value: boolean) {
      this.loaded = value;
    },
    updatePhotos(photos: Array<IPhoto>) {
      console.log("Update photos");
      this.$patch( { photos });
    },
  },
});

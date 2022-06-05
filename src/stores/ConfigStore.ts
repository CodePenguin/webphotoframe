import axios from "axios";
import type { AxiosError, AxiosResponse } from "axios";
import { defineStore } from "pinia";
import type IConfig from "@/interfaces/IConfig";
import type IPhoto from "@/interfaces/IPhoto";

export type ConfigModel = {
  loaded: boolean;
  photos: Array<IPhoto>;
};

export const useConfigStore = defineStore({
  id: "config",
  state: () =>
    ({
      loaded: false,
      photos: [],
    } as ConfigModel),
  getters: {},
  actions: {
    load() {
      axios
        .get("photoframe.config.json")
        .then((response: AxiosResponse) => {
          const data: IConfig = response.data;
          this.updatePhotos(data.photos);
          this.setLoaded(true);
        })
        .catch((error: AxiosError) => {
          if (error.response?.status != 404) {
            console.log("Error retrieving configuration", error);
          }
        });
    },
    setLoaded(value: boolean) {
      this.loaded = value;
    },
    updatePhotos(photos: Array<IPhoto>) {
      console.log("Update photos");
      this.$patch({ photos });
    },
  },
});

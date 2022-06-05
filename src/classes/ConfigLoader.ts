import axios from "axios";
import type { AxiosError, AxiosResponse } from "axios";
import { useConfigStore } from "@/stores/ConfigStore";
import type IConfig from "@/interfaces/IConfig";

export default class ConfigLoader {
  load(): void {
    const config = useConfigStore();
    axios
      .get("photoframe.config.json")
      .then((response: AxiosResponse) => {
        const data: IConfig = response.data;
        config.updatePhotos(data.photos)
        config.setLoaded(true);
      })
      .catch((error: AxiosError) => {
        if (error.response?.status != 404) {
          console.log("Error retrieving configuration", error);
        }
      });
  }
}

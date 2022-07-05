import axios from 'axios'
import type { AxiosError, AxiosResponse } from 'axios'
import { defineStore } from 'pinia'
import type IConfig from '@/interfaces/IConfig'

export interface ILocalConfig extends IConfig {
  configError: boolean
  loaded: boolean
}

export const useConfigStore = defineStore({
  id: 'config',
  state: () =>
    ({
      configRefreshIntervalSeconds: 60,
      configError: false,
      loaded: false,
      photoSwitchIntervalSeconds: 10,
      photos: []
    } as ILocalConfig),
  getters: {},
  actions: {
    load() {
      axios
        .get('photoframe.config.json')
        .then((response: AxiosResponse) => {
          this.$patch({ ...response.data, loaded: true, configError: false })
        })
        .catch((error: AxiosError) => {
          if (error.response?.status != 404) {
            console.log('Error retrieving configuration', error)
          }
          this.$patch({ configError: true })
        })
    }
  }
})
